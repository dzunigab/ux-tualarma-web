import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import RegistroComponent from "../Components/Registro/RegistroComponent";
import logo from '../images/Logo.svg';
import "./styles.css"

const RegistroContainer = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }} className="bgLoginContainer">
      <Grid container justifyContent="center" alignItems="flex-end">
        <Grid item md={6}>
          <img src={logo} alt="Logo" className="logoLogin"/>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" alignItems="flex-end">
        <Grid item md={6} mdOffset={3} className="bgRegistro">
          <RegistroComponent/>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RegistroContainer;
