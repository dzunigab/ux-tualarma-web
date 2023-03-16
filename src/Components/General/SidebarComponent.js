import React from "react";
import { PrimaryButton, SecundaryButton } from "./ButtonsComponent";
import Box from "@mui/material/Box";
import TextoSidebarComponent from "./TextoSidebarComponent";
const SidebarComponent = () => {
    const contenido={
        title:"¿Cómo funciona?",
        content: ["Esta aplicación conecta tu información de distintos servicios o aplicaciones para poder sugerirte alarmas de manera automática.","Usamos Inteligencia Artificial para procesar los datos y hacerte la mejor sugerencia posible.","De esta forma puedes estar tranquilo. No volverás a olvidar temas importantes.", "Bienvenido a Tu Alarma."]

    }
  return (
    <div>
      <Box
        component="form"
        noValidate
        sx={{
          display: "grid",
          gridTemplateColumns: { sm: "1fr" },
          gap: 2,
        }}
      >
        <PrimaryButton name="Conectar Apps"></PrimaryButton>
        <SecundaryButton name="Cargar formulamedica"></SecundaryButton>
        <TextoSidebarComponent title={contenido.title} content={contenido.content}></TextoSidebarComponent>
        <SecundaryButton name="Ir a Tu Alarma App"></SecundaryButton>
      </Box>
    </div>
  );
};

export default SidebarComponent;
