import React, { useEffect } from 'react';
import LocationCard from './location-card';
import { useLocation } from '../contexts/LocationDetailsContext';

export default function LocationGallery(){
    const { properties, fetchProperties } = useLocation();

    useEffect(() => {
        fetchProperties();
    },[]);

    return(
        <div className="gallery">
                {properties.map((item) => (
                    <LocationCard key={item.id} title={item.title} id={item.id}/>
                ))}
        </div>
    )
}