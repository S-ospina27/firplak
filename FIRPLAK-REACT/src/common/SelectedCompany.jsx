import { useEffect, useState } from "react";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import { getHeader } from "../tools/SessionSettings";
import axios from "axios";
import RouteList from "../tools/RouteList";

const SelectedCompany = ({ value, setValue }) => {
  const [getAllcompany, setGetAllcompany] = useState([]);
  useEffect(() => {
    axios
      .get(RouteList.api.company.index, getHeader())
      .then((res) => {
        setGetAllcompany(res.data.data);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <FormControl fullWidth>
      <InputLabel id="select-label">{"Compañias"}</InputLabel>
      <Select
        labelId="select-label"
        id="select"
        value={value}
        label={"Compañias"}
        onChange={(e) => setValue(e.target.value)}
        required={true}
      >
        {getAllcompany.map((opcion) => (
          <MenuItem
            key={opcion.idcompany}
            value={opcion.idcompany}
            sx={{ color: "#000000" }}
          >
            {opcion.company_name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectedCompany;
