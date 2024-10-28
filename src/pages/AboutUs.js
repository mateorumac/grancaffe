import React, { useEffect, useRef } from 'react';
import { useTranslation, Trans } from 'react-i18next';
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
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            entry.target.classList.remove('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-us">
      <section className="about-hero" ref={(el) => (sectionsRef.current[0] = el)}>
        <img src={abthero} alt="Hero" className="hero-image" />
        <div className="hero-text">
          <h2><Trans>Behind the Sauce</Trans></h2>
          <h1><Trans>Gran Caffe</Trans></h1>
          <p><Trans>Restaurant & Lounge Bar Since 1945</Trans></p>
        </div>
      </section>

      <section className="about-content">
        <div className="content-section" ref={(el) => (sectionsRef.current[1] = el)}>
          <img src={abt2} alt="Italian Coffee and Desserts" className="content-image" />
          <div className="content-text">
            <h3><Trans>WARM AND WELCOMING</Trans></h3>
            <p><Trans>Welcome to Gran Caffè, a cherished gem for locals and travelers alike. Step into our world and experience the essence of Italy with every sip of our Italian coffee and each bite of our homemade desserts, paired with delightful breakfast specialties.</Trans></p>
          </div>
        </div>

        <div className="content-section reverse" ref={(el) => (sectionsRef.current[2] = el)}>
          <div className="content-text">
            <h3><Trans>DAYTIME DELIGHTS</Trans></h3>
            <p><Trans>As the day unfolds, our kitchen fills with the aroma of freshly prepared dishes crafted by our talented chef. Enjoy every meal, infused with Italian flavors and passion.</Trans></p>
          </div>
          <img src={abt6} alt="Chef preparing meals" className="content-image" />
        </div>

        <div className="content-section" ref={(el) => (sectionsRef.current[3] = el)}>
          <img src={abt3} alt="Evening Atmosphere" className="content-image" />
          <div className="content-text">
            <h3><Trans>EVENINGS AT GRAN CAFFE</Trans></h3>
            <p><Trans>As twilight descends, the atmosphere transforms into a lively space filled with energy, laughter, and the sounds of glasses clinking. Here, locals and travelers come together, creating connections and unforgettable memories.</Trans></p>
          </div>
        </div>
      </section>

      <section className="about-amenities" ref={(el) => (sectionsRef.current[4] = el)}>
        <div className="amenity-item">
          <FaHeart className="amenity-icon" />
          <p><Trans>Your landmark in the city</Trans></p>
        </div>
        <div className="amenity-item">
          <FaStar className="amenity-icon" />
          <p><Trans>Our chef creates an exquisite range of delicious dishes and desserts</Trans></p>
        </div>
        <div className="amenity-item">
          <FaCoffee className="amenity-icon" />
          <p><Trans>Aromatic coffee and chef's dishes</Trans></p>
        </div>
        <div className="amenity-item">
          <FaSmile className="amenity-icon" />
          <p><Trans>Unique Italian apero style and atmosphere</Trans></p>
        </div>
      </section>

      <section className="cooking-section" ref={(el) => (sectionsRef.current[5] = el)}>
        <div className="cooking-content">
          <div className="cooking-text">
            <h2><Trans>WE COOK FOR YOU EVERY DAY</Trans></h2>
            <p><Trans>Experience the joy of culinary surprises at our restaurant, where we serve daily dishes inspired by recipes from around the world. Come and discover the delightful creations we have prepared for you today!</Trans></p>
            <button onClick={() => window.location.href='/menu'}><Trans>View Our Menu</Trans></button>
          </div>
          <img src={abtcook} alt="Daily Specials" className="cooking-image" />
        </div>
      </section>

      <section className="atmosphere-section" ref={(el) => (sectionsRef.current[6] = el)}>
        <div className="atmosphere-text">
          <h2><Trans>WE FOCUS ON NEW TASTE SENSATIONS AND A PLEASANT ATMOSPHERE</Trans></h2>
          <p><Trans>We guarantee delicious cocktails, beers, and a unique atmosphere.</Trans></p>
          <p><Trans>In our restaurant, you can unwind after a hard day with our fantastic cocktails and beers. In addition to the original and unique cuisine, friendly staff and a wonderful atmosphere await you.</Trans></p>
        </div>
        <div className="atmosphere-images">
          <img src={abt4} alt="Cocktails" className="atmosphere-image" />
          <img src={abt5} alt="Atmosphere" className="atmosphere-image" />
        </div>
      </section>

      <section className="about-call-to-action" style={{
          backgroundImage: `url(${abtcta})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} ref={(el) => (sectionsRef.current[7] = el)}>
        <div className="cta-content">
          <h2><Trans>WE’RE PROUD TO BE A CHERISHED</Trans><br /><Trans>DESTINATION FOR MONACO GRAND</Trans><br /><Trans>PRIX ENTHUSIASTS</Trans></h2>
          <p><Trans>Offering a quintessential Monaco experience that captures</Trans><br /><Trans>the heart and soul of this vibrant principality.</Trans><br /><Trans>Join us at Gran Caffè and embark on a journey of taste, tradition,</Trans><br /><Trans>and togetherness. We can't wait to welcome you into our world.</Trans></p>
          <button><Trans>Book a Table</Trans></button>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
