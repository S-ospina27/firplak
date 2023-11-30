import axios from "axios";
import { getHeader, getHeaderMultipart } from "../tools/SessionSettings";
import RouteList from "../tools/RouteList";

export async function GetAllPurchaseProducts(idPurcharseOrder) {
  const response = await axios
    .get(RouteList.api.purchar_product.index + idPurcharseOrder, getHeader())
    .catch((e) => console.log(e));
  return response;
}

export const RegisterPurcharProduct = async (datos) => {
  const form = new FormData();
  form.append("idpurcharse_order", datos.idpurchaseOrder);
  form.append("idproducts", datos.product);
  form.append("purchase_order_products_amount", datos.amount);
  const response = await axios.post(
    RouteList.api.purchar_product.create,
    form,
    getHeaderMultipart()
  );
  return response;
};
export const updatePurcharProduct = async (datos) => {
  const form = new FormData();

  form.append("idpurchase_order_products", datos.idpurchase_order_productsEdit);
  form.append(
    "purchase_order_products_amount",
    datos.purchase_order_products_amountEdit
  );
  const response = await axios.put(
    RouteList.api.purchar_product.update,
    form,
    getHeaderMultipart()
  );
  return response;
};
