SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

-- -----------------------------------------------------
-- Schema portfolio
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `portfolio` DEFAULT CHARACTER SET utf8 ;
USE `portfolio` ;

-- -----------------------------------------------------
-- Table `portfolio`.`project`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio`.`project` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(150) NOT NULL,
  `description` VARCHAR(600) NOT NULL,
  `picture` VARCHAR(300) NULL,
  `link` VARCHAR(300) NULL,
  PRIMARY KEY (`Id`));


-- -----------------------------------------------------
-- Table `portfolio`.`tool`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio`.`tool` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(150) NOT NULL,
  PRIMARY KEY (`Id`));

-- -----------------------------------------------------
-- Table `portfolio`.`project_has_tools`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio`.`project_has_tools` (
  `project_Id` INT NOT NULL,
  `tool_Id` INT NOT NULL,
  PRIMARY KEY (`project_Id`, `tool_Id`),
  CONSTRAINT `fk_project_has_tools_tool`
    FOREIGN KEY (`tool_Id`)
    REFERENCES `portfolio`.`tool` (`Id`),
  CONSTRAINT `fk_project_has_tools_project`
    FOREIGN KEY (`project_Id`)
    REFERENCES `portfolio`.`project` (`Id`));

-- -----------------------------------------------------
-- Table `portfolio`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio`.`user` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(150) NOT NULL,
  `email` VARCHAR(600) NOT NULL,
  `password_hash` VARCHAR(300) NOT NULL,
  PRIMARY KEY (`Id`));


/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
