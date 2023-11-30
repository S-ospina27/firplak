class PurcharseOrder {
  constructor() {
    this.idpurcharse_order = null;
    this.idcompany = null;
    this.purcharse_order_name = null;
    this.purcharse_order_type = null;
    this.purcharse_order_file = null;
  }

  setIdpurcharse_order(idpurcharse_order) {
    this.idpurcharse_order = idpurcharse_order;
  }
  setIdcompany(idcompany) {
    this.idcompany = idcompany;
  }
  setPurcharse_order_name(purcharse_order_name) {
    this.purcharse_order_name = purcharse_order_name;
  }
  setPurcharse_order_type(purcharse_order_type) {
    this.purcharse_order_type = purcharse_order_type;
  }
  setPurcharse_order_file(purcharse_order_file) {
    this.purcharse_order_file = purcharse_order_file;
  }

  getIdpurcharse_order() {
    return this.idpurcharse_order;
  }
  getIdcompany() {
    return this.idcompany;
  }
  getPurcharse_order_name() {
    return this.purcharse_order_name;
  }
  getPurcharse_order_type() {
    return this.purcharse_order_type;
  }

  getPurcharse_order_file() {
    return this.purcharse_order_file;
  }

  static FormField(datos) {
    const purcharseOrder = new PurcharseOrder();
    purcharseOrder.setIdpurcharse_order(
      [null, undefined].includes(datos.idpurcharse_order)
        ? null
        : datos.idpurcharse_order
    );
    purcharseOrder.setIdcompany(
      [null, undefined].includes(datos.idcompany) ? null : datos.idcompany
    );
    purcharseOrder.setPurcharse_order_name(
      [null, undefined].includes(datos.purcharse_order_name)
        ? null
        : datos.purcharse_order_name
    );
    purcharseOrder.setPurcharse_order_type(
      [null, undefined].includes(datos.purcharse_order_type)
        ? null
        : datos.purcharse_order_type
    );
    return purcharseOrder;
  }
}

export default PurcharseOrder;
