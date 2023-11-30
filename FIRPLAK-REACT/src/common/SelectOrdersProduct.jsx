import React, { useEffect, useState } from "react";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import { GetAllPurchaseProducts } from "../data/PurchaseProduct";

const SelectOrdersProduct = ({ value, setValue, idPurcharseOrder }) => {
  const [ordersProducts, setOrdersProducts] = useState([]);

  useEffect(() => {
    GetAllPurchaseProducts(idPurcharseOrder).then((res) => {
      setOrdersProducts(res.data.status === "success" ? res.data.data : []);
    });
  }, [idPurcharseOrder]);
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
        {ordersProducts.map((opcion) => (
          <MenuItem
            key={opcion.idpurchase_order_products}
            value={opcion.idpurchase_order_products}
            sx={{ color: "#000000" }}
          >
            {opcion.products_name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectOrdersProduct;
