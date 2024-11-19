import React from 'react';
import { useTranslation } from 'react-i18next';
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

const Gallery = () => {
    const { t } = useTranslation();

    const galleryData = [
        { src: pizza, title: t('Classic Pizza'), description: t('Stone-baked pizza with fresh toppings and mozzarella.') },
        { src: pizza2, title: t('Margherita Pizza'), description: t('Traditional Margherita with rich tomato and basil.') },
        { src: bruschetta, title: t('Bruschetta'), description: t('Toasted bread topped with fresh tomatoes and basil.') },
        { src: gnocchi, title: t('Gnocchi'), description: t('Pillowy potato gnocchi with savory sauce.') },
        { src: pasta, title: t('Spaghetti Carbonara'), description: t('Classic pasta with pancetta, eggs, and Parmesan.') },
        { src: pasta2, title: t('Penne Arrabbiata'), description: t('Spicy penne pasta in a tangy tomato sauce.') },
        { src: fish1, title: t('Grilled Sea Bass'), description: t('Sea bass grilled to perfection with herbs.') },
        { src: fish2, title: t('Salmon Fillet'), description: t('Succulent salmon with a crispy skin finish.') },
        { src: fish3, title: t('Seafood Platter'), description: t('A mix of fresh, grilled seafood delights.') },
        { src: cocktail1, title: t('Negroni'), description: t('Classic Italian cocktail with a bitter twist.') },
        { src: cocktail2, title: t('Aperol Spritz'), description: t('Refreshing Aperol Spritz with a hint of citrus.') },
        { src: cocktail3, title: t('Espresso Martini'), description: t('Smooth and bold, the perfect pick-me-up.') },
    ];

    return (
        <div className="gallery-page">
            <div className="gallery-header">
                <div className="header-text">
                    <h1>{t('Gallery')}</h1>
                    <p>{t('Experience culinary excellence with our exquisite dishes and irresistible cakes, each crafted with passion and attention to detail.')}</p>
                </div>
                <div className="header-image-container"> 
        <img src={galleryImage} alt="Gallery Header" className="header-image" />
        <div className="overlay">
            <h3>{t('Beef tataki with Asian sauce')}</h3>
            <p>{t('Heart of rump steak, Asian sauce, sesame with vinegared rice.')}</p>
        </div>
    </div>
            </div>
            
            <div className="gallery-grid">
                {galleryData.map((item, index) => (
                    <GalleryItem 
                        key={index} 
                        src={item.src} 
                        title={item.title} 
                        description={item.description}
                        lazy={index >= 3} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Gallery;