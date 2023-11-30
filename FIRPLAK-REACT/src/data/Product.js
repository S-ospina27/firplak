import axios from "axios";
import RouteList from "../tools/RouteList";
import { getHeader, getHeaderMultipart } from "../tools/SessionSettings";

export async function GetAllProducts() {
  const response = await axios
    .get(RouteList.api.products.index, getHeader())
    .catch((e) => console.log(e));
  return response;
}

export const RegisterProduct = async (datos) => {
  const form = new FormData();
  form.append("products_name", datos.products_name);
  const response = await axios.post(
    RouteList.api.products.create,
    form,
    getHeaderMultipart()
  );
  return response;
};
export const updateProduct = async (datos) => {
  const form = new FormData();
  form.append("products_name", datos.products_nameEdit);
  form.append("idproducts", datos.idproductsEdit);
  const response = await axios.put(
    RouteList.api.products.update,
    form,
    getHeaderMultipart()
  );
  return response;
};
