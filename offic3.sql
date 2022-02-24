-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 24, 2022 at 03:07 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `offic3`
--

-- --------------------------------------------------------

--
-- Table structure for table `f_admins`
--

CREATE TABLE `f_admins` (
  `uid` bigint(20) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(20) NOT NULL DEFAULT 'admin'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `f_admins`
--

INSERT INTO `f_admins` (`uid`, `username`, `password`, `role`) VALUES
(1, 'admin', '$2a$09$5HpTlOUfEXP5Sviq4bIKEeEmz4qVi7diYopuaSPqaDGqlZZsdKcuS', 'admin'),
(2, 'super', '$2a$09$5HpTlOUfEXP5Sviq4bIKEeEmz4qVi7diYopuaSPqaDGqlZZsdKcuS', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `f_logs`
--

CREATE TABLE `f_logs` (
  `l_id` bigint(20) UNSIGNED NOT NULL,
  `l_email` varchar(100) NOT NULL,
  `l_password` varchar(150) NOT NULL,
  `l_ip` varchar(20) NOT NULL,
  `l_created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `f_logs`
--

INSERT INTO `f_logs` (`l_id`, `l_email`, `l_password`, `l_ip`, `l_created_at`) VALUES
(12, 'hshs@gmail.com', 'hshjdjdhs', '::ffff:192.168.43.22', '2022-02-23 11:30:59');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `f_admins`
--
ALTER TABLE `f_admins`
  ADD PRIMARY KEY (`uid`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `f_logs`
--
ALTER TABLE `f_logs`
  ADD UNIQUE KEY `l_id` (`l_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `f_admins`
--
ALTER TABLE `f_admins`
  MODIFY `uid` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `f_logs`
--
ALTER TABLE `f_logs`
  MODIFY `l_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
