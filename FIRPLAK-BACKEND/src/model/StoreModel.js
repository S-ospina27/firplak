
import { connection } from "../configs/mySQL.js";

class StoreModel {
  
  getStoreModel = async () => {
    const [query] = await connection.query("");
    return query;
  };

  postStoreModel = async (Store) => {
    try {
      const [query] = await connection.execute("CALL nombre (?,?,?,?)", [
           
      ]);
      return query;
    } catch (error) {
      console.log(error);
    }
  };

  putStoreModel = async (Store) => {
    try {
      const [query] = await connection.execute("CALL nombre (?,?,?,?)", [
           
      ]);
      return query;
    } catch (error) {
      console.log(error);
      }
  };

  deleteStoreModel = async () => {
    const [query] = await connection.query("");
    return query;
  };

}


export default StoreModel;
