import React from 'react';
import { useTranslation } from 'react-i18next';
import './AboutUs.css';
import abthero from '../assets/abthero.jpeg'; 
import abt2 from '../assets/abt2.jpeg'; 
import abt3 from '../assets/abt3.jpeg'; 
import abtcook from '../assets/abtcook.jpeg';
import abt4 from '../assets/abt4.jpeg';
import abt5 from '../assets/abt5.jpeg';
import abt6 from '../assets/abt6.jpeg';
import abtcta from '../assets/abtcta.jpg';
import { FaHeart, FaStar, FaCoffee, FaSmile } from 'react-icons/fa';

function AboutUs() {
  const { t } = useTranslation();
  return (
<div className="about-us">
    <section className="about-hero">
        <img src={abthero} alt="Hero" className="hero-image" />
        <div className="hero-text">
            <h2>{t('Behind the Sauce')}</h2>
            <h1>{t('Gran Caffe')}</h1>
            <p>{t('Restaurant & Lounge Bar Since 1945')}</p>
        </div>
    </section>

    <section className="about-content">
        <div className="content-section">
            <img src={abt2} alt="Italian Coffee and Desserts" className="content-image" />
            <div className="content-text">
                <h3>{t('WARM AND WELCOMING')}</h3>
                <p>{t("Welcome to Gran Caffè, a cherished gem for locals and travelers alike. Step into our world and experience the essence of Italy with every sip of our Italian coffee and each bite of our homemade desserts, paired with delightful breakfast specialties.")}</p>
            </div>
        </div>

        <div className="content-section reverse">
            <div className="content-text">
                <h3>{t('DAYTIME DELIGHTS')}</h3>
                <p>{t("As the day unfolds, our kitchen fills with the aroma of freshly prepared dishes crafted by our talented chef. Enjoy every meal, infused with Italian flavors and passion.")}</p>
            </div>
            <img src={abt6} alt="Chef preparing meals" className="content-image" />
        </div>

        <div className="content-section">
            <img src={abt3} alt="Evening Atmosphere" className="content-image" />
            <div className="content-text">
                <h3>{t('EVENINGS AT GRAN CAFFE')}</h3>
                <p>{t("As twilight descends, the atmosphere transforms into a lively space filled with energy, laughter, and the sounds of glasses clinking. Here, locals and travelers come together, creating connections and unforgettable memories.")}</p>
            </div>
        </div>
    </section>

      {/* Amenities Section */}
      <section className="about-amenities">
        <div className="amenity-item">
          <FaHeart className="amenity-icon" />
          <p>{t("Your landmark in the city")}</p>
        </div>
        <div className="amenity-item">
          <FaStar className="amenity-icon" />
          <p>{t("Our chef creates an exquisite range of delicious dishes and desserts")}</p>
        </div>
        <div className="amenity-item">
          <FaCoffee className="amenity-icon" />
          <p>{t("Aromatic coffee and chef's dishes")}</p>
        </div>
        <div className="amenity-item">
          <FaSmile className="amenity-icon" />
          <p>{t("Unique Italian apero style and atmosphere")}</p>
        </div>
      </section>

      {/* Cooking Section with Left-Aligned Text */}
      <section className="cooking-section">
        <div className="cooking-content">
          <div className="cooking-text">
            <h2>{t('WE COOK FOR YOU EVERY DAY')}</h2>
            <p>{t('Experience the joy of culinary surprises at our restaurant, where we serve daily dishes inspired by recipes from around the world. Come and discover the delightful creations we have prepared for you today!')}</p>
            <button onClick={() => window.location.href='/menu'}>{t('View Our Menu')}</button>
          </div>
          <img src={abtcook} alt="Daily Specials" className="cooking-image" />
        </div>
      </section>

      <section className="atmosphere-section">
    <div className="atmosphere-text">
        <h2>{t('WE FOCUS ON NEW TASTE SENSATIONS AND A PLEASANT ATMOSPHERE')}</h2>
        <p>{t("We guarantee delicious cocktails, beers, and a unique atmosphere.")}</p>
        <p>{t("In our restaurant, you can unwind after a hard day with our fantastic cocktails and beers. In addition to the original and unique cuisine, friendly staff and a wonderful atmosphere await you.")}</p>
    </div>
    
    <div className="atmosphere-images">
        <img src={abt4} alt="Cocktails" className="atmosphere-image" />
        <img src={abt5} alt="Atmosphere" className="atmosphere-image" />
    </div>
</section>

<section
        className="about-call-to-action"
        style={{
          backgroundImage: `url(${abtcta})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          <div className="cta-content">
    <h2>{t('WE’RE PROUD TO BE A CHERISHED')}<br />{t(' DESTINATION FOR MONACO GRAND')}<br />{t('PRIX ENTHUSIASTS')}</h2>
    <p>{t("Offering a quintessential Monaco experience that captures")}<br />{t("the heart and soul of this vibrant principality.")}<br />{t(" Join us at Gran Caffè and embark on a journey of taste, tradition,")}<br />{t(" and togetherness. We can't wait to welcome you into our world.")}</p>
    <button>{t('Book a Table')}</button>
        </div>
</section>
    </div>
  );
}

export default AboutUs;
