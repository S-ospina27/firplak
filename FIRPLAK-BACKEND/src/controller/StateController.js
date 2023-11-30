
import StateModel from "../model/StateModel.js";
class StateController {
     
  constructor() {
    this.StateModel = new StateModel();
  }
    
  getStateController = async (req, res) => {
    try {
      const data = await this.StateModel.getStateModel();
      return res.status(200).json({ message: "success", data });

    } catch (error) {
      console.log(error);
       return res.json({message:"Ocurrrio un error " + error});
    }
  };
    
  postStateController = async (req, res) => {
    try {
      const data = await this.StateModel.postStateModel(req.body);
      if (data) {
        return res.status(200).json({ message: "success", data });
      }
      return res.status(200).json({ message: "error" });
    } catch (error) {
      console.log(error);
       return res.json({message:"Ocurrrio un error " + error});
    }
  };   
    
  putStateController = async (req, res) => {
    try {
      const data = await this.StateModel.putStateModel(req.body);
      if (data) {
        return res.status(200).json({ message: "success", data });
      }
      return res.status(200).json({ message: "error" });
    } catch (error) {
      console.log(error);
       return res.json({message:"Ocurrrio un error " + error});
    }
  };    
    
  deleteStateController = async (req, res) => {
    try {
      const data = await this.StateModel.deleteStateModel(req.body);
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
    
export default StateController;
    