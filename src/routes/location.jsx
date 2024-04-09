import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useLocation } from '../../contexts/LocationDetailsContext.jsx';
import Header from '../../components/header.jsx'
import Footer from '../../components/footer.jsx'
import FoldingMenu from '../../components/folding-menu.jsx';
import Carrousel from '../../components/carrousel.jsx';
import ProfileAndRating from '../../components/profile-and-rating.jsx';
import ErrorPage from './error-page.jsx';

export default function Location(){
    const { id } = useParams();
    const { locationDetails, fetchDetails, loading, error } = useLocation();

    useEffect(() => {
        fetchDetails(id);
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <ErrorPage />;
    }

    if (!locationDetails) {
        return null; 
    }


    return (
        <div>
            <div className="location">
                <Header />
                <Carrousel images={locationDetails.pictures} />
                <div className='infos-container'>
                    <div className='title-and-tags'>
                        <h1>{locationDetails.title}</h1>
                        <span className='localisation'>{locationDetails.location}</span>
                        <div className="tags-list">
                            {locationDetails.tags.map((item) => (
                                <span key={`detail-${item}`}>{item}</span>
                            ))}
                        </div>
                    </div>
                    <ProfileAndRating name={locationDetails.host.name} profilePic={locationDetails.host.picture} rating={locationDetails.rating} />
                </div>
                <div className='location-folding'>
                    <FoldingMenu menuTitle={"Description"} content={locationDetails.description} />
                    <FoldingMenu menuTitle={"Équipements"} content={locationDetails.equipments} />
                </div>
                <Footer />
            </div>            
        </div>
    )

}