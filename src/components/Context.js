import React, { createContext, useState } from 'react';

export const GananciasContext = createContext();

export const GananciasProvider = ({ children }) => {
  const [ganancias, setGanancias] = useState(0);

  const updateGanancias = (monto) => {
    setGanancias((prevGanancias) => prevGanancias + monto);
  };

  return (
    <GananciasContext.Provider value={{ ganancias, updateGanancias }}>
      {children}
    </GananciasContext.Provider>
  );
};
