import React, { useEffect, useRef } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import './AboutUs.css';
import abthero from '../assets/gcaffe.jpeg'; 
import abt2 from '../assets/abt2.jpeg';  
import ambfine from '../assets/ambient/ambfine.jpeg';
import amb2 from '../assets/ambient/amb2.jpeg';
import abtcook from '../assets/abtcook.jpeg';
import abt4 from '../assets/abt4.jpeg';
import abt5 from '../assets/abt5.jpeg';
import abtcta from '../assets/abtcta.jpg';
import yacht from '../assets/yacht.jpg';
import badge from '../assets/BEST_COFFEE.png';
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
          <p><Trans i18nKey="hero.since2014">Restaurant & Lounge Bar Since 2014</Trans></p>
        </div>
        <div className="hero-badge">
      <img src={badge} alt="Best Café 2024" />
    </div>
      </section>

      <section className="about-content">
        <div className="content-section" ref={(el) => (sectionsRef.current[1] = el)}>
          <img src={amb2} alt="A Minuty Prestige bottle of wine and a nice ambient background" className="content-image" />
          <div className="content-text">
            <h3><Trans>WARM AND WELCOMING</Trans></h3>
            <p>
              <Trans>
                Welcome to Gran Caffè, a cherished gem for locals and travelers alike. Step into our world and experience
                the essence of Italy with every sip of our Italian coffee and each bite of our homemade desserts, paired 
                with delightful breakfast specialties.
              </Trans>
            </p>
          </div>
        </div>

        <div className="content-section reverse" ref={(el) => (sectionsRef.current[2] = el)}>
          <div className="content-text">
            <h3><Trans>DAYTIME DELIGHTS</Trans></h3>
            <p><Trans>As the day unfolds, our kitchen fills with the aroma of freshly prepared dishes crafted by our talented chef. Our menu is a celebration of Mediterranean and Italian flavors, making Gran Caffè not just a favorite spot for locals, but also a welcoming haven for those seeking a taste of home away from home.</Trans></p>
          </div>
          <img src={abt2} loading="lazy" alt="Delicious Pasta with Tomato Sauce and Basilico" className="content-image" />
        </div>

        <div className="content-section" ref={(el) => (sectionsRef.current[3] = el)}>
          <img src={ambfine} loading="lazy" alt="Night time atmosphere at Gran Caffe" className="content-image"/>
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
          <p><Trans>Aromatic coffee</Trans></p>
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
            <p><Trans>Experience the joy of culinary surprises at our restaurant, where we serve daily dishes inspired by recipes from around the world.</Trans></p> <br></br>
            <p><Trans>Our kitchen welcomes you daily with freshly inspired dishes from 12:00 to 20:30. <br></br>  Come and discover the delightful creations we have prepared for you today!</Trans></p>
            <button onClick={() => window.location.href='/menu'}><Trans>View Our Menu</Trans></button>
          </div>
          <img src={abtcook} loading="lazy" alt="A flavorful seafood dish featuring mussels, shrimp, and vibrant vegetables served on a decorative plate." className="cooking-image" />
        </div>
      </section>

      <section className="atmosphere-section" ref={(el) => (sectionsRef.current[6] = el)}>
      <div className="atmosphere-images">
          <img src={abt4} loading="lazy" alt="Two Cocktails on a countertop" className="atmosphere-image" />
          <img src={abt5} loading="lazy" alt="A beautifully arranged charcuterie board with assorted cheeses, slices of prosciutto and cucumbers." className="atmosphere-image" />
        </div>
        <div className="atmosphere-text">
          <h2><Trans>WE FOCUS ON NEW TASTE SENSATIONS AND A PLEASANT ATMOSPHERE</Trans></h2>
          <p><Trans>We guarantee delicious cocktails, beers, and a unique atmosphere.</Trans></p>
          <p><Trans>In our restaurant, you can unwind after a hard day with our fantastic cocktails and beers. In addition to the original and unique cuisine, friendly staff and a wonderful atmosphere await you.</Trans></p>
        </div>
        
      </section>

      <section className="yacht-community" ref={(el) => (sectionsRef.current[7] = el)}>
  <div className="yacht-text">
    <h2><Trans>FAVORITE CREW BAR</Trans></h2>
    <p><Trans>Gran Caffè has become a favorite destination for yacht and sailboat crews, offering a warm and inviting atmosphere that feels like a home away from home. Join us to experience Mediterranean flavors and a place where the yachting community gathers, unwinds, and connects.</Trans></p>
  </div>
  <img src={yacht} loading="lazy" alt="Yacht Community relaxing in Monaco" className="yacht-image" />
</section>
      <section className="about-call-to-action" style={{
          backgroundImage: `url(${abtcta})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} ref={(el) => (sectionsRef.current[7] = el)}>
        <div className="cta-content">
          <h2><Trans>WE’RE PROUD TO BE A CHERISHED</Trans><br /><Trans>DESTINATION FOR MONACO GRAND</Trans><br /><Trans>PRIX ENTHUSIASTS</Trans></h2>
          <p><Trans>Offering a quintessential Monaco experience that captures</Trans><br /><Trans>the heart and soul of this vibrant principality.</Trans><br /><Trans>Join us at Gran Caffè and embark on a journey of taste, tradition,</Trans><br /><Trans>and togetherness. We can't wait to welcome you into our world.</Trans></p>
          <button onClick={() => window.location.href='/reservation'}><Trans>Book a Table</Trans></button>
        </div>
      </section>
    </div>
  );
}
export default AboutUs;