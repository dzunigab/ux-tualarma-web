import React from "react";
import Box from "@mui/material/Box";
import InputComponent from "../General/InputComponent";
import { PrimaryButton } from "../General/ButtonsComponent";
import { Link } from "react-router-dom";
import "./styles.css";


const LoginComponent = () => {

  return (
    <div>
      <h2>Bienvenido</h2>
      <p>La aplicación de alarmas que se adapta a tus necesidades</p>
      <Box
        component="form"
        noValidate
        sx={{
          display: "grid",
          gridTemplateColumns: { sm: "1fr" },
          gap: 4,
        }}
        className="formLogin"
      >
        <InputComponent label="Usuario" />
        <InputComponent label="Constraseña" />
        <PrimaryButton name="Iniciar Sesión" link="home"/>
        <Link to="/registro" relative="path">
        Registrarse
        </Link>
      </Box>
    </div>
  );
};

export default LoginComponent;
