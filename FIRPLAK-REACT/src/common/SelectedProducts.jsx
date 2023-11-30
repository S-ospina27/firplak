import { useEffect, useState } from "react";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import { getHeader } from "../tools/SessionSettings";
import axios from "axios";
import RouteList from "../tools/RouteList";

const SelectedProducts = ({ value, setValue }) => {
  const [getAllprudct, setGetAllproducts] = useState([]);
  useEffect(() => {
    axios
      .get(RouteList.api.products.index, getHeader())
      .then((res) => {
        setGetAllproducts(res.data.data);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <FormControl fullWidth>
      <InputLabel id="select-label">{"Productos"}</InputLabel>
      <Select
        labelId="select-label"
        id="select"
        value={value}
        label={"Productos"}
        onChange={(e) => setValue(e.target.value)}
        required={true}
      >
        {getAllprudct.map((opcion) => (
          <MenuItem
            key={opcion.idproducts}
            value={opcion.idproducts}
            sx={{ color: "#000000" }}
          >
            {opcion.products_name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectedProducts;
