class Product {
  constructor() {
    this.idproducts = null;
    this.products_name = null;
  }
  setIdproducts(idproducts) {
    this.idproducts = idproducts;
  }
  setProducts_name(products_name) {
    this.products_name = products_name;
  }

  getIdproducts() {
    return this.idproducts;
  }
  getProducts_name() {
    return this.products_name;
  }

  static FormField(datos) {
    const product = new Product();
    product.setIdproducts(
      [null, undefined].includes(datos.idproducts) ? null : datos.idproducts
    );
    product.setProducts_name(
      [null, undefined].includes(datos.products_name)
        ? null
        : datos.products_name
    );
    return product;
  }
}

export default Product;
