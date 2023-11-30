import { useEffect, useState } from "react";
import { Button, Divider, Grid, TextField, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import ColumnsTable from "../tools/ColumnsTable";
import DataTableM from "../common/DataTableM";
import { GetAllCompany, RegisterCompany, updateCompany } from "../data/Company";
import SelectedChanels from "../common/SelectedChanels";
import TextFieldFilled from "../common/TextFieldFilled";
import SelectedDocument from "../common/SelectedDocument";
import DialogM from "../common/DialogM";

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: "90vw",
  minHeight: "80vh",
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
  borderRadius: "10px",
}));

const Company = ({ alert }) => {
  const [companyAll, setCompanyAll] = useState([]);
  const [idchannels, setIdchannels] = useState("");
  const [company_name, setCompany_name] = useState("");
  const [company_address, setCompany_address] = useState("");
  const [company_email, setCompany_email] = useState("");
  const [company_password, setCompany_password] = useState("");
  const [company_document_type, setCompany_document_type] = useState("");
  const [company_document_number, setCompany_document_number] = useState("");

  const [idcompanyEdit, setCompanyEdit] = useState("");
  const [idchannelsEdit, setIdchannelsEdit] = useState("");
  const [company_nameEdit, setCompany_nameEdit] = useState("");
  const [company_addressEdit, setCompany_addressEdit] = useState("");
  const [company_emailEdit, setCompany_emailEdit] = useState("");
  const [company_passwordEdit, setCompany_passwordEdit] = useState("");
  const [company_document_typeEdit, setCompany_document_typeEdit] =
    useState("");
  const [company_document_numberEdit, setCompany_document_numberEdit] =
    useState("");
  const [open, setOpen] = useState(false);

  function handleGetAllcompany() {
    GetAllCompany().then((res) => {
      setCompanyAll(res.data.status == "success" ? res.data.data : []);
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    RegisterCompany({
      idchannels,
      company_name,
      company_address,
      company_email,
      company_password,
      company_document_type,
      company_document_number,
    }).then((res) => {
      if (res.data.status === "success") {
        handleGetAllcompany();
        alert({
          open: true,
          message: res.data.message,
          severity: res.data.status,
        });
        setIdchannels("");
        setCompany_name("");
        setCompany_address("");
        setCompany_password("");
        setCompany_document_type("");
        setCompany_document_number("");
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
    updateCompany({
      idcompanyEdit,
      idchannelsEdit,
      company_nameEdit,
      company_addressEdit,
      company_emailEdit,
      company_passwordEdit,
      company_document_typeEdit,
      company_document_numberEdit,
    }).then((res) => {
      if (res.data.status === "success") {
        handleGetAllcompany();
        alert({
          open: true,
          message: res.data.message,
          severity: res.data.status,
        });
        setOpen(false);
        setCompanyEdit("");
        setIdchannelsEdit("");
        setCompany_nameEdit("");
        setCompany_emailEdit("");
        setCompany_addressEdit("");
        setCompany_document_typeEdit("");
        setCompany_document_numberEdit("");
        setCompany_passwordEdit("");
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
      idcompany: "",
      idchannels: "",
      company_name: "",
      company_email: "",
      company_address: "",
      company_document_type: "",
      company_document_number: "",
      company_password: "",
    }
  ) => {
    setCompanyEdit(row.idcompany);
    setIdchannelsEdit(row.idchannels);
    setCompany_nameEdit(row.company_name);
    setCompany_emailEdit(row.company_email);
    setCompany_addressEdit(row.company_address);
    setCompany_document_typeEdit(row.company_document_type);
    setCompany_document_numberEdit(row.company_document_number);
    setCompany_passwordEdit(row.company_password);
  };

  useEffect(() => {
    handleGetAllcompany();
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
              Registrar compañias
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={6} md={6} sm={6} lg={4}>
                  <SelectedChanels
                    value={idchannels}
                    setValue={setIdchannels}
                  />
                </Grid>
                <Grid item xs={6} md={6} sm={6} lg={4}>
                  <SelectedDocument
                    value={company_document_type}
                    setValue={setCompany_document_type}
                  />
                </Grid>
                <Grid item xs={6} md={6} sm={6} lg={4}>
                  <TextFieldFilled
                    value={company_document_number}
                    setValue={setCompany_document_number}
                    label={"Nombre"}
                    required={true}
                    type={"number"}
                  />
                </Grid>
                <Grid item xs={6} md={6} sm={6} lg={4}>
                  <TextFieldFilled
                    value={company_name}
                    setValue={setCompany_name}
                    label={"Nombre"}
                    required={true}
                  />
                </Grid>

                <Grid item xs={6} md={6} sm={6} lg={4}>
                  <TextFieldFilled
                    value={company_address}
                    setValue={setCompany_address}
                    label={"Dirección"}
                    required={true}
                  />
                </Grid>
                <Grid item xs={6} md={6} sm={6} lg={4}>
                  <TextFieldFilled
                    value={company_email}
                    setValue={setCompany_email}
                    label={"Email"}
                    required={true}
                  />
                </Grid>
                <Grid item xs={6} md={6} sm={6} lg={4}>
                  <TextFieldFilled
                    value={company_password}
                    setValue={setCompany_password}
                    label={"Contraseña"}
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
                reload={handleGetAllcompany}
                rows={companyAll}
                columns={ColumnsTable.Company}
                getRowId={"idcompany"}
                onRowClick={{
                  open: setOpen,
                  set: setFields,
                }}
                sx={{
                  height: "400px",
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
                  // "@media (max-width: 425px)": {
                  //   width: "340px",
                  // },
                }}
                // toolbar={
                //   <Button
                //     type="button"
                //     disabled={items.length > 0 ? false : true}
                //     onClick={handleMassiveDelete}
                //     sx={{ color: " #252b59" }}
                //     // startIcon={<PriceCheckIcon />}
                //   >
                //     {"Eliminar"}
                //   </Button>
                // }
              />
            </Grid>

            <DialogM open={open} setOpen={setOpen} title={"Editar Producto"}>
              <form onSubmit={handleEditSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={6} md={6} sm={6} lg={4}>
                    <TextFieldFilled
                      value={idcompanyEdit}
                      setValue={setCompanyEdit}
                      label={"ID"}
                      required={true}
                      disabled
                    />
                  </Grid>
                  <Grid item xs={6} md={6} sm={6} lg={4}>
                    <SelectedChanels
                      value={idchannelsEdit}
                      setValue={setIdchannelsEdit}
                    />
                  </Grid>
                  <Grid item xs={6} md={6} sm={6} lg={4}>
                    <SelectedDocument
                      value={company_document_typeEdit}
                      setValue={setCompany_document_typeEdit}
                    />
                  </Grid>
                  <Grid item xs={6} md={6} sm={6} lg={4}>
                    <TextFieldFilled
                      value={company_document_numberEdit}
                      setValue={setCompany_document_numberEdit}
                      label={"Numero"}
                      required={true}
                      type={"number"}
                    />
                  </Grid>
                  <Grid item xs={6} md={6} sm={6} lg={4}>
                    <TextFieldFilled
                      value={company_nameEdit}
                      setValue={setCompany_nameEdit}
                      label={"Nombre"}
                      required={true}
                    />
                  </Grid>

                  <Grid item xs={6} md={6} sm={6} lg={4}>
                    <TextFieldFilled
                      value={company_addressEdit}
                      setValue={setCompany_addressEdit}
                      label={"Dirección"}
                      required={true}
                    />
                  </Grid>
                  <Grid item xs={6} md={6} sm={6} lg={4}>
                    <TextFieldFilled
                      value={company_emailEdit}
                      setValue={setCompany_emailEdit}
                      label={"Email"}
                      required={true}
                    />
                  </Grid>
                  <Grid item xs={6} md={6} sm={6} lg={4}>
                    <TextFieldFilled
                      value={company_passwordEdit}
                      setValue={setCompany_passwordEdit}
                      label={"Contraseña"}
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
            </DialogM>
          </Grid>
        </DemoPaper>
      </Stack>
    </Grid>
  );
};

export default Company;
