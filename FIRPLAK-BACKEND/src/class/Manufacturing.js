class Manufacturing {
  constructor() {
    this.idmanufacturing_order = null;
    this.idpurcharse_order = null;
    this.idpurchase_order_products = null;
    this.idstate = null;
    this.manufacturing_order_type_line = null;
    this.idstore = null;
  }

  setIdmanufacturing_order(idmanufacturing_order) {
    this.idmanufacturing_order = idmanufacturing_order;
  }
  setIdpurcharse_order(idpurcharse_order) {
    this.idpurcharse_order = idpurcharse_order;
  }
  setIdpurchase_order_products() {
    this.idpurchase_order_products = idpurchase_order_products;
  }
  setIdstate(idstate) {
    this.idstate = idstate;
  }
  setManufacturing_order_type_line(manufacturing_order_type_line) {
    this.manufacturing_order_type_line = manufacturing_order_type_line;
  }
  setIdstore(idstore) {
    this.idstore = idstore;
  }

  getIdmanufacturing_order() {
    return this.idmanufacturing_order;
  }
  getIdpurcharse_order() {
    return this.idpurcharse_order;
  }
  getIdpurchase_order_products() {
    return this.idpurchase_order_products;
  }
  getIdstate() {
    return this.idstate;
  }
  getManufacturing_order_type_line() {
    return this.manufacturing_order_type_line;
  }
  getIdstore() {
    return this.idstore;
  }
  static FormField(datos) {
    console.log(datos)
    const manufacturing = new Manufacturing();
    manufacturing.setIdmanufacturing_order(
      [null, undefined].includes(datos.idmanufacturing_order)
        ? null
        : datos.idmanufacturing_order
    );
    manufacturing.setIdpurcharse_order(
      [null, undefined].includes(datos.idpurcharse_order)
        ? null
        : datos.idpurcharse_order
    );
    manufacturing.setIdpurchase_order_products(
      [null, undefined].includes(datos.idpurchase_order_products)
        ? null
        : datos.idpurchase_order_products
    );
    manufacturing.setIdstate(
      [null, undefined].includes(datos.idstate) ? null : datos.idstate
    );
    manufacturing.setManufacturing_order_type_line(
      [null, undefined].includes(datos.manufacturing_order_type_line)
        ? null
        : datos.manufacturing_order_type_line
    );
    manufacturing.setIdstore(
      [null, undefined].includes(datos.idstore) ? null : datos.idstore
    );
    return manufacturing;
  }
}
export default Manufacturing;
