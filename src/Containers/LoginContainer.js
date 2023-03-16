import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import LoginComponent from "../Components/Login/LoginComponent";
import logo from '../images/Logo.svg';
import "./styles.css"

const LoginContainer = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }} className="bgLoginContainer">
      <Grid container justifyContent="center" alignItems="flex-end">
        <Grid item md={6}>
          <img src={logo} alt="Logo" className="logoLogin"/>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" alignItems="flex-end">
        <Grid item md={6} mdOffset={3} className="bgLogin">
          <LoginComponent/>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginContainer;
