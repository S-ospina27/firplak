import React from "react";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";

const SelectLine = ({ value, setValue }) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="select-label">{"Tipo linea"}</InputLabel>
      <Select
        labelId="select-label"
        id="select"
        value={value}
        label={"Tipo linea"}
        onChange={(e) => setValue(e.target.value)}
        required={true}
      >
        {["MTO", "MTS"].map((opcion, index) => (
          <MenuItem key={index} value={opcion} sx={{ color: "#000000" }}>
            {opcion}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectLine;
