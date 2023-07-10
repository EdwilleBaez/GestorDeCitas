import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../sass/css/navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('');

  // Actualiza el estado del elemento activo cuando cambia la ubicación
  React.useEffect(() => {
    setActiveSection(location.pathname);
  }, [location]);

  return (
    <nav className="navbar navbar1 navbar-expand-md navbar-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/Logo">Logo</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className={`nav-link ${activeSection === '/Inicio' ? 'active' : ''}`} to="/Inicio">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${activeSection === '/Servicios' ? 'active' : ''}`} to="/Servicios">Servicios</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${activeSection === '/Horario' ? 'active' : ''}`} to="/Horario">Horario</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${activeSection === '/Historial' ? 'active' : ''}`} to="/Historial">Historial</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
