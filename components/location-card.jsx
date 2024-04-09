export default function LocationCard({ id, title }){
    return(
        <a className="locationCard-link" href={`/location/${id}`}>
        <div className="locationCard">
            <h2>{title}</h2>            
        </div>
        </a>
    )
}