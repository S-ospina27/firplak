import { connection } from "../configs/mySQL.js";

class AuthcontrollerModel {
  getAuthcontrollerModel = async (Authcontroller) => {
    const [query] = await connection.query(
      `SELECT * FROM user WHERE user_email= ?  AND user_password = ?`,
      [Authcontroller.user_email, Authcontroller.user_password]
    );
    return query.shift();
  };
}

export default AuthcontrollerModel;
