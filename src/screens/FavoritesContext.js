// FavoritesContext.js
import React, { createContext, useContext, useState } from 'react';

// Create the context
const FavoritesContext = createContext();

// Create the provider
const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

// Create a custom hook for using the context
const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

export { FavoritesProvider, useFavorites, FavoritesContext };
