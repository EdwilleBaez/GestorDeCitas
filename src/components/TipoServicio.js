import React, { useState } from 'react';
import '../sass/css/TipoServicio.css';



const TipoServicio = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="tipo-servicio-container">
      <label className={`tipo-servicio-option ${selectedOption === 'option1' ? 'selected' : ''}`}>
        <input
          type="radio"
          value="option1"
          checked={selectedOption === 'option1'}
          onChange={handleOptionChange}
        />
        <span className="checkmark">Peluquería</span>
      </label>
      <label className={`tipo-servicio-option ${selectedOption === 'option2' ? 'selected' : ''}`}>
        <input
          type="radio"
          value="option2"
          checked={selectedOption === 'option2'}
          onChange={handleOptionChange}
        />
        <span className="checkmark">Manucura/Pedicura</span>
      </label>
    </div>
  );
};

export default TipoServicio;
