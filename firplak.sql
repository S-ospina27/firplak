-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-11-2023 a las 17:11:06
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `firplak`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `create_company` (IN `_idchannels` INT(11), IN `_company_name` VARCHAR(45), IN `_company_address` VARCHAR(45), IN `_company_email` VARCHAR(256), IN `_company_password` VARCHAR(45), IN `_company_document_type` ENUM('CC','NIT'), IN `_company_document_number` INT(11))   BEGIN
INSERT INTO company(
idchannels, 
company_name, 
company_address, 
company_email, 
company_password, 
company_document_type, 
company_document_number
	)VALUES(
_idchannels, 
_company_name, 
_company_address, 
_company_email, 
_company_password, 
_company_document_type, 
_company_document_number
    );
    
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `create_manufacturing` (IN `_idpurcharse_order` INT(11), IN `_idpurchase_order_products` INT(11), IN `_idstate` INT(11), IN `_manufacturing_order_type_line` ENUM('MTO','MTS'))   BEGIN
INSERT INTO manufacturing_order (
idpurcharse_order,
idpurchase_order_products,
idstate,
manufacturing_order_type_line
) VALUES(
_idpurcharse_order,
_idpurchase_order_products,
_idstate,
_manufacturing_order_type_line
);
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `create_product` (IN `_products_name` VARCHAR(45))   BEGIN
INSERT INTO products(products_name) VALUES(_products_name);
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `create_purcharse_order` (IN `_idcompany` INT(11), IN `_purcharse_order_name` VARCHAR(45), IN `_purcharse_order_type` ENUM('MANUAL','DIGITAL'), IN `_purcharse_order_file` VARCHAR(100))   BEGIN
INSERT INTO purcharse_order(
	idcompany,
    purcharse_order_name,
    purcharse_order_type,
    purcharse_order_file
	) VALUES (
    _idcompany,
    _purcharse_order_name,
    _purcharse_order_type,
    _purcharse_order_file
    );
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `create_purcharse_products` (IN `_idpurcharse_order` INT(11), IN `_idproducts` INT(11), IN `_purchase_order_products_amount` INT(11), IN `_purchase_order_products_date_delivery` DATETIME)   BEGIN
INSERT INTO purchase_order_products (
idpurcharse_order,
idproducts,
purchase_order_products_amount,
purchase_order_products_date_delivery
) VALUES(
_idpurcharse_order,
_idproducts,
_purchase_order_products_amount,
_purchase_order_products_date_delivery
);
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `update_company` (IN `_idchannels` INT(11), IN `_company_name` VARCHAR(45), IN `_company_address` VARCHAR(45), IN `_company_email` VARCHAR(256), IN `_company_password` VARCHAR(45), IN `_company_document_type` ENUM('CC','NIT'), IN `_company_document_number` INT(11), IN `_idcompany` INT(11))   BEGIN
 UPDATE company SET idchannels =_idchannels,
 company_name =_company_name,
 company_address=_company_address,
 company_email=_company_email,
 company_password =_company_password,
 company_document_type =_company_document_type,
 company_document_number =_company_document_number
 WHERE 	idcompany = _idcompany;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `update_delivery_man` (IN `_delivery_man_name` VARCHAR(45), IN `_delivery_manco_email` VARCHAR(256), IN `_delivery_man_password` VARCHAR(45), IN `_iddelivery_man` INT(11))   BEGIN
UPDATE delivery_man set  delivery_man_name = _delivery_man_name,
delivery_manco_email=_delivery_manco_email,
delivery_man_password=_delivery_man_password
WHERE iddelivery_man =_iddelivery_man;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `update_product` (IN `_products_name` VARCHAR(45), IN `_idproducts` INT(11))   BEGIN
UPDATE products SET products_name = _products_name
WHERE idproducts =_idproducts;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `update_purchaseProduct` (IN `_idpurchase_order_products` INT(11), IN `_purchase_order_products_amount` INT(11))   BEGIN
 UPDATE purchase_order_products SET purchase_order_products_amount = _purchase_order_products_amount
 WHERE idpurchase_order_products = _idpurchase_order_products;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `update__purcharse_order` (IN `_purcharse_order_name` VARCHAR(45), IN `_idpurcharse_order` INT(11))   BEGIN
UPDATE purcharse_order SET purcharse_order_name = _purcharse_order_name
WHERE idpurcharse_order = _idpurcharse_order;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `channels`
--

CREATE TABLE `channels` (
  `idchannels` int(11) NOT NULL,
  `channels_name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `channels`
--

INSERT INTO `channels` (`idchannels`, `channels_name`) VALUES
(1, 'Constructora'),
(2, 'Almacenes'),
(3, 'E-commerce');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `company`
--

CREATE TABLE `company` (
  `idcompany` int(11) NOT NULL,
  `idchannels` int(11) NOT NULL,
  `company_name` varchar(45) NOT NULL,
  `company_address` varchar(45) NOT NULL,
  `company_email` varchar(256) NOT NULL,
  `company_password` varchar(45) NOT NULL,
  `company_document_type` enum('CC','NIT') NOT NULL,
  `company_document_number` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `company`
--

INSERT INTO `company` (`idcompany`, `idchannels`, `company_name`, `company_address`, `company_email`, `company_password`, `company_document_type`, `company_document_number`) VALUES
(1, 2, 'SANTI S.A.S', 'CRA50#100-36', 'SANTI@HOTMAIL.COM', '123', 'CC', 1214740288),
(2, 2, 'laura', 'cra50#100-37', 'laura@hotmail.com', '123', 'NIT', 1214740289),
(3, 1, 'oneida S.A.S', 'cra 50 #100-36', 'oneida@hotmai.com', '123', 'CC', 1214741031),
(4, 1, 'SANTIAGO HERNESTO', 'CRA50#100-35', 'HERNESTO@HOTMAIL.COM', '123', 'NIT', 1214745030),
(5, 1, 'eugenio', 'cra50#100-46', 'eugeni@hotmail.com', '123', 'CC', 31212451);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `deliveries`
--

CREATE TABLE `deliveries` (
  `iddeliveries` int(11) NOT NULL,
  `iddelivery_man` int(11) NOT NULL,
  `idmanufacturing_order` int(11) NOT NULL,
  `idstate` int(11) NOT NULL,
  `deliveries_dispatch_date` date NOT NULL,
  `deliveries_novelty` varchar(256) NOT NULL,
  `deliveries_photo` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `delivery_man`
--

CREATE TABLE `delivery_man` (
  `iddelivery_man` int(11) NOT NULL,
  `delivery_man_name` varchar(45) NOT NULL,
  `delivery_manco_email` varchar(256) NOT NULL,
  `delivery_man_password` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `delivery_man`
--

INSERT INTO `delivery_man` (`iddelivery_man`, `delivery_man_name`, `delivery_manco_email`, `delivery_man_password`) VALUES
(1, 'santi', 'santi@hotmail.com', '123'),
(2, 'laura', 'laura@hotmail.com', '123'),
(3, 'oneida', 'oneida@hotmail.com', '123'),
(4, 'santiago', 'ordoñes@hotmail.com', 'undefined'),
(5, 'laura', 'jesus@hotmail.com', 'undefined'),
(6, 'oneida', 'elmen@hotmail.com', 'undefined'),
(7, 'santiago', 'santi@hotmail.com', 'undefined'),
(8, 'laura', '[object Object]', '123'),
(9, 'oneida', '[object Object]', '123');

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `get_company`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `get_company` (
`idcompany` int(11)
,`idchannels` int(11)
,`channels_name` varchar(45)
,`company_name` varchar(45)
,`company_address` varchar(45)
,`company_email` varchar(256)
,`company_password` varchar(45)
,`company_document_type` enum('CC','NIT')
,`company_document_number` int(11)
);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `get_purcharse_order`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `get_purcharse_order` (
`idpurcharse_order` int(11)
,`company_document_type` enum('CC','NIT')
,`company_document_number` int(11)
,`company_name` varchar(45)
,`purcharse_order_name` varchar(45)
,`purcharse_order_type` enum('MANUAL','DIGITAL')
,`purcharse_order_file` varchar(100)
);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `get_purcharse_order_products`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `get_purcharse_order_products` (
`idpurchase_order_products` int(11)
,`idpurcharse_order` int(11)
,`idproducts` int(11)
,`products_name` varchar(45)
,`purchase_order_products_amount` int(11)
,`purchase_order_products_date_delivery` datetime
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `manufacturing_order`
--

CREATE TABLE `manufacturing_order` (
  `idmanufacturing_order` int(11) NOT NULL,
  `idpurcharse_order` int(11) NOT NULL,
  `idpurchase_order_products` int(11) NOT NULL,
  `idstate` int(11) NOT NULL,
  `manufacturing_order_type_line` enum('MTO','MTS') NOT NULL,
  `idstore` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `manufacturing_order`
--

INSERT INTO `manufacturing_order` (`idmanufacturing_order`, `idpurcharse_order`, `idpurchase_order_products`, `idstate`, `manufacturing_order_type_line`, `idstore`) VALUES
(1, 1, 1, 2, 'MTO', 2),
(2, 1, 2, 2, 'MTS', 1),
(3, 1, 2, 2, 'MTO', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `idproducts` int(11) NOT NULL,
  `products_name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`idproducts`, `products_name`) VALUES
(1, 'Baños'),
(2, 'Cocinas'),
(3, 'Duchas'),
(8, 'fe'),
(9, 'lauras');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `purcharse_order`
--

CREATE TABLE `purcharse_order` (
  `idpurcharse_order` int(11) NOT NULL,
  `idcompany` int(11) NOT NULL,
  `purcharse_order_name` varchar(45) NOT NULL,
  `purcharse_order_type` enum('MANUAL','DIGITAL') NOT NULL,
  `purcharse_order_file` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `purcharse_order`
--

INSERT INTO `purcharse_order` (`idpurcharse_order`, `idcompany`, `purcharse_order_name`, `purcharse_order_type`, `purcharse_order_file`) VALUES
(1, 1, 'santiago ospina', 'MANUAL', NULL),
(2, 1, 'hernesto', 'MANUAL', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `purchase_order_products`
--

CREATE TABLE `purchase_order_products` (
  `idpurchase_order_products` int(11) NOT NULL,
  `idpurcharse_order` int(11) NOT NULL,
  `idproducts` int(11) NOT NULL,
  `purchase_order_products_amount` int(11) NOT NULL,
  `purchase_order_products_date_delivery` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `purchase_order_products`
--

INSERT INTO `purchase_order_products` (`idpurchase_order_products`, `idpurcharse_order`, `idproducts`, `purchase_order_products_amount`, `purchase_order_products_date_delivery`) VALUES
(1, 1, 1, 1000, '2023-12-27 14:30:00'),
(2, 1, 2, 100, '2023-12-30 14:30:00'),
(3, 1, 1, 2000, '2023-11-29 16:03:44'),
(4, 1, 2, 200, '2023-11-29 16:47:53');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `state`
--

CREATE TABLE `state` (
  `idstate` int(11) NOT NULL,
  `state_name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `state`
--

INSERT INTO `state` (`idstate`, `state_name`) VALUES
(1, 'REGISTRADA'),
(2, 'COMPLETADA'),
(3, 'EN-REPARTO'),
(4, 'EN-BODEGA'),
(5, 'ENTREGADO');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `store`
--

CREATE TABLE `store` (
  `idstore` int(11) NOT NULL,
  `storeco_name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `store`
--

INSERT INTO `store` (`idstore`, `storeco_name`) VALUES
(1, 'PT01'),
(2, 'PT02');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `iduser` int(11) NOT NULL,
  `user_nombre` varchar(45) NOT NULL,
  `user_email` varchar(256) NOT NULL,
  `user_password` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`iduser`, `user_nombre`, `user_email`, `user_password`) VALUES
(1, 'santiago', 'santi@hotmail.com', '123');

-- --------------------------------------------------------

--
-- Estructura para la vista `get_company`
--
DROP TABLE IF EXISTS `get_company`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `get_company`  AS SELECT `cp`.`idcompany` AS `idcompany`, `cp`.`idchannels` AS `idchannels`, `cn`.`channels_name` AS `channels_name`, `cp`.`company_name` AS `company_name`, `cp`.`company_address` AS `company_address`, `cp`.`company_email` AS `company_email`, `cp`.`company_password` AS `company_password`, `cp`.`company_document_type` AS `company_document_type`, `cp`.`company_document_number` AS `company_document_number` FROM (`company` `cp` join `channels` `cn` on(`cp`.`idchannels` = `cn`.`idchannels`))  ;

-- --------------------------------------------------------

--
-- Estructura para la vista `get_purcharse_order`
--
DROP TABLE IF EXISTS `get_purcharse_order`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `get_purcharse_order`  AS SELECT `purcharse`.`idpurcharse_order` AS `idpurcharse_order`, `cp`.`company_document_type` AS `company_document_type`, `cp`.`company_document_number` AS `company_document_number`, `cp`.`company_name` AS `company_name`, `purcharse`.`purcharse_order_name` AS `purcharse_order_name`, `purcharse`.`purcharse_order_type` AS `purcharse_order_type`, `purcharse`.`purcharse_order_file` AS `purcharse_order_file` FROM (`purcharse_order` `purcharse` join `company` `cp` on(`purcharse`.`idcompany` = `cp`.`idcompany`))  ;

-- --------------------------------------------------------

--
-- Estructura para la vista `get_purcharse_order_products`
--
DROP TABLE IF EXISTS `get_purcharse_order_products`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `get_purcharse_order_products`  AS SELECT `orderproduct`.`idpurchase_order_products` AS `idpurchase_order_products`, `orderproduct`.`idpurcharse_order` AS `idpurcharse_order`, `orderproduct`.`idproducts` AS `idproducts`, `pt`.`products_name` AS `products_name`, `orderproduct`.`purchase_order_products_amount` AS `purchase_order_products_amount`, `orderproduct`.`purchase_order_products_date_delivery` AS `purchase_order_products_date_delivery` FROM (`purchase_order_products` `orderproduct` join `products` `pt` on(`orderproduct`.`idproducts` = `pt`.`idproducts`))  ;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `channels`
--
ALTER TABLE `channels`
  ADD PRIMARY KEY (`idchannels`),
  ADD UNIQUE KEY `idchannels_UNIQUE` (`idchannels`);

--
-- Indices de la tabla `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`idcompany`),
  ADD UNIQUE KEY `idcompany_UNIQUE` (`idcompany`);

--
-- Indices de la tabla `deliveries`
--
ALTER TABLE `deliveries`
  ADD PRIMARY KEY (`iddeliveries`),
  ADD UNIQUE KEY `iddeliveries_UNIQUE` (`iddeliveries`);

--
-- Indices de la tabla `delivery_man`
--
ALTER TABLE `delivery_man`
  ADD PRIMARY KEY (`iddelivery_man`),
  ADD UNIQUE KEY `iddelivery_man_UNIQUE` (`iddelivery_man`);

--
-- Indices de la tabla `manufacturing_order`
--
ALTER TABLE `manufacturing_order`
  ADD PRIMARY KEY (`idmanufacturing_order`),
  ADD UNIQUE KEY `idmanufacturing_order_UNIQUE` (`idmanufacturing_order`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`idproducts`);

--
-- Indices de la tabla `purcharse_order`
--
ALTER TABLE `purcharse_order`
  ADD PRIMARY KEY (`idpurcharse_order`),
  ADD UNIQUE KEY `idpurcharse_order_UNIQUE` (`idpurcharse_order`);

--
-- Indices de la tabla `purchase_order_products`
--
ALTER TABLE `purchase_order_products`
  ADD PRIMARY KEY (`idpurchase_order_products`),
  ADD UNIQUE KEY `idpurchase_order_products_UNIQUE` (`idpurchase_order_products`);

--
-- Indices de la tabla `state`
--
ALTER TABLE `state`
  ADD PRIMARY KEY (`idstate`),
  ADD UNIQUE KEY `idstate_UNIQUE` (`idstate`);

--
-- Indices de la tabla `store`
--
ALTER TABLE `store`
  ADD PRIMARY KEY (`idstore`),
  ADD UNIQUE KEY `idstore_UNIQUE` (`idstore`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`iduser`),
  ADD UNIQUE KEY `iduser_UNIQUE` (`iduser`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `channels`
--
ALTER TABLE `channels`
  MODIFY `idchannels` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `company`
--
ALTER TABLE `company`
  MODIFY `idcompany` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `deliveries`
--
ALTER TABLE `deliveries`
  MODIFY `iddeliveries` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `delivery_man`
--
ALTER TABLE `delivery_man`
  MODIFY `iddelivery_man` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `manufacturing_order`
--
ALTER TABLE `manufacturing_order`
  MODIFY `idmanufacturing_order` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `idproducts` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `purcharse_order`
--
ALTER TABLE `purcharse_order`
  MODIFY `idpurcharse_order` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `purchase_order_products`
--
ALTER TABLE `purchase_order_products`
  MODIFY `idpurchase_order_products` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `state`
--
ALTER TABLE `state`
  MODIFY `idstate` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `store`
--
ALTER TABLE `store`
  MODIFY `idstore` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `iduser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
