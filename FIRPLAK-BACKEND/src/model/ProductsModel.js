import { connection } from "../configs/mySQL.js";

class ProductsModel {
  getProductsModel = async () => {
    const [query] = await connection.query("SELECT * FROM products");
    return query;
  };

  createProductsModel = async (Products) => {
    try {
      const [query] = await connection.execute(
        "CALL create_product (?)",
        [Products.products_name]
      );
      return query;
    } catch (error) {
      console.log(error);
    }
  };

  updateProductsModel = async (Products) => {
    try {
      const [query] = await connection.execute("CALL update_product (?,?)", [
        Products.products_name,
        Products.idproducts,
      ]);
      return query;
    } catch (error) {
      console.log(error);
    }
  };
}

export default ProductsModel;
