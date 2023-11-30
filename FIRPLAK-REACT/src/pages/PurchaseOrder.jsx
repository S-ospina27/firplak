import { useEffect, useState } from "react";
import { Button, Divider, Grid, TextField, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import ColumnsTable from "../tools/ColumnsTable";
import DataTableM from "../common/DataTableM";
import TextFieldFilled from "../common/TextFieldFilled";
import TextFieldFile from "../common/TextFieldFile";
import SelectedCompany from "../common/SelectedCompany";
import SelectedPurchaseType from "../common/SelectedPurchaseType";
import DialogM from "../common/DialogM";

import {
  GetAllPurchaseOrder,
  RegisterPurcharOrder,
} from "../data/purchaseOrder";
import FullScreenDialog from "../common/DialogFullScreen";
import SelectedProducts from "../common/SelectedProducts";
import {
  GetAllPurchaseProducts,
  RegisterPurcharProduct,
  updatePurcharProduct,
} from "../data/PurchaseProduct";

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: "90vw",
  minHeight: "80vh",
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
  borderRadius: "10px",
}));

const PurchaseOrder = ({ alert }) => {
  const [company, setCompany] = useState("");
  const [purcharse_order_name, setPurcharse_order_name] = useState("");
  const [purcharse_order_type, setPurcharse_order_type] = useState("");
  const [file, setFile] = useState([]);
  const [purchaseOrder, setPurchaseOrder] = useState([]);
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const [product, setProduct] = useState("");
  const [idpurchaseOrder, setidPurchaseOrder] = useState("");
  const [amount, setAmount] = useState("");
  const [purchase_product, setPurchase_product] = useState([]);

  const [idpurchase_order_productsEdit, setIdpurchase_order_productsEdit] =
    useState("");
  const [
    purchase_order_products_amountEdit,
    setPurchase_order_products_amountEdit,
  ] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    RegisterPurcharOrder({
      company,
      purcharse_order_name,
      purcharse_order_type,
      file,
    }).then((res) => {
      if (res.data.status === "success") {
        handleGetAllPurcharseOrder();
        setCompany("");
        setFile([]);
        setPurcharse_order_name("");
        setPurcharse_order_type("");
        alert({
          open: true,
          message: res.data.message,
          severity: res.data.status,
        });
      } else {
        alert({
          open: true,
          message: res.data.message,
          severity: res.data.status,
        });
      }
    });
  }

  const setFields = (
    row = {
      idpurcharse_order: "",
    }
  ) => {
    setidPurchaseOrder(row.idpurcharse_order);
  };
  const setFieldsEdit = (
    row = {
      idpurchase_order_products: "",
      purchase_order_products_amount: "",
    }
  ) => {
    setIdpurchase_order_productsEdit(row.idpurchase_order_products);
    setPurchase_order_products_amountEdit(row.purchase_order_products_amount);
  };

  function handleGetAllPurcharseOrder() {
    GetAllPurchaseOrder().then((res) => {
      setPurchaseOrder(res.data.status == "success" ? res.data.data : []);
    });
  }
  function handleGetAllPurcharseProducts() {
    GetAllPurchaseProducts(idpurchaseOrder).then((res) => {
      setPurchase_product(res.data.status == "success" ? res.data.data : []);
    });
  }

  function handleSubmitPurchaseProduct(e) {
    e.preventDefault();
    RegisterPurcharProduct({
      product,
      idpurchaseOrder,
      amount,
    }).then((res) => {
      if (res.data.status === "success") {
        handleGetAllPurcharseProducts();
        setProduct("");
        setAmount("");
        alert({
          open: true,
          message: res.data.message,
          severity: res.data.status,
        });
      } else {
        alert({
          open: true,
          message: res.data.message,
          severity: res.data.status,
        });
      }
    });
  }

  function handleSubmitPurchaseProductEdit(e) {
    e.preventDefault();
    updatePurcharProduct({
      idpurchase_order_productsEdit,
      purchase_order_products_amountEdit,
    }).then((res) => {
      if (res.data.status === "success") {
        handleGetAllPurcharseProducts();
        setIdpurchase_order_productsEdit("");
        setPurchase_order_products_amountEdit("");
        setOpenEdit(false);
        alert({
          open: true,
          message: res.data.message,
          severity: res.data.status,
        });
      } else {
        alert({
          open: true,
          message: res.data.message,
          severity: res.data.status,
        });
      }
    });
  }
  useEffect(() => {
    handleGetAllPurcharseProducts();
  }, [open]);
  useEffect(() => {
    handleGetAllPurcharseOrder();
  }, []);
  return (
    <Grid
      container
      spacing={1}
      sx={{
        display: "flex",
        justifyContent: "center",
        minHeight: "100vh",
        marginTop: "20px",
        marginBottom: "20px",
      }}
    >
      <Stack>
        <DemoPaper square>
          <Grid item xs={12} sx={{ mr: 1, ml: 1 }}>
            <Typography
              textAlign={"center"}
              variant="h5"
              gutterBottom
              sx={{ color: " #252b59", mb: 2 }}
            >
              Registrar Pedidos
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={6} md={6} sm={6} lg={4}>
                  <SelectedPurchaseType
                    value={purcharse_order_type}
                    setValue={setPurcharse_order_type}
                    label={"Dirección"}
                    required={true}
                  />
                </Grid>
                <Grid item xs={6} md={6} sm={6} lg={4}>
                  <SelectedCompany value={company} setValue={setCompany} />
                </Grid>
                <Grid item xs={6} md={6} sm={6} lg={4}>
                  <TextFieldFilled
                    value={purcharse_order_name}
                    setValue={setPurcharse_order_name}
                    label={"Nombre"}
                    required={true}
                  />
                </Grid>
                {purcharse_order_type === "DIGITAL" ? (
                  <Grid item xs={6} md={6} sm={6} lg={4}>
                    <TextFieldFile
                      type={"text"}
                      label={"Subir Archivo"}
                      value={file}
                      setValue={setFile}
                      accept={[".pdf"]}
                    />
                  </Grid>
                ) : (
                  ""
                )}
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ backgroundColor: "#252b59", color: "#FFFFFF" }}
                  >
                    Registrar
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>

          <Grid item xs={12} sx={{ mr: 1, ml: 1 }}>
            <Divider sx={{ mt: 3, mb: 2 }}>
              {" "}
              <Typography
                textAlign={"center"}
                variant="h5"
                gutterBottom
                sx={{ color: " #252b59" }}
              >
                Pedidos registrados
              </Typography>
            </Divider>
            <Grid item xs={6} md={12} sm={12} lg={12}>
              <DataTableM
                reload={handleGetAllPurcharseOrder}
                rows={purchaseOrder}
                columns={ColumnsTable.purchaseOrder}
                getRowId={"idpurcharse_order"}
                onRowClick={{
                  open: setOpen,
                  set: setFields,
                }}
                sx={{
                  height: "310px",
                  "@media (max-width: 320px)": {
                    width: "270px",
                  },
                  "@media (min-width: 321px) and (max-width:425px)": {
                    width: "330px",
                  },
                  "@media (min-width: 426px) and (max-width:767px)": {
                    width: "400px",
                  },
                  "(min-width: 768px) and (max-width:1040px)": {
                    width: "470px",
                  },
                }}
                // toolbar={
                //   <Button
                //     type="button"
                //     onClick={() => setOpen(true)}
                //     sx={{ color: " #252b59" }}
                //     // startIcon={<AddIcon />}
                //   >
                //     {"Agregar productos a pedido"}
                //   </Button>
                // }
              />
            </Grid>
            <FullScreenDialog
              open={open}
              setOpen={setOpen}
              title={"Agregar productos"}
            >
              <Grid item xs={12} sx={{ mr: 1, ml: 1 }}>
                <form
                  onSubmit={handleSubmitPurchaseProduct}
                  style={{ marginTop: "20px" }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={6} md={6} sm={6} lg={4}>
                      <TextFieldFilled
                        value={idpurchaseOrder}
                        setValue={setidPurchaseOrder}
                        label={"ID"}
                        required={true}
                        disabled
                      />
                    </Grid>
                    <Grid item xs={6} md={6} sm={6} lg={4}>
                      <SelectedProducts
                        value={product}
                        setValue={setProduct}
                        required={true}
                      />
                    </Grid>

                    <Grid item xs={6} md={6} sm={6} lg={4}>
                      <TextFieldFilled
                        value={amount}
                        setValue={setAmount}
                        label={"CANTIDAD"}
                        required={true}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        sx={{ backgroundColor: "#252b59", color: "#FFFFFF" }}
                      >
                        Registrar
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
              <Grid item xs={12} sx={{ mr: 2, ml: 2 }}>
                <Divider sx={{ mt: 3, mb: 2 }}>
                  {" "}
                  <Typography
                    textAlign={"center"}
                    variant="h5"
                    gutterBottom
                    sx={{ color: " #252b59" }}
                  >
                    Productos registrados
                  </Typography>
                </Divider>
                <Grid item xs={6} md={12} sm={12} lg={12} sx={{ mb: 3 }}>
                  <DataTableM
                    reload={handleGetAllPurcharseProducts}
                    rows={purchase_product}
                    columns={ColumnsTable.purchase_products}
                    getRowId={"idpurchase_order_products"}
                    onRowClick={{
                      open: setOpenEdit,
                      set: setFieldsEdit,
                    }}
                    sx={{
                      height: "310px",
                      "@media (max-width: 320px)": {
                        width: "270px",
                      },
                      "@media (min-width: 321px) and (max-width:425px)": {
                        width: "330px",
                      },
                      "@media (min-width: 426px) and (max-width:767px)": {
                        width: "400px",
                      },
                      "(min-width: 768px) and (max-width:1040px)": {
                        width: "470px",
                      },
                    }}
                  />
                </Grid>
              </Grid>
            </FullScreenDialog>
            <DialogM
              open={openEdit}
              setOpen={setOpenEdit}
              title={"Actualizar producto"}
            >
              <form onSubmit={handleSubmitPurchaseProductEdit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={12} sm={12} lg={6}>
                    <TextFieldFilled
                      value={idpurchase_order_productsEdit}
                      setValue={setIdpurchase_order_productsEdit}
                      label={"ID"}
                      required={true}
                      disabled
                    />
                  </Grid>
                  <Grid item xs={12} md={12} sm={12} lg={6}>
                    <TextFieldFilled
                      value={purchase_order_products_amountEdit}
                      setValue={setPurchase_order_products_amountEdit}
                      label={"CANTIDAD"}
                      required={true}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ backgroundColor: " #252b59", color: "#FFFFFF" }}
                    >
                      Editar
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </DialogM>
          </Grid>
        </DemoPaper>
      </Stack>
    </Grid>
  );
};

export default PurchaseOrder;
