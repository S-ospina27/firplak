import CompanyModel from "../model/CompanyModel.js";
import Company from "../class/Company.js";
class CompanyController {
  constructor() {
    this.CompanyModel = new CompanyModel();
  }

  getCompanyController = async (req, res) => {
    try {
      const data = await this.CompanyModel.getCompanyModel();
      return res.success("", data);
    } catch (error) {
      return res.error("Ocurrrio un error " + error);
    }
  };

  createCompanyController = async (req, res) => {
    try {
      const data = await this.CompanyModel.createCompanyModel(
        Company.FormFields(req.body)
      );
      if (data) {
        return res.success("Se registro correctamente la compañia");
      }
      return res.error("Ocurrio un error al registrar la compañoa");
    } catch (error) {
      return res.error("Ocurrrio un error " + error);
    }
  };

  updateCompanyController = async (req, res) => {
    try {
      const data = await this.CompanyModel.updateCompanyModel(
        Company.FormFields(req.body)
      );
      if (data) {
        return res.success("Se actualizo correctamente la compañia");
      }
      return res.error("Ocurrio un error al actualizar la compañoa");
    } catch (error) {
      return res.error("Ocurrrio un error " + error);
    }
  };
}

export default new CompanyController();
