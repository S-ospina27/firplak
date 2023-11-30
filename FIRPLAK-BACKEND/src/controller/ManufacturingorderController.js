import ManufacturingorderModel from "../model/ManufacturingorderModel.js";
import Manufacturing from "../class/Manufacturing.js";
class ManufacturingorderController {
  constructor() {
    this.ManufacturingorderModel = new ManufacturingorderModel();
  }

  getManufacturingorderController = async (req, res) => {
    try {
      const data =
        await this.ManufacturingorderModel.getManufacturingorderModel();
      return res.success("success", data);
    } catch (error) {
      console.log(error);
      return res.json({ message: "Ocurrrio un error " + error });
    }
  };

  createManufacturingorderController = async (req, res) => {
    try {
      const datos = {
        idpurcharse_order: req.body.idpurcharse_order,
        idpurchase_order_products: req.body.idpurchase_order_products,
        manufacturing_order_type_line: req.body.manufacturing_order_type_line,
        idstate: 1,
      };
      const data =
        await this.ManufacturingorderModel.postManufacturingorderModel(datos);
      if (data) {
        return res.success("Se realizo con exito");
      }
      return res.error("Ocurrio un error al registrar");
    } catch (error) {
      return res.error("Ocurrrio un error " + error);
    }
  };

  updateManufacturingorderController = async (req, res) => {
    try {
      const datos = {
        idmanufacturing_order: req.body.idmanufacturing_order,
        idstate: req.body.idstate,
        idstore: req.body.manufacturing_order_type_line == "MTO" ? 2 : 1,
      };
      const data =
        await this.ManufacturingorderModel.updateManufacturingorderModel(datos);
      if (data) {
        return res.success("Se actualizo correctamente", data);
      }
      return res.error("Ocurrio un error al actualizar ", data);
    } catch (error) {
      console.log(error);
      return res.error("Ocurrrio un error " + error);
    }
  };

  deleteManufacturingorderController = async (req, res) => {
    try {
      const datos = {
        idmanufacturing_order: req.body.idmanufacturing_order,
        idstate: req.body.idstate,
      };
      const data =
        await this.ManufacturingorderModel.deleteManufacturingorderModel(
          req.body
        );
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

export default new ManufacturingorderController();
