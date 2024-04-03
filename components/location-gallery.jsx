import React, { useState, useEffect } from 'react';
import LocationCard from './location-card';

export default function LocationGallery(){
    const [properties, setProperties] = useState([]);

    //requete qui récupère la liste des propriétés
    useEffect(() => {
        const fetchProperties = async (url) => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setProperties(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProperties('http://localhost:8080/api/properties');
    }, []);
    
    //création de la gallery
    const buildGallery = (data) =>{
        return (
            <div className="gallery">
                 {data.map((item) => (
                    <LocationCard key={item.id} title={item.title} id={item.id}/>
                ))}
            </div>
        );
    }

    return(
        <div>
            {buildGallery(properties)}
        </div>
    )
}