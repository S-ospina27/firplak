import { connection } from "../configs/mySQL.js";

class CompanyModel {
  getCompanyModel = async () => {
    const [query] = await connection.query("SELECT * FROM get_company");
    return query;
  };

  createCompanyModel = async (Company) => {
    try {
      const [query] = await connection.execute(
        "CALL create_company (?,?,?,?,?,?,?)",
        [
          Company.idchannels,
          Company.company_name,
          Company.company_address,
          Company.company_email,
          Company.company_password,
          Company.company_document_type,
          Company.company_document_number,
        ]
      );
      return query;
    } catch (error) {
      console.log(error);
    }
  };

  updateCompanyModel = async (Company) => {
    try {
      const [query] = await connection.execute(
        "CALL update_company (?,?,?,?,?,?,?,?)",
        [
          Company.idchannels,
          Company.company_name,
          Company.company_address,
          Company.company_email,
          Company.company_password,
          Company.company_document_type,
          Company.company_document_number,
          Company.idcompany,
        ]
      );
      return query;
    } catch (error) {
      console.log(error);
    }
  };
}

export default CompanyModel;
