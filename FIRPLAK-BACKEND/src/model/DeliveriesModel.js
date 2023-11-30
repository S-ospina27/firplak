
import { connection } from "../configs/mySQL.js";

class DeliveriesModel {
  
  getDeliveriesModel = async () => {
    const [query] = await connection.query("");
    return query;
  };

  postDeliveriesModel = async (Deliveries) => {
    try {
      const [query] = await connection.execute("CALL nombre (?,?,?,?)", [
           
      ]);
      return query;
    } catch (error) {
      console.log(error);
    }
  };

  putDeliveriesModel = async (Deliveries) => {
    try {
      const [query] = await connection.execute("CALL nombre (?,?,?,?)", [
           
      ]);
      return query;
    } catch (error) {
      console.log(error);
      }
  };

  deleteDeliveriesModel = async () => {
    const [query] = await connection.query("");
    return query;
  };

}


export default DeliveriesModel;
