import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './components/Inicio';
import Servicios from './components/Servicios';
import Horario from './components/Horario';
import Historial from './components/Historial';
import ProximasCitas from './components/ProximasCitas';
import ProcesoFinalizado from './components/ProcesoFinalizado';
import { GananciasProvider } from './components/Context';


const App = () => {
  return (
    <GananciasProvider>
    <Router>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/Servicios" element={<Servicios />} />
        <Route path="/Horario" element={<Horario />} />
        <Route path="/Historial" element={<Historial />} /> 
        <Route exact path="/" element={<ProximasCitas />} />
        <Route path="/ProcesoFinalizado" element={<ProcesoFinalizado />} /> 
      </Routes>
    </div>
    </Router>
    </GananciasProvider>
 
  );
};

export default App;

