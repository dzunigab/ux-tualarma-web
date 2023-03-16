import logo from "./logo.svg";
import "./App.css";
import LoginContainer from "./Containers/LoginContainer";
import RegistroContainer from "./Containers/RegistroContainer";
import InicioContainer from "./Containers/InicioContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ServiciosContainer from "./Containers/ServiciosContainer";
import MedicamentosContainer from "./Containers/MedicamentosContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginContainer />} />
          <Route path="/registro" element={<RegistroContainer />} />
          <Route path="/home" element={<InicioContainer />} />
          <Route path="/servicios" element={<ServiciosContainer />} />
          <Route path="/medicamentos" element={<MedicamentosContainer />} />
          <Route path="/*" element={<LoginContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
