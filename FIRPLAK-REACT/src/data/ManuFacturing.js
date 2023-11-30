import axios from "axios";
import RouteList from "../tools/RouteList";
import { getHeader, getHeaderMultipart } from "../tools/SessionSettings";

export const RegisterManufacturing = async (datos) => {
  const form = new FormData();
  form.append("idpurcharse_order", datos.order);
  form.append("idpurchase_order_products", datos.orderProduct);
  form.append("manufacturing_order_type_line", datos.line);
  const response = await axios.post(
    RouteList.api.manufacturing.create,
    form,
    getHeaderMultipart()
  );
  return response;
};

export async function GetAllManufacturin() {
  const response = await axios
    .get(RouteList.api.manufacturing.index, getHeader())
    .catch((e) => console.log(e));
  return response;
}
export const updateManufacturing = async (datos) => {
  const form = new FormData();
  form.append("idmanufacturing_order", datos.idmanufacturing_orderEdit);
  form.append("idstate", datos.idstate);
  form.append("manufacturing_order_type_line", datos.LineaEdit);

  const response = await axios.put(
    RouteList.api.manufacturing.update,
    form,
    getHeaderMultipart()
  );
  return response;
};
