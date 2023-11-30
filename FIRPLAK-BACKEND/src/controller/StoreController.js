
import StoreModel from "../model/StoreModel.js";
class StoreController {
     
  constructor() {
    this.StoreModel = new StoreModel();
  }
    
  getStoreController = async (req, res) => {
    try {
      const data = await this.StoreModel.getStoreModel();
      return res.status(200).json({ message: "success", data });

    } catch (error) {
      console.log(error);
       return res.json({message:"Ocurrrio un error " + error});
    }
  };
    
  postStoreController = async (req, res) => {
    try {
      const data = await this.StoreModel.postStoreModel(req.body);
      if (data) {
        return res.status(200).json({ message: "success", data });
      }
      return res.status(200).json({ message: "error" });
    } catch (error) {
      console.log(error);
       return res.json({message:"Ocurrrio un error " + error});
    }
  };   
    
  putStoreController = async (req, res) => {
    try {
      const data = await this.StoreModel.putStoreModel(req.body);
      if (data) {
        return res.status(200).json({ message: "success", data });
      }
      return res.status(200).json({ message: "error" });
    } catch (error) {
      console.log(error);
       return res.json({message:"Ocurrrio un error " + error});
    }
  };    
    
  deleteStoreController = async (req, res) => {
    try {
      const data = await this.StoreModel.deleteStoreModel(req.body);
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
    
export default StoreController;
    