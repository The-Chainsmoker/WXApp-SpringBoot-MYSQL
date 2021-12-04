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
-- Table structure for table `person`
--

DROP TABLE IF EXISTS `person`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `person` (
  `name` char(20) NOT NULL COMMENT '姓名',
  `age` char(10) NOT NULL COMMENT '年龄',
  `phone` varchar(20) NOT NULL COMMENT '电话',
  `address` varchar(50) NOT NULL COMMENT '地址',
  `dianzan` int(10) NOT NULL DEFAULT '0' COMMENT '点赞',
  `introduce` varchar(600) NOT NULL COMMENT '自我介绍',
  `slogan` varchar(50) NOT NULL COMMENT '口号',
  `title` varchar(50) NOT NULL COMMENT '标题',
  `experience` varchar(800) NOT NULL COMMENT '城院的经历',
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT COMMENT='个人信息';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `person`
--

LOCK TABLES `person` WRITE;
/*!40000 ALTER TABLE `person` DISABLE KEYS */;
INSERT INTO `person` VALUES ('Smokers','22','1372537343','广东东莞',100,'大家好！我来自东莞理工学院城市学院,是软件工程专业的一名大四学生.本人对软件开发和设计工作有浓厚的兴趣,热爱编程,软件行业充满信心和期待.','走进城院,留下足迹！','城院的那些事','在城院生活中,令我印象深刻的是一个学长他是大三啦,从大一到大三,认识他的所有人没有一个人对他的为人或者对他这个人本身有什么差评,他们班女生很多,但是无论你去问他们班的哪一个女生好看的不好看的都会说他这个人非常可靠,在他们班级,只要是他组织的活动,无论是好玩还是不好玩,大家都非常积极的响应他,因为是真的相信他。对于他的认识总还没有上大学的时候就开始了那个时候每一个班级都会有一个新生群,然后群里面都会有几个学长学姐帮忙解除新生的疑惑,那时候他就是在里面的,他非常健谈,无论是谁提出的问题,他都会耐心解决,并且他也会很细心地拍一些学校的路给我们看,告诉我们,如果到了大学的话,要去哪里应该往哪一条路走,他也会说,其实他真的超级期待我们来,因为他们已经很久没有学弟学妹了,那时候从群里面觉得就这些学长学姐都非常,都很耐心的帮助我们,可是等真正和她们见到面了之后我才发现原来好的只有他.');
/*!40000 ALTER TABLE `person` ENABLE KEYS */;
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
