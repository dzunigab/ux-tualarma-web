import React from "react";
import Box from "@mui/material/Box";
import InputComponent from "../General/InputComponent";
import { PrimaryButton } from "../General/ButtonsComponent";
import { Link } from "react-router-dom";
import "./styles.css"
const RegistroComponent = () => {
  return (
    <div>
        <h2>Registro</h2>
      <Box
        component="form"
        noValidate
        sx={{
          display: "grid",
          gridTemplateColumns: { sm: "1fr" },
          gap: 2,
        }}
        className="formLogin"
      >
        <InputComponent label="Nombre" />
        <InputComponent label="Teléfono" />
        <InputComponent label="Email" />
        <InputComponent label="Teléfono" />
      </Box>
      <Box
        component="form"
        noValidate
        sx={{
          display: "grid",
          gridTemplateColumns: { sm: "1fr 1fr" },
          gap: 2,
          marginTop: 2
        }}
        className=""
      >
        <InputComponent label="Contraseña" />
        <InputComponent label="Repita la contraseña" />
      </Box>
      <Box
        component="form"
        noValidate
        sx={{
          display: "grid",
          gridTemplateColumns: { sm: "1fr" },
          gap: 2,
          marginTop: 2
        }}
        className=""
      >
        <PrimaryButton name="Registrarse" link="home"/>
        <Link to="/" relative="path" className="colorLink">
        Volver
        </Link>
      </Box>
    </div>
  );
};

export default RegistroComponent;
