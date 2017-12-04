CREATE DATABASE dbapp;

USE  dbapp;

CREATE TABLE IF NOT EXISTS `users`(
    `id` int unsigned NOT NULL AUTO_INCREMENT,
    `username` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
    `password` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
    `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
    PRIMARY KEY (`id`)
) ;

DESCRIBE users;