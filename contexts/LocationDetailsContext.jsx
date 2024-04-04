import React, { createContext, useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const { id } = useParams();
  const [locationDetails, setLocationDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async (url) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setLocationDetails(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDetails(`http://localhost:8080/api/properties/${id}`);
  }, [id]);

  return (
    <LocationContext.Provider value={{ locationDetails, setLocationDetails }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => useContext(LocationContext);