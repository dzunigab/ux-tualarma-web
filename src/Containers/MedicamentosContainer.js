import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import logo from "../images/Logo.svg";
import "./styles.css";
import HeaderComponent from "../Components/General/HeaderComponent";
import SidebarComponent from "../Components/General/SidebarComponent";
import TablaComponent from "../Components/General/TablaComponent";
import ServiciosComponent from "../Components/Servicios/ServiciosComponent";
import MedicamentosComponent from "../Components/Medicamentos/MedicamentosComponent";

const MedicamentosContainer = (props) => {
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
  const contenido = {
    title: "¿Cómo funciona?",
    content: [
      "Puedes conectar diferentes aplicaciones a Tu Alarma, esto con el fin de mejorar las sugerencias que realizamos.",
      "Conectando Spotify, te podemos sugerir que sonidos puede tener tu alarma. Podemos variar de acuerdo a tu genero musical favorito.",
      "Conectando Google, puedes sincronizar eventos del calendario y generar una alarma de manera automática.",
      "Aplicaciones como Strava nos permiten sugerir momentos en los que puedes realizar tu actividad física favorita.",
      "Déjanos sorprenderte!",
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
            <h2>Cargar fórmulas médicas</h2>
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
          <Grid item md={8} className="MedicamentosContainer">
            <div>
              <h3>Arrastra la imagen de la fórmula médica</h3>
              <MedicamentosComponent></MedicamentosComponent>
            </div>
          </Grid>
          <Grid item md={2}>
            <SidebarComponent contenido={contenido} container="Servicios"></SidebarComponent>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default MedicamentosContainer;
