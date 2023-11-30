import { connection } from "../configs/mySQL.js";

class PurchaseorderproductsModel {
  getPurchaseorderproductsModel = async (idPurcharseOrder) => {
    const [query] = await connection.query(
      "SELECT * FROM get_purcharse_order_products WHERE idpurcharse_order = ?",
      idPurcharseOrder
    );
    return query;
  };

  createPurchaseorderproductsModel = async (Purchaseorderproducts) => {
    try {
      const [query] = await connection.execute(
        "CALL create_purcharse_products (?,?,?,?)",
        [
          Purchaseorderproducts.idpurcharse_order,
          Purchaseorderproducts.idproducts,
          Purchaseorderproducts.purchase_order_products_amount,
          Purchaseorderproducts.purchase_order_products_date_delivery,
        ]
      );
      return query;
    } catch (error) {
      console.log(error);
    }
  };

  uptePurchaseorderproductsModel = async (Purchaseorderproducts) => {
    try {
      console.log(Purchaseorderproducts);
      const [query] = await connection.execute(
        "CALL update_purchaseProduct (?,?)",
        [
          Purchaseorderproducts.idpurchase_order_products,
          Purchaseorderproducts.purchase_order_products_amount,
        ]
      );
      return query;
    } catch (error) {
      console.log(error);
    }
  };
}

export default PurchaseorderproductsModel;
