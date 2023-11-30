import PurcharseorderModel from "../model/PurcharseorderModel.js";
import PurcharseOrder from "../class/PurcharseOrder.js";
import File from "../helpers/File.js";
class PurcharseorderController {
  constructor() {
    this.PurcharseorderModel = new PurcharseorderModel();
  }

  getPurcharseorderController = async (req, res) => {
    try {
      const data = await this.PurcharseorderModel.getPurcharseorderModel();
      return res.success("", data);
    } catch (error) {
      return res.error("Ocurrrio un error " + error);
    }
  };

  createtPurcharseorderController = async (req, res) => {
    try {
      const file = File.upFile(req.files);
      const purchase = PurcharseOrder.FormField(req.body);
      purchase.setPurcharse_order_file(file);
      const data = await this.PurcharseorderModel.createPurcharseorderModel(
        purchase
      );
      if (data) {
        return res.success("El pedido se registro correctamente");
      }
      return res.error("Ocurrio un error al registrar el pedido");
    } catch (error) {
      return res.error("Ocurrrio un error " + error);
    }
  };

  updatePurcharseorderController = async (req, res) => {
    try {
      const data = await this.PurcharseorderModel.updatePurcharseorderModel(
        PurcharseOrder.FormField(req.body)
      );
      if (data) {
        return res.success("El pedido se actualizo correctamente");
      }
      return res.error("Ocurrio un error al actualizar el pedido");
    } catch (error) {
      return res.error("Ocurrrio un error " + error);
    }
  };
}

export default new PurcharseorderController();
