import { connection } from "../configs/mySQL.js";

class DeliverymanModel {
  getDeliverymanModel = async () => {
    const [query] = await connection.query("SELECT * FROM delivery_man");
    return query;
  };

  createDeliverymanModel = async (Deliveryman) => {
    try {
      const [query] = await connection.query(
        `INSERT INTO delivery_man (delivery_man_name,delivery_manco_email,delivery_man_password) VALUES?; `,
        [Deliveryman]
      );
      return query;
    } catch (error) {
      console.log(error);
    }
  };

  updateDeliverymanModel = async (Deliveryman) => {
    try {
      const [query] = await connection.execute(
        "CALL update_delivery_man (?,?,?,?)",
        [
          Deliveryman.delivery_man_name,
          Deliveryman.delivery_manco_email,
          Deliveryman.delivery_man_password,
          Deliveryman.iddelivery_man,
        ]
      );
      return query;
    } catch (error) {
      console.log(error);
    }
  };
}

export default DeliverymanModel;
