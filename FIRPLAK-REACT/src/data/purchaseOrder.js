import axios from "axios";
import RouteList from "../tools/RouteList";
import { getHeader, getHeaderMultipart } from "../tools/SessionSettings";

export const RegisterPurcharOrder = async (datos) => {
  const form = new FormData();
  form.append("idcompany", datos.company);
  form.append("purcharse_order_name", datos.purcharse_order_name);
  form.append("purcharse_order_type", datos.purcharse_order_type);
  form.append("purcharse_order_file", datos.file);
  const response = await axios.post(
    RouteList.api.purcharOrder.create,
    form,
    getHeaderMultipart()
  );
  return response;
};

export async function GetAllPurchaseOrder() {
  const response = await axios
    .get(RouteList.api.purcharOrder.index, getHeader())
    .catch((e) => console.log(e));
  return response;
}
