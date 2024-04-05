import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Header from '../../components/header.jsx'
import Footer from '../../components/footer.jsx'
import FoldingMenu from '../../components/folding-menu.jsx';
import Carrousel from '../../components/carrousel.jsx';
import ProfileAndRating from '../../components/profile-and-rating.jsx';

export default function Location(){
    const { id } = useParams();
    const [locationDetails, setLocationDetails] = useState([]);

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
    }, []);

    const tagBuilder = (data) =>{
        return (
            <div className="tags-list">
                 {data.map((item) => (
                    <span key={item}>{item}</span>
                ))}
            </div>
        );
    }

    const buildLocation = (data) =>{
        return (
            <div className="location">
                <Header/>
                    {data.length !==0 && (<Carrousel images={data.pictures}/>)}
                    <div className='infos-container'>
                        <div className='title-and-tags'>
                            <h1>{data.title}</h1>
                            <span className='localisation'>{data.location}</span>
                            {data.length !==0 && tagBuilder(data.tags)}
                        </div>
                        {data.length !==0 && (<ProfileAndRating name={data.host.name} profilePic={data.host.picture} rating={data.rating}/>)}
                    </div>                               
                    <div className='location-folding'>
                        <FoldingMenu menuTitle={"Description"} content={data.description}/>
                        <FoldingMenu menuTitle={"Équipements"} content={data.equipments}/>
                    </div>                    
                <Footer/>
            </div>
        );
    }

    return(
        <div>
            {buildLocation(locationDetails)}
        </div>
    )
}