import React from 'react';
import './Gallery.css';

const GalleryItem = ({ src, title, description }) => {
    return (
        <div className="gallery-item">
            <img src={src} alt={title} />
            <div className="overlay">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default GalleryItem;