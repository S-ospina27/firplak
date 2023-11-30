import AuthcontrollerModel from "../model/AuthcontrollerModel.js";
import Auth from "../class/Auth.js";
import JWT from "../helpers/Jwt.js";
class AuthcontrollerController {
  constructor() {
    this.AuthcontrollerModel = new AuthcontrollerModel();
  }

  AuthController = async (req, res) => {
    try {
      const auth = Auth.formFields(req.body);
      const data = await this.AuthcontrollerModel.getAuthcontrollerModel(auth);
      if (data) {
        return res.success("Datos validos", JWT.createJWT(data));
      }
      return res.error("Datos invalidos");
    } catch (error) {
      return res.json("Ocurrrio un error " + error);
    }
  };
}

export default new AuthcontrollerController();
