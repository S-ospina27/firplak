import { Route, Routes } from "react-router-dom";
import NavbarApp from "./common/NavbarApp";
import { useState } from "react";
import { Alert, Slide, Snackbar } from "@mui/material";
import Company from "./pages/Company";
import DeliveryMan from "./pages/DeliveryMan";
import Products from "./pages/Products";
import PurchaseOrder from "./pages/PurchaseOrder";
import ManufacturingOrder from "./pages/ManufacturingOrder";
import Login from "./pages/Login";
import IsAuthenticatedMiddleware from "./middleware/IsAuthenticatedMiddleware";
function App() {
  const [alert, setAlert] = useState({
    open: false,
    severity: "",
    message: "",
  });
  return (
    <>
      {alert.open && (
        <Snackbar
          open={alert.open}
          autoHideDuration={alert.time ? alert.time : 5000}
          onClose={(event, reason) => {
            if (reason === "clickaway") return;

            setAlert({
              open: false,
              severity: "",
              message: "",
            });
          }}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          TransitionComponent={(props) => <Slide {...props} direction="up" />}
        >
          <Alert
            severity={
              [
                "error",
                "route-error",
                "database-error",
                "existence-error",
                "session-error",
              ].includes(alert.severity)
                ? "error"
                : alert.severity
            }
          >
            {alert.message}
          </Alert>
        </Snackbar>
      )}

      <Routes>
        <Route path="/" element={<Login alert={setAlert} />} />

        <Route path="/" element={<NavbarApp />}>
          <Route
            path="/compañias"
            element={
              <IsAuthenticatedMiddleware>
                <Company alert={setAlert} />
              </IsAuthenticatedMiddleware>
            }
          />
          <Route
            path="/Repartidores"
            element={
              <IsAuthenticatedMiddleware>
                <DeliveryMan alert={setAlert} />
              </IsAuthenticatedMiddleware>
            }
          />
          <Route
            path="/Productos"
            element={
              <IsAuthenticatedMiddleware>
                <Products alert={setAlert} />
              </IsAuthenticatedMiddleware>
            }
          />
          <Route
            path="/Pedidos"
            element={
              <IsAuthenticatedMiddleware>
                <PurchaseOrder alert={setAlert} />
              </IsAuthenticatedMiddleware>
            }
          />
          <Route
            path="/Manufacturación"
            element={
              <IsAuthenticatedMiddleware>
                <ManufacturingOrder alert={setAlert} />
              </IsAuthenticatedMiddleware>
            }
          />
        </Route>
        <Route path={"*"} element={<h1>URL NO ENCONTRADA</h1>} />
      </Routes>
    </>
  );
}

export default App;
