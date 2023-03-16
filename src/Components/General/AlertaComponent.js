import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { PrimaryButton } from "./ButtonsComponent";
import { styled } from '@mui/material/styles';

const Alerta = styled(Dialog)(({ theme }) => ({
    '.MuiDialogTitle-root': {
      color: "#000965",
      textAlign: "center"
    },
    '.MuiDialogContentText-root': {
        color: "#000965",
    },
    '.MuiPaper-root':{
        backgroundColor: "#FFF9E4",
        padding: "20px 10px",
        borderRadius: 26
    },
    '.MuiDialogActions-root': {
        justifyContent: "center"
    }
  }));

export default function AlertaComponent(props) {
  const { open, handleClose, content } = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div>
      <Alerta
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{content.titulo}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {content.texto.map(texto=> <p>{texto}</p>)}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
            <PrimaryButton name={content.boton} onClick={handleClose}></PrimaryButton>
        </DialogActions>
      </Alerta>
    </div>
  );
}
