import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Header from '../../components/header.jsx'
import Footer from '../../components/footer.jsx'
import FoldingMenu from '../../components/folding-menu.jsx';
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

    const buildLocation = (data) =>{
        console.log(data);
        return (
            <div className="location">
                <Header/>                
                    <h1>
                        {data.title}
                    </h1>
                    <FoldingMenu menuTitle={"Description"} content={data.description}/>
                    <FoldingMenu menuTitle={"Équipements"} content={data.equipments}/>
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