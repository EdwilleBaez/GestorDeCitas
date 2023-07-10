import React, { useState, useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import AgregarServicio from './AgregarServicio';
import { GananciasContext } from './Context';

const ProcesoFinalizado = () => {
  const [tarjetas, setTarjetas] = useState([{ monto: '', duracion: '' }]);
  const [notas, setNotas] = useState('');
  const { updateGanancias } = useContext(GananciasContext);
  const [citaTerminada, setCitaTerminada] = useState(false);


  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedTarjetas = [...tarjetas];
    updatedTarjetas[index] = { ...updatedTarjetas[index], [name]: value };
    setTarjetas(updatedTarjetas);
  };

  const handleAgregarTarjeta = () => {
    setTarjetas([...tarjetas, { monto: '', duracion: '' }]);
  };

  const handleEliminarTarjeta = (index) => {
    const updatedTarjetas = [...tarjetas];
    updatedTarjetas.splice(index, 1);
    setTarjetas(updatedTarjetas);
  };

  const handleNotasChange = (e) => {
    setNotas(e.target.value);
  };

  const handleTerminarCita = () => {
    // Aquí puedes enviar la información a través de una solicitud HTTP o realizar cualquier otra acción
    console.log('Tarjetas:', tarjetas);
    console.log('Notas:', notas);
    // Restablecer los valores de los inputs y notas después de terminar la cita
    setTarjetas([{ monto: '', duracion: '' }]);
    setNotas('');

    // Calcula el total de ganancias sumando los montos de todas las tarjetas
    const totalGanancias = tarjetas.reduce((total, tarjeta) => total + Number(tarjeta.monto), 0);
    updateGanancias(totalGanancias);

    setCitaTerminada(true);
  };

  if (citaTerminada) {
    return <Navigate to="/Inicio" />;
  }

  return (
    <div className="tarjetas">
      <h5>
        <Link to="/">
          <i className="bi bi-arrow-left-short"></i>Proceso finalizado
        </Link>
      </h5>
      <span className="card-text">Melissa Encarnación</span>
      <span className="card-title pb-15">Martes 9 de agosto - 11:00 P.M.</span>
      {tarjetas.map((tarjeta, index) => (
        <div className="card mb-3" style={{ width: '30rem' }} key={index}>
          <div className="card-body">
            <h5 className="card-title pb-15">Corte de pelo - Largo</h5>
            <div className="mb-3">
              <label htmlFor={`monto${index}`} className="form-label">
                Monto
              </label>
              <input
                type="text"
                className="form-control"
                id={`monto${index}`}
                name="monto"
                value={tarjeta.monto}
                onChange={(e) => handleInputChange(e, index)}
                placeholder="$100.00"
              />
            </div>
            <div className="mb-3">
              <label htmlFor={`duracion${index}`} className="form-label">
                Duración
              </label>
              <input
                type="text"
                className="form-control"
                id={`duracion${index}`}
                name="duracion"
                value={tarjeta.duracion}
                onChange={(e) => handleInputChange(e, index)}
                placeholder="1h 30m"
                disabled
              />
            </div>
            {index > 0 && (
              <button className="btn btn-danger" onClick={() => handleEliminarTarjeta(index)}>
                Eliminar tarjeta
              </button>
            )}
          </div>
        </div>
      ))}
      <button className="btn btn-primary mb-3" style={{ width: '30rem' }} onClick={handleAgregarTarjeta}>
        Agregar otra tarjeta
      </button>
      <div>
        <div className="form-floating mb-3" style={{ width: '30rem' }}>
          <label htmlFor="notas" className="form-label">
            Notas o comentarios
          </label>
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="notas"
            value={notas}
            onChange={handleNotasChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mb-3" style={{ width: '30rem' }} onClick={handleTerminarCita}>
          Terminar cita
        </button>
        <AgregarServicio />
      </div>
    </div>
  );
};

export default ProcesoFinalizado;
