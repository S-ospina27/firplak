class Company {
  constructor() {
    this.idcompany = null;
    this.idchannels = null;
    this.company_name = null;
    this.company_address = null;
    this.company_email = null;
    this.company_password = null;
    this.company_document_type = null;
    this.company_document_number = null;
  }

  setIdcompany(idcompany) {
    this.idcompany = idcompany;
  }
  setIdchannels(idchannels) {
    this.idchannels = idchannels;
  }
  setCompany_name(company_name) {
    this.company_name = company_name;
  }
  setCompany_address(company_address) {
    this.company_address = company_address;
  }
  setCompany_email(company_email) {
    this.company_email = company_email;
  }
  setCompany_password(company_password) {
    this.company_password = company_password;
  }
  setCompany_document_type(company_document_type) {
    this.company_document_type = company_document_type;
  }
  setCompany_document_number(company_document_number) {
    this.company_document_number = company_document_number;
  }

  getIdcompany() {
    return this.idcompany;
  }
  getIdchannels() {
    return this.idchannels;
  }
  getCompany_name() {
    return this.company_name;
  }
  getCompany_address() {
    return this.company_address;
  }
  getCompany_email() {
    return this.company_email;
  }
  getCompany_password() {
    return this.company_password;
  }
  getCompany_document_type() {
    return this.company_document_type;
  }
  getCompany_document_number() {
    return this.company_document_number;
  }

  static FormFields(datos) {
    const company = new Company();
    company.setIdcompany(
      [null, undefined].includes(datos.idcompany) ? null : datos.idcompany
    );
    company.setIdchannels(
      [null, undefined].includes(datos.idchannels) ? null : datos.idchannels
    );
    company.setCompany_name(
      [null, undefined].includes(datos.company_name) ? null : datos.company_name
    );
    company.setCompany_address(
      [null, undefined].includes(datos.company_address)
        ? null
        : datos.company_address
    );
    company.setCompany_email(
      [null, undefined].includes(datos.company_email)
        ? null
        : datos.company_email
    );
    company.setCompany_password(
      [null, undefined].includes(datos.company_password)
        ? null
        : datos.company_password
    );
    company.setCompany_document_type(
      [null, undefined].includes(datos.company_document_type)
        ? null
        : datos.company_document_type
    );
    company.setCompany_document_number(
      [null, undefined].includes(datos.company_document_number)
        ? null
        : datos.company_document_number
    );
    return company;
  }
}

export default Company;
