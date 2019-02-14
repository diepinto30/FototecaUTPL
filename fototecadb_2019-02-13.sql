# ************************************************************
# Sequel Pro SQL dump
# Versión 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.01 (MySQL 5.7.24)
# Base de datos: fototecadb
# Tiempo de Generación: 2019-02-13 18:24:12 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Volcado de tabla auth_group
# ------------------------------------------------------------

DROP TABLE IF EXISTS `auth_group`;

CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Volcado de tabla auth_group_permissions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `auth_group_permissions`;

CREATE TABLE `auth_group_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `group_id` (`group_id`,`permission_id`),
  KEY `auth_group__permission_id_1f49ccbbdc69d2fc_fk_auth_permission_id` (`permission_id`),
  CONSTRAINT `auth_group__permission_id_1f49ccbbdc69d2fc_fk_auth_permission_id` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permission_group_id_689710a9a73b7457_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Volcado de tabla auth_permission
# ------------------------------------------------------------

DROP TABLE IF EXISTS `auth_permission`;

CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `content_type_id` (`content_type_id`,`codename`),
  CONSTRAINT `auth__content_type_id_508cf46651277a81_fk_django_content_type_id` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;

INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`)
VALUES
	(1,'Can add actividades',1,'add_actividades'),
	(2,'Can change actividades',1,'change_actividades'),
	(3,'Can delete actividades',1,'delete_actividades'),
	(4,'Can add autor',2,'add_autor'),
	(5,'Can change autor',2,'change_autor'),
	(6,'Can delete autor',2,'delete_autor'),
	(7,'Can add categoria',3,'add_categoria'),
	(8,'Can change categoria',3,'change_categoria'),
	(9,'Can delete categoria',3,'delete_categoria'),
	(10,'Can add imagen',4,'add_imagen'),
	(11,'Can change imagen',4,'change_imagen'),
	(12,'Can delete imagen',4,'delete_imagen'),
	(13,'Can add imagen has autores',5,'add_imagenhasautores'),
	(14,'Can change imagen has autores',5,'change_imagenhasautores'),
	(15,'Can delete imagen has autores',5,'delete_imagenhasautores'),
	(16,'Can add imagen has categorias',6,'add_imagenhascategorias'),
	(17,'Can change imagen has categorias',6,'change_imagenhascategorias'),
	(18,'Can delete imagen has categorias',6,'delete_imagenhascategorias'),
	(19,'Can add megusta',7,'add_megusta'),
	(20,'Can change megusta',7,'change_megusta'),
	(21,'Can delete megusta',7,'delete_megusta'),
	(22,'Can add tipolicencia',8,'add_tipolicencia'),
	(23,'Can change tipolicencia',8,'change_tipolicencia'),
	(24,'Can delete tipolicencia',8,'delete_tipolicencia'),
	(25,'Can add auth user',9,'add_authuser'),
	(26,'Can change auth user',9,'change_authuser'),
	(27,'Can delete auth user',9,'delete_authuser'),
	(28,'Can add user',10,'add_user'),
	(29,'Can change user',10,'change_user'),
	(30,'Can delete user',10,'delete_user'),
	(31,'Can add log entry',11,'add_logentry'),
	(32,'Can change log entry',11,'change_logentry'),
	(33,'Can delete log entry',11,'delete_logentry'),
	(34,'Can add permission',12,'add_permission'),
	(35,'Can change permission',12,'change_permission'),
	(36,'Can delete permission',12,'delete_permission'),
	(37,'Can add group',13,'add_group'),
	(38,'Can change group',13,'change_group'),
	(39,'Can delete group',13,'delete_group'),
	(40,'Can add user',14,'add_user'),
	(41,'Can change user',14,'change_user'),
	(42,'Can delete user',14,'delete_user'),
	(43,'Can add content type',15,'add_contenttype'),
	(44,'Can change content type',15,'change_contenttype'),
	(45,'Can delete content type',15,'delete_contenttype'),
	(46,'Can add session',16,'add_session'),
	(47,'Can change session',16,'change_session'),
	(48,'Can delete session',16,'delete_session');

/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla auth_user
# ------------------------------------------------------------

DROP TABLE IF EXISTS `auth_user`;

CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(30) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `auth_user` WRITE;
/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;

INSERT INTO `auth_user` (`id`, `password`, `last_login`, `is_superuser`, `username`, `first_name`, `last_name`, `email`, `is_staff`, `is_active`, `date_joined`)
VALUES
	(1,'pbkdf2_sha256$20000$WeDpd4LgG7zt$CtgzSpc8ZTW67NReQM4BXq6Zh/8eYNi0IwqmGhBHdqk=','2019-02-13 17:42:14.890337',1,'diepinto30','','','diepinto30@gmail.com',1,1,'2019-02-13 17:42:00.520716'),
	(2,'pbkdf2_sha256$20000$GOjKdBnrxb2H$iaN6PciBaYQt/qqJI6rEJ9s4Cy2I8dNcE7nwzo87/mM=',NULL,0,'andrea','','','',0,1,'2019-02-13 17:57:54.440941'),
	(3,'pbkdf2_sha256$20000$0nyhHQFP9CMR$k9ybiY1vB1CLVUBfssN24wBRHss6kfPe5nXbkv7ZvqE=',NULL,0,'camila','','','',0,1,'2019-02-13 17:58:19.709872');

/*!40000 ALTER TABLE `auth_user` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla auth_user_groups
# ------------------------------------------------------------

DROP TABLE IF EXISTS `auth_user_groups`;

CREATE TABLE `auth_user_groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`,`group_id`),
  KEY `auth_user_groups_group_id_33ac548dcf5f8e37_fk_auth_group_id` (`group_id`),
  CONSTRAINT `auth_user_groups_group_id_33ac548dcf5f8e37_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_user_groups_user_id_4b5ed4ffdb8fd9b0_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Volcado de tabla auth_user_user_permissions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `auth_user_user_permissions`;

CREATE TABLE `auth_user_user_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`,`permission_id`),
  KEY `auth_user_u_permission_id_384b62483d7071f0_fk_auth_permission_id` (`permission_id`),
  CONSTRAINT `auth_user_u_permission_id_384b62483d7071f0_fk_auth_permission_id` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_user_user_permissi_user_id_7f0938558328534a_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Volcado de tabla django_admin_log
# ------------------------------------------------------------

DROP TABLE IF EXISTS `django_admin_log`;

CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `djang_content_type_id_697914295151027a_fk_django_content_type_id` (`content_type_id`),
  KEY `django_admin_log_user_id_52fdd58701c5f563_fk_auth_user_id` (`user_id`),
  CONSTRAINT `djang_content_type_id_697914295151027a_fk_django_content_type_id` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_52fdd58701c5f563_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;

INSERT INTO `django_admin_log` (`id`, `action_time`, `object_id`, `object_repr`, `action_flag`, `change_message`, `content_type_id`, `user_id`)
VALUES
	(1,'2019-02-13 17:50:03.249480','1','1 - copyright - El derecho de autor es un conjunto de normas jurídicas y principios que afirman los derechos morales y patrimoniales que la ley concede a los autores, por el simple hecho de la creació',1,'',8,1),
	(2,'2019-02-13 17:50:39.724969','1','Iglesia del Valle - Loja, Salvador Bustamante Celi y Guayaquil, Loja - 2019-02-13 - 2019-02-13',1,'',4,1),
	(3,'2019-02-13 17:51:20.636903','2','2 - creative commons - Creative Commons ―en español, «[Bienes] Comunes Creativos»― es una organización sin fines de lucro dedicada a promover el acceso y el intercambio de cultura. Desarrolla un conju',1,'',8,1),
	(4,'2019-02-13 17:53:54.617435','2','Puerta de la Ciudad - Loja, Está situada en la Av. Gran Colombia - 2019-02-13 - 2019-02-13',1,'',4,1),
	(5,'2019-02-13 17:55:27.639587','3','Parque Recreacional Jipiro - Loja, Velasco Ibarra 1982, Loja - 2019-02-13 - 2019-02-13',1,'',4,1),
	(6,'2019-02-13 17:56:50.225942','4','Plaza de San Sebastián - Loja, Simón Bolívar, Bernardo Valdivieso, Alonso de Mercadillo y Calle Lourdes. - 2019-02-13 - 2019-02-13',1,'',4,1),
	(7,'2019-02-13 17:57:42.672942','1','diepinto30 - Iglesia del Valle - Loja, Salvador Bustamante Celi y Guayaquil, Loja - 2019-02-13 - 2019-02-13 -Este es un de los lugares mas hermoso de loja ',1,'',1,1),
	(8,'2019-02-13 17:57:54.574961','2','andrea',1,'',14,1),
	(9,'2019-02-13 17:58:06.370612','2','andrea - Iglesia del Valle - Loja, Salvador Bustamante Celi y Guayaquil, Loja - 2019-02-13 - 2019-02-13 -hermoso :3 ',1,'',1,1),
	(10,'2019-02-13 17:58:19.844128','3','camila',1,'',14,1),
	(11,'2019-02-13 17:58:46.329982','3','camila - Puerta de la Ciudad - Loja, Está situada en la Av. Gran Colombia - 2019-02-13 - 2019-02-13 -quiero regresar a loja :3 xD ',1,'',1,1),
	(12,'2019-02-13 17:59:19.557928','1','1 - Rosario -Orellana - Ecuatoriana -roorellana@gmail.com',1,'',2,1),
	(13,'2019-02-13 17:59:30.516527','1','Iglesia del Valle - Loja, Salvador Bustamante Celi y Guayaquil, Loja - 2019-02-13 - 2019-02-13 - 1 - Rosario -Orellana - Ecuatoriana -roorellana@gmail.com',1,'',5,1),
	(14,'2019-02-13 17:59:37.700418','2','Puerta de la Ciudad - Loja, Está situada en la Av. Gran Colombia - 2019-02-13 - 2019-02-13 - 1 - Rosario -Orellana - Ecuatoriana -roorellana@gmail.com',1,'',5,1),
	(15,'2019-02-13 17:59:42.645224','3','Plaza de San Sebastián - Loja, Simón Bolívar, Bernardo Valdivieso, Alonso de Mercadillo y Calle Lourdes. - 2019-02-13 - 2019-02-13 - 1 - Rosario -Orellana - Ecuatoriana -roorellana@gmail.com',1,'',5,1),
	(16,'2019-02-13 17:59:51.417625','4','Parque Recreacional Jipiro - Loja, Velasco Ibarra 1982, Loja - 2019-02-13 - 2019-02-13 - 1 - Rosario -Orellana - Ecuatoriana -roorellana@gmail.com',1,'',5,1),
	(17,'2019-02-13 18:00:13.014141','1','1 - Mural -Murales de loja',1,'',3,1),
	(18,'2019-02-13 18:00:23.523823','2','2 - Monumentos -Monumentos de loja',1,'',3,1),
	(19,'2019-02-13 18:00:26.860144','1','Iglesia del Valle - Loja, Salvador Bustamante Celi y Guayaquil, Loja - 2019-02-13 - 2019-02-13 - 1 - Mural -Murales de loja',1,'',6,1),
	(20,'2019-02-13 18:00:33.379270','2','Puerta de la Ciudad - Loja, Está situada en la Av. Gran Colombia - 2019-02-13 - 2019-02-13 - 1 - Mural -Murales de loja',1,'',6,1),
	(21,'2019-02-13 18:00:41.269714','3','Parque Recreacional Jipiro - Loja, Velasco Ibarra 1982, Loja - 2019-02-13 - 2019-02-13 - 2 - Monumentos -Monumentos de loja',1,'',6,1),
	(22,'2019-02-13 18:00:46.092963','4','Plaza de San Sebastián - Loja, Simón Bolívar, Bernardo Valdivieso, Alonso de Mercadillo y Calle Lourdes. - 2019-02-13 - 2019-02-13 - 2 - Monumentos -Monumentos de loja',1,'',6,1),
	(23,'2019-02-13 18:03:09.277097','1','Iglesia del Valle - Loja, Salvador Bustamante Celi y Guayaquil, Loja - 2019-02-13 - 2019-02-13',2,'Modificado/a likes y img_qr.',4,1),
	(24,'2019-02-13 18:03:25.297235','3','Parque Recreacional Jipiro - Loja, Velasco Ibarra 1982, Loja - 2019-02-13 - 2019-02-13',2,'Modificado/a likes y img_qr.',4,1),
	(25,'2019-02-13 18:22:52.527731','4','Plaza de San Sebastián - Loja, Simón Bolívar, Bernardo Valdivieso, Alonso de Mercadillo y Calle Lourdes. - 2019-02-13 - 2019-02-13',2,'Modificado/a img_qr.',4,1),
	(26,'2019-02-13 18:23:13.715433','2','Puerta de la Ciudad - Loja, Está situada en la Av. Gran Colombia - 2019-02-13 - 2019-02-13',2,'Modificado/a img_qr.',4,1);

/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla django_content_type
# ------------------------------------------------------------

DROP TABLE IF EXISTS `django_content_type`;

CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_45f3b1d93ec8c61c_uniq` (`app_label`,`model`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;

INSERT INTO `django_content_type` (`id`, `app_label`, `model`)
VALUES
	(11,'admin','logentry'),
	(13,'auth','group'),
	(12,'auth','permission'),
	(14,'auth','user'),
	(15,'contenttypes','contenttype'),
	(1,'portal','actividades'),
	(9,'portal','authuser'),
	(2,'portal','autor'),
	(3,'portal','categoria'),
	(4,'portal','imagen'),
	(5,'portal','imagenhasautores'),
	(6,'portal','imagenhascategorias'),
	(7,'portal','megusta'),
	(8,'portal','tipolicencia'),
	(10,'portal','user'),
	(16,'sessions','session');

/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla django_migrations
# ------------------------------------------------------------

DROP TABLE IF EXISTS `django_migrations`;

CREATE TABLE `django_migrations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;

INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`)
VALUES
	(1,'contenttypes','0001_initial','2019-02-13 17:33:28.603182'),
	(2,'auth','0001_initial','2019-02-13 17:33:29.505306'),
	(3,'admin','0001_initial','2019-02-13 17:33:29.722440'),
	(4,'contenttypes','0002_remove_content_type_name','2019-02-13 17:33:29.885410'),
	(5,'auth','0002_alter_permission_name_max_length','2019-02-13 17:33:29.965467'),
	(6,'auth','0003_alter_user_email_max_length','2019-02-13 17:33:30.040737'),
	(7,'auth','0004_alter_user_username_opts','2019-02-13 17:33:30.055855'),
	(8,'auth','0005_alter_user_last_login_null','2019-02-13 17:33:30.132537'),
	(9,'auth','0006_require_contenttypes_0002','2019-02-13 17:33:30.135217'),
	(10,'portal','0001_initial','2019-02-13 17:33:31.996149'),
	(11,'sessions','0001_initial','2019-02-13 17:33:32.115927');

/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla django_session
# ------------------------------------------------------------

DROP TABLE IF EXISTS `django_session`;

CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_de54fa62` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;

INSERT INTO `django_session` (`session_key`, `session_data`, `expire_date`)
VALUES
	('qewubn2bgvuoj3kfg8m34ozv63o90dok','ZDkyYWJiNDRlODU4ZjI2MjdlYzk4NTgwMzQ4OTAxMmE1YmViYmYyZjp7Il9hdXRoX3VzZXJfaGFzaCI6ImUzMDgwMDc0ODNkYWFlZTcyMzZkOTZjYjZhODExNDI1OTE0ZmIzYzAiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZCIsIl9hdXRoX3VzZXJfaWQiOiIxIn0=','2019-02-27 17:42:14.896106');

/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla portal_actividades
# ------------------------------------------------------------

DROP TABLE IF EXISTS `portal_actividades`;

CREATE TABLE `portal_actividades` (
  `idactividad` int(11) NOT NULL AUTO_INCREMENT,
  `comentario` varchar(300) DEFAULT NULL,
  `fecha_comentario` date DEFAULT NULL,
  `idimagen` int(11) NOT NULL,
  `iduser_id` int(11) NOT NULL,
  PRIMARY KEY (`idactividad`),
  UNIQUE KEY `iduser_id` (`iduser_id`),
  KEY `portal_actividades_d314fc6a` (`idimagen`),
  CONSTRAINT `portal_activ_idimagen_28618d45fe381c7d_fk_portal_imagen_idimagen` FOREIGN KEY (`idimagen`) REFERENCES `portal_imagen` (`idimagen`),
  CONSTRAINT `portal_actividades_iduser_id_2111e6224c9359e2_fk_auth_user_id` FOREIGN KEY (`iduser_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `portal_actividades` WRITE;
/*!40000 ALTER TABLE `portal_actividades` DISABLE KEYS */;

INSERT INTO `portal_actividades` (`idactividad`, `comentario`, `fecha_comentario`, `idimagen`, `iduser_id`)
VALUES
	(1,'Este es un de los lugares mas hermoso de loja','2019-02-13',1,1),
	(2,'hermoso :3','2019-02-13',1,2),
	(3,'quiero regresar a loja :3 xD','2019-02-13',2,3);

/*!40000 ALTER TABLE `portal_actividades` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla portal_authuser
# ------------------------------------------------------------

DROP TABLE IF EXISTS `portal_authuser`;

CREATE TABLE `portal_authuser` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) NOT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(30) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Volcado de tabla portal_autor
# ------------------------------------------------------------

DROP TABLE IF EXISTS `portal_autor`;

CREATE TABLE `portal_autor` (
  `idautor` int(11) NOT NULL AUTO_INCREMENT,
  `nombreautor` varchar(100) NOT NULL,
  `apellidoautor` varchar(100) NOT NULL,
  `nacionalidad` varchar(50) DEFAULT NULL,
  `correo` varchar(80) NOT NULL,
  PRIMARY KEY (`idautor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `portal_autor` WRITE;
/*!40000 ALTER TABLE `portal_autor` DISABLE KEYS */;

INSERT INTO `portal_autor` (`idautor`, `nombreautor`, `apellidoautor`, `nacionalidad`, `correo`)
VALUES
	(1,'Rosario','Orellana','Ecuatoriana','roorellana@gmail.com');

/*!40000 ALTER TABLE `portal_autor` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla portal_categoria
# ------------------------------------------------------------

DROP TABLE IF EXISTS `portal_categoria`;

CREATE TABLE `portal_categoria` (
  `idcategoria` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(60) NOT NULL,
  `descripcion` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`idcategoria`),
  UNIQUE KEY `nombre` (`nombre`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `portal_categoria` WRITE;
/*!40000 ALTER TABLE `portal_categoria` DISABLE KEYS */;

INSERT INTO `portal_categoria` (`idcategoria`, `nombre`, `descripcion`)
VALUES
	(1,'Mural','Murales de loja'),
	(2,'Monumentos','Monumentos de loja');

/*!40000 ALTER TABLE `portal_categoria` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla portal_imagen
# ------------------------------------------------------------

DROP TABLE IF EXISTS `portal_imagen`;

CREATE TABLE `portal_imagen` (
  `idimagen` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `descripcion` text,
  `hayrostros` tinyint(1) DEFAULT NULL,
  `direccion` varchar(300) DEFAULT NULL,
  `foto` varchar(100) NOT NULL,
  `pais` varchar(200) DEFAULT NULL,
  `ciudad` varchar(300) DEFAULT NULL,
  `latitud` varchar(30) NOT NULL,
  `longitud` varchar(30) NOT NULL,
  `dimenciones` varchar(45) DEFAULT NULL,
  `Tecnica` varchar(45) DEFAULT NULL,
  `likes` int(11) DEFAULT NULL,
  `img_qr` varchar(100) DEFAULT NULL,
  `fecha_publicacion` date NOT NULL,
  `fecha_tomada` date NOT NULL,
  `idlicencia` int(11) NOT NULL,
  `iduser_id` int(11) NOT NULL,
  PRIMARY KEY (`idimagen`),
  KEY `portal_imagen_0862f5e7` (`idlicencia`),
  KEY `portal_imagen_d990434c` (`iduser_id`),
  CONSTRAINT `port_idlicencia_3b7c8a26f97c07bb_fk_portal_tipolicencia_idtiplic` FOREIGN KEY (`idlicencia`) REFERENCES `portal_tipolicencia` (`idtiplic`),
  CONSTRAINT `portal_imagen_iduser_id_7627de4b720378f_fk_auth_user_id` FOREIGN KEY (`iduser_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `portal_imagen` WRITE;
/*!40000 ALTER TABLE `portal_imagen` DISABLE KEYS */;

INSERT INTO `portal_imagen` (`idimagen`, `nombre`, `descripcion`, `hayrostros`, `direccion`, `foto`, `pais`, `ciudad`, `latitud`, `longitud`, `dimenciones`, `Tecnica`, `likes`, `img_qr`, `fecha_publicacion`, `fecha_tomada`, `idlicencia`, `iduser_id`)
VALUES
	(1,'Iglesia del Valle','La iglesia parroquia de El Valle en el municipio de Loja (Provincia de Loja, Ecuador), data del siglo XVII cuando el Cacique Quinto Alonso Pinza en el año de 1629 fundó el pueblo de San Juan de El Valle, ésta conjuntamente con San Sebastián forman las dos primeras parroquias de la ciudad de Loja. No se conoce la fecha exacta de la construcción de la Iglesia de El Valle pero consta como datos que entre los años 1642- 1645 era una capilla. Otras fuentes mencionan que la existencia del templo de El Valle está documentada en datos que confirman que el primer párroco, que firma como tal, en el libro de bautizos, es Miguel de Balcárse con fecha 7 de agosto de 1720.El 9 de diciembre del mismo año, consta un acta de la toma de posesión oficial de la parroquia por parte del mismo párroco. Así mismo, en un cuaderno de notas titulado priostes antiguos, se registran varios datos, entre ellos: que en 1675 se da una reunión presidida por el sacerdote Andrés de Segovia. En 1676, se da otra reunión en la casa del Mayordomo de la Cofradía del Santísimo Sacramento. Además el impulso de los párrocos Abraham Ramón, Fernando Kolednik, Carlos Alfonso Erreis, Enrique Guevara, Pascual Bracho, José María Rodríguez, Julián Lorente, entre otros, le dieron al templo del Valle aspectos muy atrayentes.',1,'Salvador Bustamante Celi y Guayaquil, Loja','portal/imgs/elvalle_jLEWlB6.jpg','Ecuador','Loja','-3.981479','-79.201347','n/s','n/s',5,'portal/imgs/QRS_fototeca/elValle.jpeg','2019-02-13','2019-02-13',1,1),
	(2,'Puerta de la Ciudad','Es la Puerta de Entrada a la ciudad, representa parte del Escudo de Loja, en el que se divisa un castillo medieval, por el cual se accede al centro de la ciudad. La entrada propiamente dicha, está conformada por el Puente Bolívar que pasa sobre el río Malacatos, un castillo y las esculturas de Don Quijote y su fiel compañero, Sancho. La entrada actual a la ciudad de Loja, es una creativa reproducción del primigenio escudo de armas y consagra el lema hidalgo de su fundación: \\\"FIDELIS LOXA LIBERIS\\\" Situada en la Av. Gran Colombia e iluminada con lámparas tipo colonial, el turista puede visitar cuatro salas de exposiciones temporales, un almacén de publicaciones y artesanía lojana, una cafetería y un mirador desde donde se puede observar parte de la zona céntrica de la ciudad de Loja.',0,'Está situada en la Av. Gran Colombia','portal/imgs/IMG_20180926_163400-01_Uhw3a6h.jpeg','Ecuador','Loja','-3.989723','-79.204174','n/s','n/s',1,'portal/imgs/QRS_fototeca/Jipiro_fwFKIfE.jpeg','2019-02-13','2019-02-13',1,1),
	(3,'Parque Recreacional Jipiro','La Unidad Parque Recreacional Jipiro (en idioma palta significa, lugar de descanso), constituye una de las principales atracciones de Loja. Está compuesto por más de 10 hectáreas y es conocido también como el parque de la Universalidad Cultural. Es considerado como único en el país debido a su composición. Una de sus características principales son los nueve Troncos etno-culturales representados con réplicas de las más destacadas expresiones arquitectónicas y culturales de la humanidad. A las 10 hectáreas que componen este parque les rodea los ríos Zamora y Jipiro y cuenta con el “Monumento a los romeriantes”, constituido por el Chaso lojano con su mujer, la chola cuencana y el zambo peruano con su gallo de pelea.',0,'Velasco Ibarra 1982, Loja','portal/imgs/IMG_20181028_172922-01_KXl2xOW.jpeg','Ecuador','Loja','-3.972048','-79.203507','n/s','n/s',0,'portal/imgs/QRS_fototeca/Jipiro.jpeg','2019-02-13','2019-02-13',2,1),
	(4,'Plaza de San Sebastián','Sin duda, es uno de los elementos más atractivos de Loja. En el centro de esta plaza se levanta una torre de 32 metros de altura, en cuya cumbre se encuentra un reloj de cuatro esferas y en su base encontramos cuatro relieves que indican los hechos más sobresalientes en la historia de Loja. La plaza, ubicada entre las calles Simón Bolívar, Bernardo Valdivieso, Alonso de Mercadillo y Calle Lourdes, está rodeada por construcciones de estilo colonial, con amplios portales, balcones de madera tallada y aleros tradicionales. Rodean a la plaza, construcciones de estilo antiguo, con amplios portales, balcones de madera tallada y aleros. En el lado sur está la vieja iglesia de San Sebastián, la casa conventual y el mercado sur, lugar en el que se ha venido realizando una feria semanal de productos agrícolas todos los domingos.',0,'Simón Bolívar, Bernardo Valdivieso, Alonso de Mercadillo y Calle Lourdes.','portal/imgs/independencialoja_x9W98qi.jpg','Ecuador','Loja','-4.001592','-79.201207','n/s','n/s',0,'portal/imgs/QRS_fototeca/Jipiro_zUqNzV8.jpeg','2019-02-13','2019-02-13',2,1);

/*!40000 ALTER TABLE `portal_imagen` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla portal_imagenhasautores
# ------------------------------------------------------------

DROP TABLE IF EXISTS `portal_imagenhasautores`;

CREATE TABLE `portal_imagenhasautores` (
  `idpropiedad` int(11) NOT NULL AUTO_INCREMENT,
  `idautor` int(11) NOT NULL,
  `idimagen` int(11) NOT NULL,
  PRIMARY KEY (`idpropiedad`),
  KEY `portal_imagenha_idautor_19284f9542a53146_fk_portal_autor_idautor` (`idautor`),
  KEY `portal_image_idimagen_446cd73923e8e73d_fk_portal_imagen_idimagen` (`idimagen`),
  CONSTRAINT `portal_image_idimagen_446cd73923e8e73d_fk_portal_imagen_idimagen` FOREIGN KEY (`idimagen`) REFERENCES `portal_imagen` (`idimagen`),
  CONSTRAINT `portal_imagenha_idautor_19284f9542a53146_fk_portal_autor_idautor` FOREIGN KEY (`idautor`) REFERENCES `portal_autor` (`idautor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `portal_imagenhasautores` WRITE;
/*!40000 ALTER TABLE `portal_imagenhasautores` DISABLE KEYS */;

INSERT INTO `portal_imagenhasautores` (`idpropiedad`, `idautor`, `idimagen`)
VALUES
	(1,1,1),
	(2,1,2),
	(3,1,4),
	(4,1,3);

/*!40000 ALTER TABLE `portal_imagenhasautores` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla portal_imagenhascategorias
# ------------------------------------------------------------

DROP TABLE IF EXISTS `portal_imagenhascategorias`;

CREATE TABLE `portal_imagenhascategorias` (
  `idtipo` int(11) NOT NULL AUTO_INCREMENT,
  `idcategoria` int(11) NOT NULL,
  `idimagen` int(11) NOT NULL,
  PRIMARY KEY (`idtipo`),
  KEY `por_idcategoria_42171b1730f8e3fe_fk_portal_categoria_idcategoria` (`idcategoria`),
  KEY `portal_image_idimagen_162a7cd9c29f918f_fk_portal_imagen_idimagen` (`idimagen`),
  CONSTRAINT `por_idcategoria_42171b1730f8e3fe_fk_portal_categoria_idcategoria` FOREIGN KEY (`idcategoria`) REFERENCES `portal_categoria` (`idcategoria`),
  CONSTRAINT `portal_image_idimagen_162a7cd9c29f918f_fk_portal_imagen_idimagen` FOREIGN KEY (`idimagen`) REFERENCES `portal_imagen` (`idimagen`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `portal_imagenhascategorias` WRITE;
/*!40000 ALTER TABLE `portal_imagenhascategorias` DISABLE KEYS */;

INSERT INTO `portal_imagenhascategorias` (`idtipo`, `idcategoria`, `idimagen`)
VALUES
	(1,1,1),
	(2,1,2),
	(3,2,3),
	(4,2,4);

/*!40000 ALTER TABLE `portal_imagenhascategorias` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla portal_megusta
# ------------------------------------------------------------

DROP TABLE IF EXISTS `portal_megusta`;

CREATE TABLE `portal_megusta` (
  `idmegusta` int(11) NOT NULL AUTO_INCREMENT,
  `me_gusta` tinyint(1) DEFAULT NULL,
  `fecha_megusta` date DEFAULT NULL,
  `idimagen` int(11) NOT NULL,
  `iduser_id` int(11) NOT NULL,
  PRIMARY KEY (`idmegusta`),
  UNIQUE KEY `iduser_id` (`iduser_id`),
  KEY `portal_megus_idimagen_640f59a485537392_fk_portal_imagen_idimagen` (`idimagen`),
  CONSTRAINT `portal_megus_idimagen_640f59a485537392_fk_portal_imagen_idimagen` FOREIGN KEY (`idimagen`) REFERENCES `portal_imagen` (`idimagen`),
  CONSTRAINT `portal_megusta_iduser_id_1b6bce5fc7702021_fk_auth_user_id` FOREIGN KEY (`iduser_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Volcado de tabla portal_tipolicencia
# ------------------------------------------------------------

DROP TABLE IF EXISTS `portal_tipolicencia`;

CREATE TABLE `portal_tipolicencia` (
  `idtiplic` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(150) NOT NULL,
  `descripcion` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`idtiplic`),
  UNIQUE KEY `nombre` (`nombre`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `portal_tipolicencia` WRITE;
/*!40000 ALTER TABLE `portal_tipolicencia` DISABLE KEYS */;

INSERT INTO `portal_tipolicencia` (`idtiplic`, `nombre`, `descripcion`)
VALUES
	(1,'copyright','El derecho de autor es un conjunto de normas jurídicas y principios que afirman los derechos morales y patrimoniales que la ley concede a los autores, por el simple hecho de la creación de una obra literaria, artística, musical, científica o didáctica, esté publicada o inédita.'),
	(2,'creative commons','Creative Commons ―en español, «[Bienes] Comunes Creativos»― es una organización sin fines de lucro dedicada a promover el acceso y el intercambio de cultura. Desarrolla un conjunto de instrumentos jurídicos de carácter gratuito que facilitan usar y compartir tanto la creatividad como el conocimiento');

/*!40000 ALTER TABLE `portal_tipolicencia` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
