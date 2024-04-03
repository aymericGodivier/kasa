import React, { useState } from 'react';

function Carrousel({ images }) {
    const [index, setIndex] = useState(0);

    const handleClick = (direction) => {
        const nextIndex = direction === 'next' ? (index + 1) % images.length : (index - 1 + images.length) % images.length;
        setIndex(nextIndex);
    };

    return (
        <div className="carousel">
            {images.length > 1 && (
                <>
                    <button onClick={() => handleClick('prev')}>&#8249;</button>
                    <button onClick={() => handleClick('next')}>&#8250;</button>
                </>
            )}
            <img src={images[index]} alt={`Slide ${index + 1}`} />
        </div>
    );
}

export default Carrousel;