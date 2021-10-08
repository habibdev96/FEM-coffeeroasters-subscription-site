import React, { useState, useContext } from 'react';
import { linksData, collectionsData } from './data';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [links, setLinks] = useState(linksData);
  const [collections, setCollections] = useState(collectionsData);

  const scrollToTop = () => window.scrollTo(0);

  return (
    <AppContext.Provider value={{ scrollToTop, links, collections }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
