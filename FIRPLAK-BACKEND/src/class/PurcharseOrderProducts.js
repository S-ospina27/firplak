class PurcharseOrderProducts {
  constructor() {
    this.idpurchase_order_products = null;
    this.idpurcharse_order = null;
    this.idproducts = null;
    this.purchase_order_products_amount = null;
    this.purchase_order_products_date_delivery = null;
  }

  setIdpurchase_order_products(idpurchase_order_products) {
    this.idpurchase_order_products = idpurchase_order_products;
  }
  setIdpurcharse_order(idpurcharse_order) {
    this.idpurcharse_order = idpurcharse_order;
  }
  setIdproducts(idproducts) {
    this.idproducts = idproducts;
  }
  setPurchase_order_products_amount(purchase_order_products_amount) {
    this.purchase_order_products_amount = purchase_order_products_amount;
  }
  setPurchase_order_products_date_delivery(
    purchase_order_products_date_delivery
  ) {
    this.purchase_order_products_date_delivery =
      purchase_order_products_date_delivery;
  }

  getIdpurchase_order_products() {
    return this.idpurchase_order_products;
  }
  getIdpurcharse_order() {
    return this.idpurcharse_order;
  }
  getIdproducts() {
    return this.idproducts;
  }
  getPurchase_order_products_amount() {
    return this.purchase_order_products_amount;
  }
  getPurchase_order_products_date_delivery() {
    return this.purchase_order_products_date_delivery;
  }

  static FormFields(datos) {
    const orderProducts = new PurcharseOrderProducts();

    orderProducts.setIdpurchase_order_products(
      [null, undefined].includes(datos.idpurchase_order_products)
        ? null
        : datos.idpurchase_order_products
    );

    orderProducts.setIdpurcharse_order(
      [null, undefined].includes(datos.idpurcharse_order)
        ? null
        : datos.idpurcharse_order
    );
    orderProducts.setIdproducts(
      [null, undefined].includes(datos.idproducts) ? null : datos.idproducts
    );

    orderProducts.setPurchase_order_products_amount(
      [null, undefined].includes(datos.purchase_order_products_amount)
        ? null
        : datos.purchase_order_products_amount
    );

    orderProducts.setPurchase_order_products_date_delivery(
      [null, undefined].includes(datos.purchase_order_products_date_delivery)
        ? null
        : datos.purchase_order_products_date_delivery
    );

    return orderProducts;
  }
}
export default PurcharseOrderProducts;
