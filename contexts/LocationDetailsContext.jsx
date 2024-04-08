import React, { createContext, useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  

  const [locationDetails, setLocationDetails] = useState(null);

  const fetchDetails = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/properties/${id}`);
      const data = await response.json();
      console.log(data)
      return data;

    } catch (error) {
      console.error(error);
    }
  };

useEffect(() => {
    

});

  return (
    <LocationContext.Provider value={{fetchDetails,locationDetails}}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  const context = useContext(LocationContext)
  return context
};
