import React, { useState, useContext } from 'react';
import { linksData, collectionsData, featuresData } from './data';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [links, setLinks] = useState(linksData);
  const [collections, setCollections] = useState(collectionsData);
  const [features, setFeatures] = useState(featuresData);

  const scrollToTop = () => window.scrollTo(0);

  return (
    <AppContext.Provider value={{ scrollToTop, links, collections, features }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
