import { createContext, useContext, useState, useEffect } from 'react';

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [locationDetails, setLocationDetails] = useState(null);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProperties = async () => {
    try {
        const response = await fetch('http://localhost:8080/api/properties');
        const data = await response.json();
        setProperties(data);
    } catch (error) {
        console.error(error);
    }
  };

  const fetchDetails = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`http://localhost:8080/api/properties/${id}`);
      if (!response.ok) {
        setError("Network error")
      }
      const data = await response.json();
      setLocationDetails(data);
    } catch (error) {
      setError(error.toString());
    } finally {
      // le finally peut aider pour switcher le loader
      setLoading(false);
    }
  };
  return (
      <LocationContext.Provider value={{ fetchDetails, fetchProperties, properties, locationDetails,loading, error }}>
        {children}
      </LocationContext.Provider>
  );
};

export const useLocation = () => {
  const context = useContext(LocationContext);
  if (!context) {
    //pour renvoyer une erreur si le contexte n'est pas branché dans le main.jsx
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
};
