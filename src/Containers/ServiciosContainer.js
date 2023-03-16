import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import logo from "../images/Logo.svg";
import "./styles.css";
import HeaderComponent from "../Components/General/HeaderComponent";
import SidebarComponent from "../Components/General/SidebarComponent";
import TablaComponent from "../Components/General/TablaComponent";
import ServiciosComponent from "../Components/Servicios/ServiciosComponent";

const ServiciosContainer = (props) => {
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
            <h2>Conectar Servicios</h2>
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
          <Grid item md={8} className="ServiciosContainer">
            <div>
              <h3>Seleccione los servicios</h3>
              <ServiciosComponent></ServiciosComponent>
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

export default ServiciosContainer;
