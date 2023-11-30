import { connection } from "../configs/mySQL.js";

class PurcharseorderModel {
  getPurcharseorderModel = async () => {
    const [query] = await connection.query("SELECT * FROM get_purcharse_order");
    return query;
  };

  createPurcharseorderModel = async (Purcharseorder) => {
    try {
      const [query] = await connection.execute(
        "CALL create_purcharse_order (?,?,?,?)",
        [
          Purcharseorder.idcompany,
          Purcharseorder.purcharse_order_name,
          Purcharseorder.purcharse_order_type,
          Purcharseorder.purcharse_order_file,
        ]
      );
      return query;
    } catch (error) {
      console.log(error);
    }
  };

  updatePurcharseorderModel = async (Purcharseorder) => {
    try {
      const [query] = await connection.execute(
        "CALL update__purcharse_order (?,?)",
        [Purcharseorder.purcharse_order_name, Purcharseorder.idpurcharse_order]
      );
      return query;
    } catch (error) {
      console.log(error);
    }
  };
}

export default PurcharseorderModel;
