class Auth {
  constructor() {
    (this.iduser = null),
      (this.user_nombre = null),
      (this.user_email = null),
      (this.user_password = null);
  }

  setIduser(iduser) {
    this.iduser = iduser;
  }
  setUser_nombre(user_nombre) {
    this.user_nombre = user_nombre;
  }
  setUser_email(user_email) {
    this.user_email = user_email;
  }
  setUser_password(user_password) {
    this.user_password = user_password;
  }

  getIduser() {
    return this.iduser;
  }
  getUser_nombre() {
    return this.user_nombre;
  }
  getUser_email() {
    return this.user_email;
  }
  getUser_password() {
    return this.user_password;
  }

  static formFields(datos) {
    const auth = new Auth();
    auth.setIduser(
      [null, undefined].includes(datos.iduser) ? null : datos.iduser
    );
    auth.setUser_nombre(
      [null, undefined].includes(datos.user_nombre) ? null : datos.user_nombre
    );
    auth.setUser_email(
      [null, undefined].includes(datos.user_email) ? null : datos.user_email
    );
    auth.setUser_password(
      [null, undefined].includes(datos.user_password)
        ? null
        : datos.user_password
    );
    return auth;
  }
}
export default Auth;
