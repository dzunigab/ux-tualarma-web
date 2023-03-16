import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import LoginComponent from "../Components/Login/LoginComponent";
import logo from '../images/Logo.svg';
import "./styles.css"
import AlertaComponent from "../Components/General/AlertaComponent";

const LoginContainer = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    console.log("click")
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const Alert = {
    titulo: "No encontramos una cuenta asociada",
    texto: ["Tu Alarma es una aplicación que permite gestionar alarmas, recordatorios de medicamentos, recordatorios de actividad física, entre otros.","Mediante el uso de Machine Learning podemos hacer una aplicación especializada en usted."],
    boton: "Ok"
  }
  return (
    <Box sx={{ flexGrow: 1 }} className="bgLoginContainer">
      <Grid container justifyContent="center" alignItems="flex-end">
        <Grid item md={6}>
          <img src={logo} alt="Logo" className="logoLogin"/>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" alignItems="flex-end">
        <Grid item md={6} mdOffset={3} className="bgLogin">
          <LoginComponent handleClickOpen={()=> handleClickOpen()}/>
        </Grid>
      </Grid>
      <AlertaComponent content={Alert} open={open} handleClose={()=>handleClose()}></AlertaComponent>
    </Box>
  );
};

export default LoginContainer;
