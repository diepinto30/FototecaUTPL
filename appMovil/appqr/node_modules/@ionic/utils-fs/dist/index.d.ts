/// <reference types="node" />
import * as fs from 'fs-extra';
import * as stream from 'stream';
export * from 'fs-extra';
export { stat as statSafe, readdir as readdirSafe } from './safe';
export interface ReaddirPOptions {
    readonly filter?: (item: WalkerItem) => boolean;
    readonly walkerOptions?: WalkerOptions;
}
export declare function readdirp(dir: string, { filter, walkerOptions }?: ReaddirPOptions): Promise<string[]>;
export declare function fileToString(filePath: string): Promise<string>;
export declare function getFileChecksum(filePath: string): Promise<string>;
/**
 * Return true and cached checksums for a file by its path.
 *
 * Cached checksums are stored as `.md5` files next to the original file. If
 * the cache file is missing, the cached checksum is undefined.
 *
 * @param p The file path
 * @return Promise<[true checksum, cached checksum or undefined if cache file missing]>
 */
export declare function getFileChecksums(p: string): Promise<[string, string | undefined]>;
/**
 * Store a cache file containing the source file's md5 checksum hash.
 *
 * @param p The file path
 * @param checksum The checksum. If excluded, the checksum is computed
 */
export declare function cacheFileChecksum(p: string, checksum?: string): Promise<void>;
export declare function writeStreamToFile(stream: NodeJS.ReadableStream, destination: string): Promise<any>;
export declare function pathAccessible(filePath: string, mode: number): Promise<boolean>;
export declare function pathExists(filePath: string): Promise<boolean>;
/**
 * Find the base directory based on the path given and a marker file to look for.
 */
export declare function findBaseDirectory(dir: string, file: string): Promise<string | undefined>;
/**
 * Generate a random file path within the computer's temporary directory.
 *
 * @param prefix Optionally provide a filename prefix.
 */
export declare function tmpfilepath(prefix?: string): string;
/**
 * Given an absolute system path, compile an array of paths working backwards
 * one directory at a time, always ending in the root directory.
 *
 * For example, `'/some/dir'` => `['/some/dir', '/some', '/']`
 *
 * @param filePath Absolute system base path.
 */
export declare function compilePaths(filePath: string): string[];
export interface WalkerItem {
    readonly path: string;
    readonly stats: fs.Stats;
}
export interface Walker extends stream.Readable {
    on(event: 'data', callback: (item: WalkerItem) => void): this;
    on(event: string, callback: (...args: any[]) => any): this;
}
export interface WalkerOptions {
    pathFilter?: (p: string) => boolean;
}
export declare class Walker extends stream.Readable {
    readonly p: string;
    readonly options: WalkerOptions;
    readonly paths: string[];
    constructor(p: string, options?: WalkerOptions);
    _read(): void;
}
export declare function walk(p: string, options?: WalkerOptions): Walker;
