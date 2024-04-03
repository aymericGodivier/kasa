export default function LocationCard({ id, title }){
    return(
        <div className="locationCard">
            <h2>{title}</h2>
            <a href={`/location/${id}`}>Lien</a>
        </div>
    )
}