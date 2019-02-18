"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fs = require("fs-extra");
const os = require("os");
const path = require("path");
const stream = require("stream");
const through2 = require("through2");
const safe = require("./safe");
tslib_1.__exportStar(require("fs-extra"), exports);
var safe_1 = require("./safe");
exports.statSafe = safe_1.stat;
exports.readdirSafe = safe_1.readdir;
function readdirp(dir, { filter, walkerOptions } = {}) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            const items = [];
            let rs = walk(dir, walkerOptions);
            if (filter) {
                rs = rs.pipe(through2.obj(function (obj, enc, cb) {
                    if (!filter || filter(obj)) {
                        this.push(obj);
                    }
                    cb();
                }));
            }
            rs
                .on('error', (err) => reject(err))
                .on('data', (item) => items.push(item.path))
                .on('end', () => resolve(items));
        });
    });
}
exports.readdirp = readdirp;
function fileToString(filePath) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        try {
            return yield fs.readFile(filePath, { encoding: 'utf8' });
        }
        catch (e) {
            if (e.code === 'ENOENT') {
                return '';
            }
            throw e;
        }
    });
}
exports.fileToString = fileToString;
function getFileChecksum(filePath) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const crypto = yield Promise.resolve().then(() => require('crypto'));
        return new Promise((resolve, reject) => {
            const hash = crypto.createHash('md5');
            const input = fs.createReadStream(filePath);
            input.on('error', (err) => {
                reject(err);
            });
            hash.once('readable', () => {
                const fullChecksum = hash.read().toString('hex');
                resolve(fullChecksum);
            });
            input.pipe(hash);
        });
    });
}
exports.getFileChecksum = getFileChecksum;
/**
 * Return true and cached checksums for a file by its path.
 *
 * Cached checksums are stored as `.md5` files next to the original file. If
 * the cache file is missing, the cached checksum is undefined.
 *
 * @param p The file path
 * @return Promise<[true checksum, cached checksum or undefined if cache file missing]>
 */
function getFileChecksums(p) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return Promise.all([
            getFileChecksum(p),
            (() => tslib_1.__awaiter(this, void 0, void 0, function* () {
                try {
                    const md5 = yield fs.readFile(`${p}.md5`, { encoding: 'utf8' });
                    return md5.trim();
                }
                catch (e) {
                    if (e.code !== 'ENOENT') {
                        throw e;
                    }
                }
            }))(),
        ]);
    });
}
exports.getFileChecksums = getFileChecksums;
/**
 * Store a cache file containing the source file's md5 checksum hash.
 *
 * @param p The file path
 * @param checksum The checksum. If excluded, the checksum is computed
 */
function cacheFileChecksum(p, checksum) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const md5 = yield getFileChecksum(p);
        yield fs.writeFile(`${p}.md5`, md5, { encoding: 'utf8' });
    });
}
exports.cacheFileChecksum = cacheFileChecksum;
function writeStreamToFile(stream, destination) {
    return new Promise((resolve, reject) => {
        const dest = fs.createWriteStream(destination);
        stream.pipe(dest);
        dest.on('error', reject);
        dest.on('finish', resolve);
    });
}
exports.writeStreamToFile = writeStreamToFile;
function pathAccessible(filePath, mode) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        try {
            yield fs.access(filePath, mode);
        }
        catch (e) {
            return false;
        }
        return true;
    });
}
exports.pathAccessible = pathAccessible;
function pathExists(filePath) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return pathAccessible(filePath, fs.constants.F_OK);
    });
}
exports.pathExists = pathExists;
/**
 * Find the base directory based on the path given and a marker file to look for.
 */
function findBaseDirectory(dir, file) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        if (!dir || !file) {
            return;
        }
        for (const d of compilePaths(dir)) {
            const results = yield safe.readdir(d);
            if (results.includes(file)) {
                return d;
            }
        }
    });
}
exports.findBaseDirectory = findBaseDirectory;
/**
 * Generate a random file path within the computer's temporary directory.
 *
 * @param prefix Optionally provide a filename prefix.
 */
function tmpfilepath(prefix) {
    const rn = Math.random().toString(16).substring(2, 8);
    const p = path.resolve(os.tmpdir(), prefix ? `${prefix}-${rn}` : rn);
    return p;
}
exports.tmpfilepath = tmpfilepath;
/**
 * Given an absolute system path, compile an array of paths working backwards
 * one directory at a time, always ending in the root directory.
 *
 * For example, `'/some/dir'` => `['/some/dir', '/some', '/']`
 *
 * @param filePath Absolute system base path.
 */
function compilePaths(filePath) {
    filePath = path.normalize(filePath);
    if (!path.isAbsolute(filePath)) {
        throw new Error(`${filePath} is not an absolute path`);
    }
    const parsed = path.parse(filePath);
    if (filePath === parsed.root) {
        return [filePath];
    }
    return filePath
        .slice(parsed.root.length)
        .split(path.sep)
        .map((segment, i, array) => parsed.root + path.join(...array.slice(0, array.length - i)))
        .concat(parsed.root);
}
exports.compilePaths = compilePaths;
class Walker extends stream.Readable {
    constructor(p, options = {}) {
        super({ objectMode: true });
        this.p = p;
        this.options = options;
        this.paths = [this.p];
    }
    _read() {
        const p = this.paths.shift();
        const { pathFilter } = this.options;
        if (!p) {
            this.push(null); // tslint:disable-line:no-null-keyword
            return;
        }
        fs.stat(p, (err, stats) => {
            if (err) {
                this.emit('error', err);
                return;
            }
            const item = { path: p, stats };
            if (stats.isDirectory()) {
                fs.readdir(p, (err, contents) => {
                    if (err) {
                        this.emit('error', err);
                        return;
                    }
                    let paths = contents.map(file => path.join(p, file));
                    if (pathFilter) {
                        paths = paths.filter(p => pathFilter(p.substring(this.p.length + 1)));
                    }
                    this.paths.push(...paths);
                    this.push(item);
                });
            }
            else {
                this.push(item);
            }
        });
    }
}
exports.Walker = Walker;
function walk(p, options = {}) {
    return new Walker(p, options);
}
exports.walk = walk;
