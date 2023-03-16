import React from "react";
import Grid from "@mui/material/Grid";
import Spotify from "../../images/servicios/Imagen.png";
import Google from "../../images/servicios/Imagen-3.png";
import Outlook from "../../images/servicios/Imagen-1.png";
import Strava from "../../images/servicios/Imagen-5.png";
import WP from "../../images/servicios/Imagen-2.png";
import Slack from "../../images/servicios/Imagen-4.png";
import AlertaComponent from "../General/AlertaComponent";
import { PrimaryButton } from "../General/ButtonsComponent";
const Servicio = (props) => {
  const { servicio } = props;

  return (
    <>
      <img src={servicio.image} alt={servicio.name} />
      <p>{servicio.name}</p>
    </>
  );
};
const ServiciosComponent = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    console.log("click")
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const servicios = [
    {
      image: Spotify,
      name: "Spotify",
    },
    {
      image: Google,
      name: "Google",
    },
    {
      image: Outlook,
      name: "Outlook",
    },
    {
      image: Strava,
      name: "Strava",
    },
    {
      image: WP,
      name: "Whatsapp",
    },
    {
      image: Slack,
      name: "Slack",
    },
  ];
  const Alert = {
    titulo: "Servicio conectado exitosamente",
    texto: ["En este momento estamos analizando tu información y en las siguientes 2 horas empezaremos a sugerir nuevas alarmas.","Recuerda que puedes seguir conectando servicios para lograr tener alarmas de manera automática. Si tienes dudas puedes comunicarte al 01 8000 123 123"],
    boton: "Ok"
  }
  return (
    <Grid container justifyContent="center" alignItems="flex-end">
      {servicios.map((servicio) => (
        <Grid key={servicio.name} item md={5} className="Servicio" onClick={handleClickOpen}>
          <Servicio servicio={servicio} ></Servicio>
        </Grid>
      ))}
      <AlertaComponent content={Alert} open={open} handleClose={() => handleClose()}></AlertaComponent>
    </Grid>
  );
};

export default ServiciosComponent;
