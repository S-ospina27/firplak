import React from "react";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";

const SelectedDocument = ({ value, setValue }) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="select-label">{"Documento"}</InputLabel>
      <Select
        labelId="select-label"
        id="select"
        value={value}
        label={"Documento"}
        onChange={(e) => setValue(e.target.value)}
        required={true}
      >
        {["CC", "NIT"].map((opcion,index) => (
          <MenuItem
            key={index}
            value={opcion}
            sx={{ color: "#000000" }}
          >
            {opcion}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectedDocument;
