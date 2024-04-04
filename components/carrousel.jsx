import React, { useState } from 'react';

function Carrousel({ images }) {
    const [index, setIndex] = useState(0);

    const handleClick = (direction) => {
        const nextIndex = direction === 'next' ? (index + 1) % images.length : (index - 1 + images.length) % images.length;
        setIndex(nextIndex);
    };

    return (
        <div className="carrousel">
            {images.length > 1 && (
                <>
                    <img src='../../src/assets/Chevron.png' id='buttonPrev' onClick={() => handleClick('prev')}></img>
                    <img src='../../src/assets/Chevron.png' id='buttonNext' onClick={() => handleClick('next')}></img>
                </>
            )}
            <div className='carrousel-img'>
                <img src={images[index]} alt={`Slide ${index + 1}`} />
            </div>            
            {images.length > 1 && (
                <span className="slide-counter">{index + 1}/{images.length}</span>
            )}
        </div>
    );
}

export default Carrousel;