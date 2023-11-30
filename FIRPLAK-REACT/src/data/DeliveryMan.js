import axios from "axios";
import RouteList from "../tools/RouteList";
import { getHeader, getHeaderMultipart } from "../tools/SessionSettings";

export const RegisterDeliveryMan = async (datos) => {
  const form = new FormData();
  form.append("file", datos.file);
  const response = await axios.post(
    RouteList.api.Delivery_man.create,
    form,
    getHeaderMultipart()
  );
  return response;
};
export const UpdateDeliveryMan = async (datos) => {
  const form = new FormData();
  form.append("iddelivery_man", datos.iddelivery_man);
  form.append("delivery_man_name", datos.delivery_man_name);
  form.append("delivery_manco_email", datos.delivery_manco_email);
  form.append("delivery_man_password", datos.delivery_man_passwordF);
  const response = await axios.put(
    RouteList.api.Delivery_man.update,
    form,
    getHeaderMultipart()
  );
  return response;
};

export async function GetAllDelivery() {
    const response = await axios
      .get(RouteList.api.Delivery_man.index, getHeader())
      .catch((e) => console.log(e));
    return response;
  }