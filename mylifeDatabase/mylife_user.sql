-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: mylife
-- ------------------------------------------------------
-- Server version	5.7.33-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int(2) NOT NULL AUTO_INCREMENT COMMENT '用户标识',
  `name` char(20) COLLATE utf8_unicode_ci NOT NULL COMMENT '用户名',
  `password` char(10) COLLATE utf8_unicode_ci NOT NULL COMMENT '密码',
  `power` tinyint(1) NOT NULL COMMENT '权限',
  `dianzan` int(10) NOT NULL DEFAULT '0' COMMENT '点赞',
  `content` varchar(800) COLLATE utf8_unicode_ci NOT NULL COMMENT '评论',
  `video` varchar(800) COLLATE utf8_unicode_ci NOT NULL COMMENT '视频',
  `image` varchar(3000) COLLATE utf8_unicode_ci NOT NULL COMMENT '图片',
  `address` varchar(3000) COLLATE utf8_unicode_ci NOT NULL COMMENT 'address',
  `gmt_create` datetime NOT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=COMPACT;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'你好！！！','abc123',1,101,'好朋友好朋友','false','[]','广东省东莞市常平大道88号东莞市人民政府','2021-10-17 18:14:19'),(2,'别闹，我会笑','1234',0,100,'好朋友好朋友','false','[]','广东省东莞市常平大道88号东莞市人民政府','2021-10-17 18:30:57'),(3,'奔跑的鹿','134',0,40,'好朋友好朋友','false','[]','广东省东莞市常平大道88号东莞市人民政府','2021-10-17 18:30:56'),(4,'美好时光','1345',0,50,'好朋友好朋友','false','[]','广东省东莞市常平大道88号东莞市人民政府','2021-10-17 18:30:56');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-17 18:37:13
