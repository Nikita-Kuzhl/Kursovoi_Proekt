-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: localhost    Database: car_service
-- ------------------------------------------------------
-- Server version	8.0.20

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
-- Table structure for table `car`
--

DROP TABLE IF EXISTS `car`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `car` (
  `id` int NOT NULL AUTO_INCREMENT,
  `brand` varchar(50) NOT NULL,
  `registration_mark` varchar(12) NOT NULL,
  `Color` varchar(50) NOT NULL,
  `Year_of_release` varchar(50) NOT NULL,
  `owner_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Car_fk0` (`owner_id`),
  CONSTRAINT `Car_fk0` FOREIGN KEY (`owner_id`) REFERENCES `owners` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `car`
--

LOCK TABLES `car` WRITE;
/*!40000 ALTER TABLE `car` DISABLE KEYS */;
INSERT INTO `car` VALUES (1,'VOLVO','A000AA','Синий','2010',5);
/*!40000 ALTER TABLE `car` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ordering services`
--

DROP TABLE IF EXISTS `ordering services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ordering services` (
  `id_orders` int NOT NULL,
  `id_types_work` int NOT NULL,
  `id_staff` int NOT NULL,
  KEY `Ordering Services_fk0` (`id_orders`),
  KEY `Ordering Services_fk1` (`id_types_work`),
  KEY `Ordering Services_fk3` (`id_staff`),
  CONSTRAINT `Ordering Services_fk0` FOREIGN KEY (`id_orders`) REFERENCES `orders` (`id`),
  CONSTRAINT `Ordering Services_fk1` FOREIGN KEY (`id_types_work`) REFERENCES `types of work` (`id`),
  CONSTRAINT `Ordering Services_fk3` FOREIGN KEY (`id_staff`) REFERENCES `staff` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ordering services`
--

LOCK TABLES `ordering services` WRITE;
/*!40000 ALTER TABLE `ordering services` DISABLE KEYS */;
/*!40000 ALTER TABLE `ordering services` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Date of receipt` date NOT NULL,
  `Price` int NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Orders_fk0` (`user_id`),
  CONSTRAINT `Orders_fk0` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `owners`
--

DROP TABLE IF EXISTS `owners`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `owners` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Owners_fk0` (`user_id`),
  CONSTRAINT `Owners_fk0` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `owners`
--

LOCK TABLES `owners` WRITE;
/*!40000 ALTER TABLE `owners` DISABLE KEYS */;
INSERT INTO `owners` VALUES (5,20);
/*!40000 ALTER TABLE `owners` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `specialty`
--

DROP TABLE IF EXISTS `specialty`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `specialty` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name_speciality` enum('Инженер','Автодиагност','Механик','Автожестянщик','Автомоляр','Автослесарь','Жестянщик','Шиномонтажник','Менеджер','Директор') NOT NULL,
  `discharge` int DEFAULT NULL,
  `id_staff` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Specialty_fk0` (`id_staff`),
  CONSTRAINT `Specialty_fk0` FOREIGN KEY (`id_staff`) REFERENCES `staff` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `specialty`
--

LOCK TABLES `specialty` WRITE;
/*!40000 ALTER TABLE `specialty` DISABLE KEYS */;
INSERT INTO `specialty` VALUES (3,'Инженер',1,3);
/*!40000 ALTER TABLE `specialty` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `staff`
--

DROP TABLE IF EXISTS `staff`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `staff` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Staff_fk0` (`user_id`),
  CONSTRAINT `Staff_fk0` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `staff`
--

LOCK TABLES `staff` WRITE;
/*!40000 ALTER TABLE `staff` DISABLE KEYS */;
INSERT INTO `staff` VALUES (3,19);
/*!40000 ALTER TABLE `staff` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `types of work`
--

DROP TABLE IF EXISTS `types of work`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `types of work` (
  `id` int NOT NULL AUTO_INCREMENT,
  `types_work` varchar(50) NOT NULL,
  `price` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `types of work`
--

LOCK TABLES `types of work` WRITE;
/*!40000 ALTER TABLE `types of work` DISABLE KEYS */;
INSERT INTO `types of work` VALUES (1,'Мойка',300),(2,'Реставрация авто и запчастей',5000),(3,'Шиномонтажные работы',1000),(4,'Внешний и внутренний тюнинг',2000),(5,'Установка акустических систем',1000),(6,'Кузовной ремонт',500),(7,'Замена ',2000),(8,'Диагностика ДВС',1000),(9,'Капитальный ремонт ДВС',3000),(10,'Замена свечей',2000),(11,'Замена масла в двигателе',3000),(12,'Замена сальников клапанов',2000),(13,'Замена поршневых колец',2000),(14,'Замена коренного сальника',3000),(15,'Замена лобового сальника',1000),(16,'Замена сальника распредвала',2000),(17,'Замена подушки двигателя',1000),(18,'Снятие и установка поддона',1500),(19,'Диагностика ходовой части',3000),(20,'Развал схождение',5000);
/*!40000 ALTER TABLE `types of work` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `login` varchar(20) NOT NULL,
  `pass` varchar(100) NOT NULL,
  `FCS` varchar(255) NOT NULL,
  `role` enum('Owners','Staff','Admin') DEFAULT 'Owners',
  `telephone` varchar(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (15,'Artem','$2a$15$g.2Tcqo81I6MX7Yu8eYDRe2Sy2HjFAWFh/hCjhm/WalQOpfIBVaLq','Sofia Artem So','Admin','8754121232'),(19,'ASD','$2a$15$fTU1SDNLhS4InQ1nYK.DrOi3GHy8tI0SUB/rVLdrsBA9Vj0.Ru6ku','Кужлев Никита Петрович','Staff','89107728560'),(20,'ASDF','$2a$15$lIOXNJ4KMEoYhCgMl/oGlOYdrz7PSbicylaZbVR608va8XXI62xZe','Лясов Виталий Власович','Owners','89203337458'),(23,'ФЫВФЫв','$2a$15$vtRDB0eShrhpOtkZHzHD/uzTzFOsIX9Fw2gteGP5sHqXAtZNKOdO.','ФЫв  фыв фыв','Owners','123123123');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-31 17:54:34
