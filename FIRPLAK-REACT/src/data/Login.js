import axios from "axios";
import RouteList from "../tools/RouteList";
import { getHeaderMultipart } from "../tools/SessionSettings";

export const handleSubmit = async (datos) => {
  const form = new FormData();
  form.append("user_email", datos.user_login);
  form.append("user_password", datos.pass_login);
  const response = await axios.post(
    RouteList.api.auth.login,
    form,
    getHeaderMultipart()
  );
  return response;
};
