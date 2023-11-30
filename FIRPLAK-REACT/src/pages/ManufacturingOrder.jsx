import { useEffect, useState } from "react";
import { Button, Divider, Grid, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import ColumnsTable from "../tools/ColumnsTable";
import DataTableM from "../common/DataTableM";
import TextFieldFile from "../common/TextFieldFile";
import TextFieldFilled from "../common/TextFieldFilled";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { GetAllDelivery, UpdateDeliveryMan } from "../data/DeliveryMan";
import DialogM from "../common/DialogM";
import SelectOrders from "../common/SelectOrders";
import SelectLine from "../common/SelectLine";
import SelectOrdersProduct from "../common/SelectOrdersProduct";
import {
  GetAllManufacturin,
  RegisterManufacturing,
  updateManufacturing,
} from "../data/ManuFacturing";
const DemoPaper = styled(Paper)(({ theme }) => ({
  width: "90vw",
  minHeight: "90vh",
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
  borderRadius: "10px",
}));

const ManufacturingOrder = ({ alert }) => {
  const [order, setOrder] = useState("");
  const [line, setLine] = useState("");
  const [orderProduct, setOrderProduct] = useState("");

  const [manufacturing, setManufacturing] = useState([]);
  const [open, setOpen] = useState(false);

  const [idmanufacturing_orderEdit, setIdmanufacturing_orderEdit] =
    useState("");
  const [idstate, setIdstate] = useState("");
  const [LineaEdit, setLineaEdit] = useState("");

  function handleGetAllManufacturing() {
    GetAllManufacturin().then((res) => {
      setManufacturing(res.data.status == "success" ? res.data.data : []);
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    RegisterManufacturing({ order, line, orderProduct }).then((res) => {
      if (res.data.status === "success") {
        handleGetAllManufacturing();
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

  function handleEditSubmit(e) {
    e.preventDefault();
    updateManufacturing({ idmanufacturing_orderEdit, idstate, LineaEdit }).then(
      (res) => {
        if (res.data.status === "success") {
          handleGetAllManufacturing();
          alert({
            open: true,
            message: res.data.message,
            severity: res.data.status,
          });
          setOpen(false);
          setIdstate("");
          setIdmanufacturing_orderEdit("");
          setLineaEdit("");
        } else {
          alert({
            open: true,
            message: res.data.message,
            severity: res.data.status,
          });
        }
      }
    );
  }

  const setFields = (
    row = {
      idmanufacturing_order: "",
      idstate: "",
      manufacturing_order_type_line: "",
    }
  ) => {
    setIdstate(row.idstate);
    setIdmanufacturing_orderEdit(row.idmanufacturing_order);
    setLineaEdit(row.manufacturing_order_type_line);
  };

  useEffect(() => {
    handleGetAllManufacturing();
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
              Manu facturación
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={6} md={6} sm={6} lg={6}>
                  <SelectOrders value={order} setValue={setOrder} />
                </Grid>
                <Grid item xs={6} md={6} sm={6} lg={6}>
                  <SelectOrdersProduct
                    value={orderProduct}
                    setValue={setOrderProduct}
                    idPurcharseOrder={order}
                  />
                </Grid>
                <Grid item xs={6} md={6} sm={6} lg={6}>
                  <SelectLine value={line} setValue={setLine} />
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
            <Grid item xs={6} md={12} sm={12} lg={12}>
              <DataTableM
                reload={handleGetAllManufacturing}
                rows={manufacturing}
                columns={ColumnsTable.manufacturing}
                getRowId={"idmanufacturing_order"}
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
              />
            </Grid>

            <DialogM
              open={open}
              setOpen={setOpen}
              title={"Editar Manufacturación"}
            >
              <form onSubmit={handleEditSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={6} md={6} sm={6} lg={6}>
                    <TextFieldFilled
                      value={idmanufacturing_orderEdit}
                      setValue={setIdmanufacturing_orderEdit}
                      label={"ID"}
                      required={true}
                      type={"number"}
                      disabled
                    />
                  </Grid>
                  <Grid item xs={6} md={6} sm={6} lg={6}>
                    <TextFieldFilled
                      value={idstate}
                      setValue={setIdstate}
                      label={"ESTADO"}
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
          </Grid>
        </DemoPaper>
      </Stack>
    </Grid>
  );
};

export default ManufacturingOrder;
