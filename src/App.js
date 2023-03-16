import logo from "./logo.svg";
import "./App.css";
import LoginContainer from "./Containers/LoginContainer";
import RegistroContainer from "./Containers/RegistroContainer";
import InicioContainer from "./Containers/InicioContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginContainer />} />
          <Route path="/registro" element={<RegistroContainer />} />
          <Route path="/home" element={<InicioContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
