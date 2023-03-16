import React from "react";
import { PrimaryButton, SecundaryButton } from "./ButtonsComponent";
import Box from "@mui/material/Box";
import TextoSidebarComponent from "./TextoSidebarComponent";
const ValidateContent = (props) => {
  const { contenido, container, handleClickOpen } = props;
  if (container == "Inicio") {
    return (
      <Box
        component="form"
        noValidate
        sx={{
          display: "grid",
          gridTemplateColumns: { sm: "1fr" },
          gap: 2,
        }}
      >
        <PrimaryButton name="Conectar Apps" link="servicios"></PrimaryButton>
        <SecundaryButton name="Cargar formulamedica" link="medicamentos"></SecundaryButton>
        <TextoSidebarComponent
          title={contenido.title}
          content={contenido.content}
        ></TextoSidebarComponent>
        <SecundaryButton name="Ir a Tu Alarma App" onClick={ () => handleClickOpen()}></SecundaryButton>
      </Box>
    );
  }
  else if (container == "Servicios") {
    return (
      <Box
        component="form"
        noValidate
        sx={{
          display: "grid",
          gridTemplateColumns: { sm: "1fr" },
          gap: 2,
        }}
      >
        <SecundaryButton name="Volver" link="home"></SecundaryButton>
        <TextoSidebarComponent
          title={contenido.title}
          content={contenido.content}
        ></TextoSidebarComponent>
      </Box>
    );
  }
};
const SidebarComponent = (props) => {
  const { contenido, container, handleClickOpen } = props;
  return (
    <div>
      <ValidateContent
        contenido={contenido}
        container={container}
        handleClickOpen={handleClickOpen}
      ></ValidateContent>
    </div>
  );
};

export default SidebarComponent;
