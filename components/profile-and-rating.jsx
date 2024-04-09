export default function ProfileAndRating({ name, profilePic, rating }){

    const [firstName, lastName] = name.split(' ');

    const Star = ({ filled }) => {
        // Déterminez le chemin de l'image en fonction du paramètre filled
        const starImage = filled ? '../../src/assets/star-filled.png' : '../../src/assets/star-empty.png';

        return (
            <img className="star" src={starImage} alt="Star" />
        );
    }

    const stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(<Star key={i} filled={i < rating} />);
    }

    return(
        <div className="profile-and-rating">
            <div className="profile">
                <div className="host-name">
                    <span>{firstName}</span>
                    <br />
                    <span>{lastName}</span>
                </div>
                <div className="host-img">
                    <img src={profilePic}></img>
                </div> 
            </div>                         
            <div className="rating">{stars}</div>
        </div>
    )
}