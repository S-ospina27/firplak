import PurchaseorderproductsModel from "../model/PurchaseorderproductsModel.js";
import PurcharseOrderProducts from "../class/PurcharseOrderProducts.js";
import dayjs from "dayjs";
class PurchaseorderproductsController {
  constructor() {
    this.PurchaseorderproductsModel = new PurchaseorderproductsModel();
    this.now = dayjs();
  }

  getPurchaseorderproductsController = async (req, res) => {
    try {
      const data =
        await this.PurchaseorderproductsModel.getPurchaseorderproductsModel(
          req.params.idPurcharseOrder
        );
      return res.success("", data);
    } catch (error) {
      return res.error("Ocurrrio un error " + error);
    }
  };

  createPurchaseorderproductsController = async (req, res) => {
    try {
      const purchase = PurcharseOrderProducts.FormFields(req.body);
      purchase.setPurchase_order_products_date_delivery(
        this.now.format("YYYY-MM-DD HH:mm:ss")
      );
      const data =
        await this.PurchaseorderproductsModel.createPurchaseorderproductsModel(
          purchase
        );
      if (data) {
        return res.success("Se registro correctamente el producto");
      }
      return res.error("Ocurrio un error al registrar el producto");
    } catch (error) {
      return res.error("Ocurrrio un error " + error);
    }
  };

  updatePurchaseorderproductsController = async (req, res) => {
    try {
      const datos = PurcharseOrderProducts.FormFields(req.body);
      const data =
        await this.PurchaseorderproductsModel.uptePurchaseorderproductsModel(
          datos
        );
      if (data) {
        return res.success("se Actualizo correctamente el producto");
      }
      return res.error("Ocurrio un error al actualizar el producto");
    } catch (error) {
      return res.error("Ocurrrio un error " + error);
    }
  };
}

export default new PurchaseorderproductsController();
