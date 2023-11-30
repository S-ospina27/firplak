import axios from "axios";
import { getHeader, getHeaderMultipart } from "../tools/SessionSettings";
import RouteList from "../tools/RouteList";
export async function GetAllCompany() {
  const response = await axios
    .get(RouteList.api.company.index, getHeader())
    .catch((e) => console.log(e));
  return response;
}

export const RegisterCompany = async (datos) => {
  const form = new FormData();
  form.append("idchannels", datos.idchannels);
  form.append("company_name", datos.company_name);
  form.append("company_address", datos.company_address);
  form.append("company_email", datos.company_email);
  form.append("company_password", datos.company_password);
  form.append("company_document_type", datos.company_document_type);
  form.append("company_document_number", datos.company_document_number);
  const response = await axios.post(
    RouteList.api.company.create,
    form,
    getHeaderMultipart()
  );
  return response;
};
export const updateCompany = async (datos) => {
  const form = new FormData();
  form.append("idcompany", datos.idcompanyEdit);
  form.append("idchannels", datos.idchannelsEdit);
  form.append("company_name", datos.company_nameEdit);
  form.append("company_address", datos.company_addressEdit);
  form.append("company_email", datos.company_emailEdit);
  form.append("company_password", datos.company_passwordEdit);
  form.append("company_document_type", datos.company_document_typeEdit);
  form.append("company_document_number", datos.company_document_numberEdit);
  const response = await axios.put(
    RouteList.api.company.update,
    form,
    getHeaderMultipart()
  );
  return response;
};
