import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import logo from "../../images/Logo.svg";
import inicio from "../../images/inicio.png";
import perfil from "../../images/perfil.png";
import { Link } from "react-router-dom";
const HeaderComponent = () => {
  return (
    <Box component="header" sx={{ flexGrow: 1 }} className="Header">
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid item md={1}></Grid>
        <Grid item md={3} className="logoInicio">
          <Link to="/home" relative="path">
          <img src={inicio} alt="Logo" />
          </Link>
          <p>
            <small>Inicio</small>
          </p>
        </Grid>
        <Grid item md={4}>
          <img src={logo} alt="Logo" />
        </Grid>
        <Grid item md={3} className="logoPerfil">
          <div>
            <p>Nombre del Usuario</p>
            <img src={perfil} alt="Logo" />
          </div>
        </Grid>
        <Grid item md={1}></Grid>
      </Grid>
    </Box>
  );
};

export default HeaderComponent;
