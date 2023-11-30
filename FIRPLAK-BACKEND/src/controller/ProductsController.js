import ProductsModel from "../model/ProductsModel.js";
import Product from "../class/Product.js";
class ProductsController {
  constructor() {
    this.ProductsModel = new ProductsModel();
  }

  getProductsController = async (req, res) => {
    try {
      const data = await this.ProductsModel.getProductsModel();
      return res.success("", data);
    } catch (error) {
      return res.error("Ocurrrio un error " + error);
    }
  };

  createProductsController = async (req, res) => {
    try {
      const data = await this.ProductsModel.createProductsModel(req.body);
      if (data) {
        return res.success("Se registro correctamente el producto");
      }
      return res.error("Ocurrio un error al registrar el producto");
    } catch (error) {
      return res.json("Ocurrrio un error " + error);
    }
  };

  updateProductsController = async (req, res) => {
    try {
      const data = await this.ProductsModel.updateProductsModel(
        Product.FormField(req.body)
      );
      if (data) {
        return res.success("Se actualizo correctamente el producto");
      }
      return res.error("Ocurrio un error al actualizar el producto");
    } catch (error) {
      return res.error("Ocurrrio un error " + error);
    }
  };
}

export default new ProductsController();
