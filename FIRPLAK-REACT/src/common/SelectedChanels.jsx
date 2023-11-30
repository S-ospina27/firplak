import React from "react";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";

const SelectedChanels = ({ value, setValue }) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="select-label">{"Canales"}</InputLabel>
      <Select
        labelId="select-label"
        id="select"
        value={value}
        label={"Canales"}
        onChange={(e) => setValue(e.target.value)}
        required={true}
      >
        {[
          { idchannels: 1, channels_name: "Constructora" },
          { idchannels: 2, channels_name: "Almacenes" },
          { idchannels: 3, channels_name: "E-commerce" },
        ].map((opcion) => (
          <MenuItem
            key={opcion.idchannels}
            value={opcion.idchannels}
            sx={{ color: "#000000" }}
          >
            {opcion.channels_name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectedChanels;
