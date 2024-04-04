export default function ProfileAndRating({ name, profilePic, rating }){

    const Star =({ filled })=> {
        return (
          <span className={`star ${filled ? 'filled' : ''}`}>★</span>
        );
      }


      const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(<Star key={i} filled={i < rating} />);
        }

    return(
        <div className="profile-and-rating">
            <div>
                <span>{name}</span>
                <img src={profilePic}></img>
            </div>
            <div className="rating">{stars}</div>
        </div>
    )
}