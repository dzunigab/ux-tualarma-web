import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import logo from "../images/Logo.svg";
import "./styles.css";
import HeaderComponent from "../Components/General/HeaderComponent";
import SidebarComponent from "../Components/General/SidebarComponent";
import TablaComponent from "../Components/General/TablaComponent";

const InicioContainer = (props) => {
  const table = {
    headers: ["ID", "Nombre", "Etiqueta", "Estado", "Fecha"],
    body: [
      ["1", "Despertar", "Estudio", "Activo", "20 de agosto de 2022"],
      ["2", "Clase de yoga", "Ejercicio", "Desactivado", "2 de julio de 2021"],
      ["3", "Acetaminofen", "Medicamentos", "Activo", "1 de diciembre de 2022"],
      ["4", "Parcial", "Estudio", "Eliminado", "4 de octubre de 2021"],
      ["5", "Entrevista", "Recordatorio", "Activo", "15 de marzo de 2023"],
    ],
  };
  return (
    <div>
      <HeaderComponent />
      <Box sx={{ flexGrow: 1 }} className="Contedio">
        <Grid
          container
          justifyContent="center"
          alignItems="flex-start"
          spacing={2}
        >
          <Grid item md={10} className="TablaContainer">
            <h2>Historial de alarmas</h2>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }} className="Contedio">
        <Grid
          container
          justifyContent="center"
          alignItems="flex-start"
          spacing={2}
        >
          <Grid item md={8} className="TablaContainer">
            <TablaComponent
              headers={table.headers}
              body={table.body}
            ></TablaComponent>
          </Grid>
          <Grid item md={2}>
            <SidebarComponent></SidebarComponent>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default InicioContainer;
