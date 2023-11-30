import { useEffect, useState } from "react";
import { Button, Divider, Grid, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import ColumnsTable from "../tools/ColumnsTable";
import DataTableM from "../common/DataTableM";
import TextFieldFilled from "../common/TextFieldFilled";
import AddIcon from "@mui/icons-material/Add";
import DialogM from "../common/DialogM";
import {
  GetAllProducts,
  RegisterProduct,
  updateProduct,
} from "../data/Product";
const DemoPaper = styled(Paper)(({ theme }) => ({
  width: "90vw",
  minHeight: "60vh",
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
  borderRadius: "10px",
}));

const Products = ({ alert }) => {
  const [productsAll, setProductsAll] = useState([]);
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [products_name, setProducts_name] = useState("");
  const [idproductsEdit, setIdproductsEdit] = useState("");
  const [products_nameEdit, setProducts_nameEdit] = useState("");

  function handleGetAllProducts() {
    GetAllProducts().then((res) => {
      setProductsAll(res.data.status == "success" ? res.data.data : []);
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    RegisterProduct({ products_name }).then((res) => {
      if (res.data.status === "success") {
        handleGetAllProducts();
        alert({
          open: true,
          message: res.data.message,
          severity: res.data.status,
        });
        setProducts_name("");
        setOpen(false);
      } else {
        alert({
          open: true,
          message: res.data.message,
          severity: res.data.status,
        });
      }
    });
  }

  function handleEditSubmit(e) {
    e.preventDefault();
    updateProduct({
      idproductsEdit,
      products_nameEdit,
    }).then((res) => {
      if (res.data.status === "success") {
        handleGetAllProducts();
        alert({
          open: true,
          message: res.data.message,
          severity: res.data.status,
        });
        setOpenEdit(false);
        setIdproductsEdit("");
        setProducts_nameEdit("");
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
      idproducts: "",
      products_name: "",
    }
  ) => {
    setIdproductsEdit(row.idproducts);
    setProducts_nameEdit(row.products_name);
  };

  useEffect(() => {
    handleGetAllProducts();
  }, []);
  return (
    <Grid
      container
      spacing={1}
      sx={{
        display: "flex",
        justifyContent: "center",
        minHeight: "80vh",
        alignItems: "center",
      }}
    >
      <Stack>
        <DemoPaper square>
          <Grid item xs={12} sx={{ mr: 1, ml: 1 }}>
            <Divider sx={{ mt: 3, mb: 2 }}>
              {" "}
              <Typography
                textAlign={"center"}
                variant="h5"
                gutterBottom
                sx={{ color: " #252b59" }}
              >
                Datos registrados
              </Typography>
            </Divider>
            <Grid item xs={12} md={12} sm={12} lg={12}>
              <DataTableM
                reload={handleGetAllProducts}
                rows={productsAll}
                columns={ColumnsTable.product}
                getRowId={"idproducts"}
                onRowClick={{
                  open: setOpenEdit,
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
                toolbar={
                  <Button
                    type="button"
                    onClick={() => setOpen(true)}
                    sx={{ color: " #252b59" }}
                    startIcon={<AddIcon />}
                  >
                    {"Registrar"}
                  </Button>
                }
              />
            </Grid>

            <DialogM
              open={openEdit}
              setOpen={setOpenEdit}
              title={"Editar repartidor"}
            >
              <form onSubmit={handleEditSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={6} md={6} sm={6} lg={6}>
                    <TextFieldFilled
                      value={idproductsEdit}
                      setValue={setIdproductsEdit}
                      label={"ID"}
                      required={true}
                      type={"number"}
                      disabled
                    />
                  </Grid>
                  <Grid item xs={6} md={6} sm={6} lg={6}>
                    <TextFieldFilled
                      value={products_nameEdit}
                      setValue={setProducts_nameEdit}
                      label={"Nombre"}
                      required={true}
                    />
                  </Grid>
                  <Grid item xs={12}>
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
            <DialogM open={open} setOpen={setOpen} title={"Registrar producto"}>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={12} sm={12} lg={12}>
                    <TextFieldFilled
                      value={products_name}
                      setValue={setProducts_name}
                      label={"Nombre"}
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

export default Products;
