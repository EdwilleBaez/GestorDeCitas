import React, { useContext } from 'react';
import { GananciasContext } from './Context';
import BtnColapse from './btnColapse';

const Ganancias = () => {
  const { ganancias } = useContext(GananciasContext);

  return (
    <div className='tarjetas'>
      <div className="card" style={{ width: '30rem' }}>
        <div className="card-body">
          <div className='d-flex'>
            <h5 className="card-title mr-15">Mis Ganancias</h5>
            <BtnColapse />
          </div>
          <span>$ </span><span className='ganancias'>{ganancias}</span> 
          <br />
          <button className="btn btn-primary mt-3" disabled>Ver detalle</button>
        </div>
      </div>
    </div>
  );
};

export default Ganancias;

