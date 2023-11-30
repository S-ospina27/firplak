
import { connection } from "../configs/mySQL.js";

class StateModel {
  
  getStateModel = async () => {
    const [query] = await connection.query("");
    return query;
  };

  postStateModel = async (State) => {
    try {
      const [query] = await connection.execute("CALL nombre (?,?,?,?)", [
           
      ]);
      return query;
    } catch (error) {
      console.log(error);
    }
  };

  putStateModel = async (State) => {
    try {
      const [query] = await connection.execute("CALL nombre (?,?,?,?)", [
           
      ]);
      return query;
    } catch (error) {
      console.log(error);
      }
  };

  deleteStateModel = async () => {
    const [query] = await connection.query("");
    return query;
  };

}


export default StateModel;
