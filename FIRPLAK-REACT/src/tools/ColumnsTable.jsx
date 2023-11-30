import { Avatar } from "@mui/material";

const url_img = import.meta.env.VITE_SERVER_IMG;
export default {
  manufacturing: [
    { field: "idmanufacturing_order", headerName: "ID", width: 200 },
    {
      field: "idpurcharse_order",
      headerName: "ID ORDEN",
      width: 200,
    },
    {
      field: "idpurchase_order_products",
      headerName: "RERENCIA ORDEN",
      width: 200,
    },
    {
      field: "idstate",
      headerName: "ESTADO",
      width: 200,
    },
    {
      field: "manufacturing_order_type_line",
      headerName: "LINEA",
      width: 200,
    },
    {
      field: "idstore",
      headerName: "BODEGA",
      width: 200,
    },
  ],
  purchase_products: [
    { field: "idpurchase_order_products", headerName: "ID", width: 200 },
    {
      field: "idpurcharse_order",
      headerName: "ID ORDEN",
      width: 200,
    },
    { field: "idproducts", headerName: "ID PRODUCTO", width: 200 },
    { field: "products_name", headerName: "NOMBRE PRODUCTO", width: 200 },
    {
      field: "purchase_order_products_amount",
      headerName: "CANTIDAD",
      width: 200,
    },
    {
      field: "purchase_order_products_date_delivery",
      headerName: "FECHA",
      width: 200,
    },
  ],
  purchaseOrder: [
    { field: "idpurcharse_order", headerName: "ID", width: 200 },
    {
      field: "company_document_type",
      headerName: "TIPO DOCUMENTO",
      width: 200,
    },
    { field: "company_document_number", headerName: "# DOCUMENTO", width: 200 },
    { field: "company_name", headerName: "NOMBRE", width: 200 },
    { field: "purcharse_order_name", headerName: "SOLICITANTE", width: 200 },
    { field: "purcharse_order_type", headerName: "TIPO DE PEDIDO", width: 200 },
    { field: "purcharse_order_file", headerName: "PDF", width: 200 },
  ],
  product: [
    { field: "idproducts", headerName: "ID", width: 400 },
    { field: "products_name", headerName: "NOMBRE", width: 400 },
  ],
  Company: [
    { field: "idcompany", headerName: "ID", width: 30 },
    { field: "idchannels", headerName: "IDCOMPAÑIA", width: 200 },
    { field: "company_name", headerName: "NOMBRE", width: 200 },
    { field: "company_address", headerName: "DIRECCIÓN", width: 200 },
    { field: "company_email", headerName: "EMAIL", width: 200 },
    {
      field: "company_document_type",
      headerName: "TIPO DOCUMENTO",
      width: 200,
    },
    { field: "company_document_number", headerName: "#", width: 200 },
  ],
  delivery_man: [
    { field: "iddelivery_man", headerName: "ID", width: 300 },
    { field: "delivery_man_name", headerName: "NOMBRE", width: 300 },
    { field: "delivery_manco_email", headerName: "EMAIL", width: 300 },
    { field: "delivery_man_password", headerName: "PASSWORD", width: 300 },
  ],
  category: [
    {
      field: "categories_photo",
      headerName: "Avatar",
      width: 130,

      renderCell: (params) => (
        <Avatar
          alt="Avatar"
          src={url_img + params.row.categories_photo}
          //   sx={{ width: 100 ,height:70 }}
        />
      ),
    },
    { field: "idcategories", headerName: "ID", width: 250 },
    { field: "idbriefcase", headerName: "ID PORTAFOLIO ", width: 250 },
    { field: "categories_name", headerName: "NOMBRE CATEGORIA", width: 200 },
  ],
  products: [
    {
      field: "products_photo",
      headerName: "Avatar",
      width: 130,

      renderCell: (params) => (
        <Avatar
          alt="Avatar"
          src={url_img + params.row.products_photo}
          //   sx={{ width: 100 ,height:70 }}
        />
      ),
    },
    { field: "idcategories", headerName: "ID CATEGORIA", width: 250 },
    { field: "Products_reference", headerName: "NOMBRE ", width: 250 },
    { field: "Products_size", headerName: "TALLA", width: 200 },
    { field: "Products_price", headerName: "TALLA", width: 200 },
    {
      field: "Products_color",
      headerName: "COLOR",
      width: 130,

      renderCell: (params) => (
        <input type="color" disabled value={params.row.Products_color} />
      ),
    },
  ],
};
