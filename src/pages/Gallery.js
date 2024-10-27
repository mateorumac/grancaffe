// Gallery.js
import React from 'react';
import GalleryItem from './GalleryItem';
import './Gallery.css';
import pizza from '../assets/gallery/pizza.jpeg';
import pizza2 from '../assets/gallery/pizza2.jpeg';
import bruschetta from '../assets/gallery/bruschetta.jpeg';
import gnocchi from '../assets/gallery/gnocchi.jpeg';
import pasta from '../assets/gallery/pasta.jpeg';
import pasta2 from '../assets/gallery/pasta2.jpeg';
import cocktail1 from '../assets/gallery/cocktail1.jpeg';
import cocktail2 from '../assets/gallery/cocktail2.jpeg';
import cocktail3 from '../assets/gallery/cocktail3.jpeg';
import fish1 from '../assets/gallery/fish1.jpeg';
import fish2 from '../assets/gallery/fish2.jpeg';
import fish3 from '../assets/gallery/fish3.jpeg';
import galleryImage from '../assets/gallery/galleryImage.jpeg';

const galleryData = [
    { src: pizza, title: 'Classic Pizza', description: 'Stone-baked pizza with fresh toppings and mozzarella.' },
    { src: pizza2, title: 'Margherita Pizza', description: 'Traditional Margherita with rich tomato and basil.' },
    { src: bruschetta, title: 'Bruschetta', description: 'Toasted bread topped with fresh tomatoes and basil.' },
    { src: gnocchi, title: 'Gnocchi', description: 'Pillowy potato gnocchi with savory sauce.' },
    { src: pasta, title: 'Spaghetti Carbonara', description: 'Classic pasta with pancetta, eggs, and Parmesan.' },
    { src: pasta2, title: 'Penne Arrabbiata', description: 'Spicy penne pasta in a tangy tomato sauce.' },
    { src: fish1, title: 'Grilled Sea Bass', description: 'Sea bass grilled to perfection with herbs.' },
    { src: fish2, title: 'Salmon Fillet', description: 'Succulent salmon with a crispy skin finish.' },
    { src: fish3, title: 'Seafood Platter', description: 'A mix of fresh, grilled seafood delights.' },
    { src: cocktail1, title: 'Negroni', description: 'Classic Italian cocktail with a bitter twist.' },
    { src: cocktail2, title: 'Aperol Spritz', description: 'Refreshing Aperol Spritz with a hint of citrus.' },
    { src: cocktail3, title: 'Espresso Martini', description: 'Smooth and bold, the perfect pick-me-up.' },
];

const Gallery = () => {
    return (
        <div className="gallery-page">
            <div className="gallery-header">
                <div className="header-text">
                    <h1>Gallery</h1>
                    <p>Experience culinary excellence with our exquisite dishes and irresistible cakes, each crafted with passion and attention to detail.</p>
                </div>
                <img src={galleryImage} alt="Gallery Header" className="header-image" />
            </div>
            
            <div className="gallery-grid">
                {galleryData.map((item, index) => (
                    <GalleryItem 
                        key={index} 
                        src={item.src} 
                        title={item.title} 
                        description={item.description} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Gallery;

