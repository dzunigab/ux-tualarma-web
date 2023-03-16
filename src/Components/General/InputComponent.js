import * as React from 'react';
import {styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#000965',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#4A55B4',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#4A55B4',
    },
    '&:hover fieldset': {
      borderColor: '#000965',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#000965',
    },
  },
});
const InputComponent = props => {
    return <CssTextField label={props.label}/>
}
export default InputComponent
