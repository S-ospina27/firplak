import React from "react";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";

const SelectedPurchaseType = ({ value, setValue }) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="select-label">{"Tipo"}</InputLabel>
      <Select
        labelId="select-label"
        id="select"
        value={value}
        label={"Tipo"}
        onChange={(e) => setValue(e.target.value)}
        required={true}
      >
        {["MANUAL", "DIGITAL"].map((opcion, index) => (
          <MenuItem key={index} value={opcion} sx={{ color: "#000000" }}>
            {opcion}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectedPurchaseType;
