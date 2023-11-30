class DeliveryMan {
  constructor() {
    this.iddelivery_man = null;
    this.delivery_man_name = null;
    this.delivery_manco_email = null;
    this.delivery_man_password = null;
  }

  setIddelivery_man(iddelivery_man) {
    this.iddelivery_man = iddelivery_man;
  }
  setDelivery_man_name(delivery_man_name) {
    this.delivery_man_name = delivery_man_name;
  }
  setDelivery_manco_email(delivery_manco_email) {
    this.delivery_manco_email = delivery_manco_email;
  }
  setDelivery_man_password(delivery_man_password) {
    this.delivery_man_password = delivery_man_password;
  }

  getIddelivery_man() {
    return this.iddelivery_man;
  }
  getDelivery_man_name() {
    return this.delivery_man_name;
  }
  getDelivery_manco_email() {
    return this.delivery_manco_email;
  }
  getDelivery_man_password() {
    return this.delivery_man_password;
  }

  static FormFields(datos) {
    const deliveryMan = new DeliveryMan();
    deliveryMan.setIddelivery_man(
      [null, undefined].includes(datos.iddelivery_man)
        ? null
        : datos.iddelivery_man
    );
    deliveryMan.setDelivery_man_name(
      [null, undefined].includes(datos.delivery_man_name)
        ? null
        : datos.delivery_man_name
    );
    deliveryMan.setDelivery_manco_email(
      [null, undefined].includes(datos.delivery_manco_email)
        ? null
        : datos.delivery_manco_email
    );
    deliveryMan.setDelivery_man_password(
      [null, undefined].includes(datos.delivery_man_password)
        ? null
        : datos.delivery_man_password
    );
    return deliveryMan;
  }
}

export default DeliveryMan;
