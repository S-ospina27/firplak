import { connection } from "../configs/mySQL.js";

class ManufacturingorderModel {
  getManufacturingorderModel = async () => {
    const [query] = await connection.query("SELECT * FROM manufacturing_order");
    return query;
  };

  postManufacturingorderModel = async (Manufacturingorder) => {
    try {
      const [query] = await connection.execute(
        "CALL create_manufacturing (?,?,?,?)",
        [
          Manufacturingorder.idpurcharse_order,
          Manufacturingorder.idpurchase_order_products,
          Manufacturingorder.idstate,
          Manufacturingorder.manufacturing_order_type_line,
        ]
      );
      return query;
    } catch (error) {
      console.log(error);
    }
  };

  updateManufacturingorderModel = async (Manufacturingorder) => {
    try {
      const [query] = await connection.query(
        "UPDATE manufacturing_order SET idstate = ?, idstore= ? WHERE idmanufacturing_order = ?",
        [
          Manufacturingorder.idstate,
          Manufacturingorder.idstore,
          Manufacturingorder.idmanufacturing_order,
        ]
      );
      return query;
    } catch (error) {
      console.log(error);
    }
  };

  deleteManufacturingorderModel = async () => {
    const [query] = await connection.query("");
    return query;
  };
}

export default ManufacturingorderModel;
