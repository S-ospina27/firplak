import File from "../helpers/File.js";
import DeliverymanModel from "../model/DeliverymanModel.js";
import DeliveryMan from "../class/DeliveryMan.js";
class DeliverymanController {
  constructor() {
    this.DeliverymanModel = new DeliverymanModel();
  }

  getDeliverymanController = async (req, res) => {
    try {
      const data = await this.DeliverymanModel.getDeliverymanModel();
      return res.success("",data);
    } catch (error) {
      return res.error("Ocurrrio un error " + error);
    }
  };

  createDeliverymanController = async (req, res) => {
    try {
      const data_load = await File.loadExcel(req.files);
      const data = await this.DeliverymanModel.createDeliverymanModel(
        data_load
      );
      if (data) {
        return res.success("Se registro correctamente el repartidor");
      }
      return res.error("Ocurrrio un error al registrar el repartidor ");
    } catch (error) {
      console.log(error);
      return res.error("Ocurrrio un error " + error);
    }
  };

  updateDeliverymanController = async (req, res) => {
    try {
      const data = await this.DeliverymanModel.updateDeliverymanModel(
        DeliveryMan.FormFields(req.body)
      );
      if (data) {
        return res.success("Se actualizo correctamente el repartidor");
      }
      return res.error("Ocurrrio un error al actualizarf el repartidor ");
    } catch (error) {
      console.log(error);
      return res.error("Ocurrrio un error " + error);
    }
  };

  deleteDeliverymanController = async (req, res) => {
    try {
      const data = await this.DeliverymanModel.deleteDeliverymanModel(req.body);
      if (data) {
        return res.status(200).json({ message: "success", data });
      }
      return res.status(200).json({ message: "error" });
    } catch (error) {
      console.log(error);
      return res.json({ message: "Ocurrrio un error " + error });
    }
  };
}

export default new DeliverymanController();
