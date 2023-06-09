import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import logo from "../images/Logo.svg";
import "./styles.css";
import HeaderComponent from "../Components/General/HeaderComponent";
import SidebarComponent from "../Components/General/SidebarComponent";
import TablaComponent from "../Components/General/TablaComponent";
import AlertaComponent from "../Components/General/AlertaComponent";

const InicioContainer = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    console.log("click")
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const Alert = {
    titulo: "Aplicación móvil",
    texto: ["Lo invitamos a que descargue la aplicación móvil desde las tiendas oficiales. ","Si ya cuenta con la aplicación puede iniciar sesión con su usuario y contraseña."],
    boton: "Ok"
  }
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
      "Esta aplicación conecta tu información de distintos servicios o aplicaciones para poder sugerirte alarmas de manera automática.",
      "Usamos Inteligencia Artificial para procesar los datos y hacerte la mejor sugerencia posible.",
      "De esta forma puedes estar tranquilo. No volverás a olvidar temas importantes.",
      "Bienvenido a Tu Alarma.",
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
            <h2>Historial de alarmas</h2>
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
          <Grid item md={8} className="TablaContainer">
            <TablaComponent
              headers={table.headers}
              body={table.body}
            ></TablaComponent>
          </Grid>
          <Grid item md={2}>
            <SidebarComponent contenido={contenido} container="Inicio" handleClickOpen={() => handleClickOpen()}></SidebarComponent>
          </Grid>
        </Grid>
      </Box>
      <AlertaComponent
        content={Alert}
        open={open}
        handleClose={() => handleClose()}
      ></AlertaComponent>
    </div>
  );
};

export default InicioContainer;
