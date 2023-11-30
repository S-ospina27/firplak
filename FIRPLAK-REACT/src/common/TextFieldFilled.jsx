import { TextField } from "@mui/material";
import React from "react";

const TextFieldFilled = ({
  value,
  setValue,
  disabled = false,
  label,
  required = false,
  type,
  readOnly = false,
}) => {
  return (
    <TextField
      label={label}
      variant="outlined"
      fullWidth
      value={value}
      onChange={(e) => setValue(e.target.value)}
      disabled={disabled}
      required={required}
      type={type ? type : "text"}
      readOnly={readOnly}
    />
  );
};

export default TextFieldFilled;
