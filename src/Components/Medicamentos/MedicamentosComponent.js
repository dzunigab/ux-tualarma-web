import React from "react";
import Grid from "@mui/material/Grid";
import Drag from "../../images/drag.png";
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
const MedicamentosComponent = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    console.log("click")
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const Alert = {
    titulo: "Se ha agregado una nueva fórmula médica",
    texto: ["Ahora estamos procesando la información de la fórmula médica en breve recibirás alertas en tu app móvil “Tu Alarma” con los recordatorios de los medicamentos.","Recuerda que puedes editar la información desde la App Móvil"],
    boton: "Ok"
  }
  return (
    <>
     <Grid container justifyContent="center" alignItems="center">
        <Grid  item md={10} >
          <img src={Drag} alt="drag"/>
          
        </Grid>
      <AlertaComponent content={Alert} open={open} handleClose={() => handleClose()}></AlertaComponent>
    </Grid>
    <Grid container justifyContent="center" alignItems="center" className="ButtonProcesar">
        <Grid  item md={10} >
          <PrimaryButton name="Procesar" onClick={handleClickOpen}></PrimaryButton>
        </Grid>
      <AlertaComponent content={Alert} open={open} handleClose={() => handleClose()}></AlertaComponent>
    </Grid>
    </>
  );
};

export default MedicamentosComponent;
