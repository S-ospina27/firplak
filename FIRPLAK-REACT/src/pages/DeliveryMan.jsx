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
import {
  GetAllDelivery,
  RegisterDeliveryMan,
  UpdateDeliveryMan,
} from "../data/DeliveryMan";
import DialogM from "../common/DialogM";
const DemoPaper = styled(Paper)(({ theme }) => ({
  width: "90vw",
  minHeight: "90vh",
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
  borderRadius: "10px",
}));

const DeliveryMan = ({ alert }) => {
  const [deliveryManAll, setdeliveryManAll] = useState([]);
  const [file, setFile] = useState([]);
  const [open, setOpen] = useState(false);
  const [iddelivery_man, setIddelivery_man] = useState("");
  const [delivery_man_name, setDelivery_man_name] = useState("");
  const [delivery_manco_email, setDelivery_manco_email] = useState("");
  const [delivery_man_password, setDelivery_man_password] = useState("");

  function handleGetAllDeliveryMan() {
    GetAllDelivery().then((res) => {
      setdeliveryManAll(res.data.status == "success" ? res.data.data : []);
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (file.length === 0) {
      alert({
        open: true,
        message: "La imagen es requerida",
        severity: "error",
      });
      return;
    }
    RegisterDeliveryMan({ file }).then((res) => {
      if (res.data.status === "success") {
        handleGetAllDeliveryMan();
        alert({
          open: true,
          message: res.data.message,
          severity: res.data.status,
        });
        setFile([]);
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
    UpdateDeliveryMan({
      iddelivery_man,
      delivery_man_name,
      delivery_manco_email,
      delivery_man_password,
    }).then((res) => {
      if (res.data.status === "success") {
        handleGetAllDeliveryMan();
        alert({
          open: true,
          message: res.data.message,
          severity: res.data.status,
        });
        setOpen(false);
        setIddelivery_man("");
        setDelivery_man_name("");
        setDelivery_manco_email("");
        setDelivery_man_password("");
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
      iddelivery_man: "",
      delivery_man_name: "",
      delivery_manco_email: "",
      delivery_man_password: "",
    }
  ) => {
    setIddelivery_man(row.iddelivery_man);
    setDelivery_man_name(row.delivery_man_name);
    setDelivery_manco_email(row.delivery_manco_email);
    setDelivery_man_password(row.delivery_man_password);
  };

  useEffect(() => {
    handleGetAllDeliveryMan();
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
              Registrar Repartido
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={5} md={6} sm={8} lg={10}>
                  <TextFieldFile
                    type={"text"}
                    label={"Subir Archivo"}
                    value={file}
                    setValue={setFile}
                    accept={[".xlsx"]}
                  />
                </Grid>
                <Grid item xs={4} md={4} sm={2} lg={2}>
                  <Button
                    type="button"
                    variant="contained"
                    sx={{ backgroundColor: "#008000", color: "#FFFFFF" }}
                    endIcon={<LibraryBooksIcon />}
                    onClick={() =>
                      (window.location.href =
                        "http://127.0.0.1:8000/archivos/delivery_man.xlsx")
                    }
                  >
                    Descargar
                  </Button>
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
                reload={handleGetAllDeliveryMan}
                rows={deliveryManAll}
                columns={ColumnsTable.delivery_man}
                getRowId={"iddelivery_man"}
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

            <DialogM open={open} setOpen={setOpen} title={"Editar repartidor"}>
              <form onSubmit={handleEditSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={6} md={6} sm={6} lg={6}>
                    <TextFieldFilled
                      value={iddelivery_man}
                      setValue={setIddelivery_man}
                      label={"ID"}
                      required={true}
                      type={"number"}
                      disabled
                    />
                  </Grid>
                  <Grid item xs={6} md={6} sm={6} lg={6}>
                    <TextFieldFilled
                      value={delivery_man_name}
                      setValue={setDelivery_man_name}
                      label={"Nombre"}
                      required={true}
                    />
                  </Grid>
                  <Grid item xs={6} md={6} sm={6} lg={6}>
                    <TextFieldFilled
                      value={delivery_manco_email}
                      setValue={setDelivery_manco_email}
                      label={"Email"}
                      required={true}
                    />
                  </Grid>
                  <Grid item xs={6} md={6} sm={6} lg={6}>
                    <TextFieldFilled
                      value={delivery_man_password}
                      setValue={setDelivery_man_password}
                      label={"password"}
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

export default DeliveryMan;
