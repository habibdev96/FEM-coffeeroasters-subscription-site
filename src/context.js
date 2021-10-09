import React, { useState, useContext } from 'react';
import {
  linksData,
  collectionsData,
  featuresData,
  stepsData,
  socialsData,
  sectionHerosData,
  headquartersData,
} from './data';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [links, setLinks] = useState(linksData);
  const [collections, setCollections] = useState(collectionsData);
  const [features, setFeatures] = useState(featuresData);
  const [steps, setSteps] = useState(stepsData);
  const [socials, setSocials] = useState(socialsData);
  const [sectionHeros, setSectionHeros] = useState(sectionHerosData);
  const [headquarters, setHeadquarters] = useState(headquartersData);

  const scrollToTop = () => window.scrollTo(0);

  return (
    <AppContext.Provider
      value={{
        scrollToTop,
        links,
        collections,
        features,
        steps,
        socials,
        sectionHeros,
        headquarters,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
