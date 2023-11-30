
import DeliveriesModel from "../model/DeliveriesModel.js";
class DeliveriesController {
     
  constructor() {
    this.DeliveriesModel = new DeliveriesModel();
  }
    
  getDeliveriesController = async (req, res) => {
    try {
      const data = await this.DeliveriesModel.getDeliveriesModel();
      return res.status(200).json({ message: "success", data });

    } catch (error) {
      console.log(error);
       return res.json({message:"Ocurrrio un error " + error});
    }
  };
    
  postDeliveriesController = async (req, res) => {
    try {
      const data = await this.DeliveriesModel.postDeliveriesModel(req.body);
      if (data) {
        return res.status(200).json({ message: "success", data });
      }
      return res.status(200).json({ message: "error" });
    } catch (error) {
      console.log(error);
       return res.json({message:"Ocurrrio un error " + error});
    }
  };   
    
  putDeliveriesController = async (req, res) => {
    try {
      const data = await this.DeliveriesModel.putDeliveriesModel(req.body);
      if (data) {
        return res.status(200).json({ message: "success", data });
      }
      return res.status(200).json({ message: "error" });
    } catch (error) {
      console.log(error);
       return res.json({message:"Ocurrrio un error " + error});
    }
  };    
    
  deleteDeliveriesController = async (req, res) => {
    try {
      const data = await this.DeliveriesModel.deleteDeliveriesModel(req.body);
      if (data) {
        return res.status(200).json({ message: "success", data });
      }
      return res.status(200).json({ message: "error" });  
    } catch (error) {
      console.log(error);
       return res.json({message:"Ocurrrio un error " + error});
    }
  };  
    
}
    
export default DeliveriesController;
    