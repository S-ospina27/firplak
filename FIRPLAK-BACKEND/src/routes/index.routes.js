import { Router } from "express";
import JWT from "../helpers/Jwt.js";

import CompanyController from "../controller/CompanyController.js";
import DeliveryManController from "../controller/DeliverymanController.js";
import ProductsController from "../controller/ProductsController.js";
import PurcharseOrderController from "../controller/PurcharseorderController.js";
import PurchaseorderproductsController from "../controller/PurchaseorderproductsController.js";
import ManufacturingorderController from "../controller/ManufacturingorderController.js";
import AuthController from "../controller/AuthcontrollerController.js";
const router = Router();
router.post("/auth", AuthController.AuthController);
router.use(JWT.verifyAuthJWT);
router.get("/getcompany", CompanyController.getCompanyController);
router.post("/create-company", CompanyController.createCompanyController);
router.put("/update-company", CompanyController.updateCompanyController);

router.get("/get-delivery-man", DeliveryManController.getDeliverymanController);
router.post(
  "/create-delivery-man",
  DeliveryManController.createDeliverymanController
);
router.put(
  "/update-delivery-man",
  DeliveryManController.updateDeliverymanController
);

router.get("/get-product", ProductsController.getProductsController);
router.post("/create-product", ProductsController.createProductsController);
router.put("/update-product", ProductsController.updateProductsController);

router.get(
  "/get-purcharse-order",
  PurcharseOrderController.getPurcharseorderController
);
router.post(
  "/create-purcharse-order",
  PurcharseOrderController.createtPurcharseorderController
);
router.put(
  "/update-purcharse-order",
  PurcharseOrderController.updatePurcharseorderController
);

router.get(
  "/get-purchase-products/:idPurcharseOrder",
  PurchaseorderproductsController.getPurchaseorderproductsController
);
router.post(
  "/create-purchase-products",
  PurchaseorderproductsController.createPurchaseorderproductsController
);

router.put(
  "/update-purchase-products",
  PurchaseorderproductsController.updatePurchaseorderproductsController
);

router.post(
  "/create-manufacturing",
  ManufacturingorderController.createManufacturingorderController
);
router.get(
  "/get-manufacturing",
  ManufacturingorderController.getManufacturingorderController
);
router.put(
  "/update-manufacturing",
  ManufacturingorderController.updateManufacturingorderController
);

export default router;
