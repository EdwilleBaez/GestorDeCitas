import React, { createContext, useState } from 'react';

const GananciasContext = createContext();

const GananciasProvider = ({ children }) => {
  const [ganancias, setGanancias] = useState(0);

  const updateGanancias = (nuevaGanancia) => {
    setGanancias(nuevaGanancia);
  };

  return (
    <GananciasContext.Provider value={{ ganancias, updateGanancias }}>
      {children}
    </GananciasContext.Provider>
  );
};

export { GananciasContext, GananciasProvider };
