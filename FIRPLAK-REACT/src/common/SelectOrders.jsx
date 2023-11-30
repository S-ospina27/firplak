import React, { useEffect, useState } from "react";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import { GetAllPurchaseOrder } from "../data/purchaseOrder";

const SelectOrders = ({ value, setValue }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    GetAllPurchaseOrder().then((res) => {
      setOrders(res.data.data);
    });
  }, []);
  return (
    <FormControl fullWidth>
      <InputLabel id="select-label">{"Pedidos"}</InputLabel>
      <Select
        labelId="select-label"
        id="select"
        value={value}
        label={"Pedidos"}
        onChange={(e) => setValue(e.target.value)}
        required={true}
      >
        {orders.map((opcion) => (
          <MenuItem
            key={opcion.idpurcharse_order}
            value={opcion.idpurcharse_order}
            sx={{ color: "#000000" }}
          >
            {opcion.company_name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectOrders;
