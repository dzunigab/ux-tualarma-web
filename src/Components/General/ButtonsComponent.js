import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


const PrimaryStyle = styled(Button)(({ theme }) => ({
  color: "#FFF",
  height: 56,
  backgroundColor: "#4A55B4",
  '&:hover': {
    backgroundColor: "#273394",
  },
}));
const SecunsaryStyle = styled(Button)(({ theme }) => ({
  color: "#676000",
  border: "1px solid #676000",
  backgroundColor: "#FFF9E4",
  height: 56,
  '&:hover': {
    backgroundColor: "#f5eed3",
  },
}));


export function PrimaryButton(props) {
  const navigate = useNavigate();
  return (
      <PrimaryStyle variant="contained" onClick={() => navigate(`/${props.link}`)}>{props.name}</PrimaryStyle>
  );
}
export function SecundaryButton(props) {
  const navigate = useNavigate();
  return (
      <SecunsaryStyle variant="contained" onClick={() => navigate(`/${props.link}`)}>{props.name}</SecunsaryStyle>
  );
}