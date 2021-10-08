import React, { useState, useContext } from 'react';
import { linksData, collectionsData, featuresData, stepsData } from './data';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [links, setLinks] = useState(linksData);
  const [collections, setCollections] = useState(collectionsData);
  const [features, setFeatures] = useState(featuresData);
  const [steps, setSteps] = useState(stepsData);

  const scrollToTop = () => window.scrollTo(0);

  return (
    <AppContext.Provider
      value={{ scrollToTop, links, collections, features, steps }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
