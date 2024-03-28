function BackgroundImage({imgSrc,imgAlt,title}){
    return(
        <div className="backgroundContainer">
            <img src={imgSrc} alt={imgAlt}></img>
            {title ? <h1>{title}</h1> : null}
        </div>
    )
}

export default BackgroundImage