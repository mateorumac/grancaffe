import React from 'react';
import './PrivateHire.css';
import privateHireImg from '../assets/gcaffe.jpeg';
import ambientImg1 from '../assets/ambient/amb.jpeg';
import ambientImg2 from '../assets/ambient/amb2.jpeg';
import ambientImg3 from '../assets/ambient/amb3.jpeg';
import ambientImg4 from '../assets/ambient/amb7.jpeg';
import ambientImg5 from '../assets/ambient/ambfine.jpeg';
import ambientImg6 from '../assets/ambient/ambient.jpeg';
import ambientImg7 from '../assets/ambient/amb1.jpeg';
import { useTranslation, Trans } from 'react-i18next';
import { FaBirthdayCake, FaUsers, FaCocktail } from 'react-icons/fa';

function PrivateHire() {
  const { t } = useTranslation();

  return (
    <div className="private-hire">
      <div className="private-hire-card">
        <div className="card-text">
          <h1><Trans>Private Hire</Trans></h1>
          <p><Trans i18nKey="privateHire.availability">Gran Caffè is available for private or partial hire.<br></br> Please contact us to discuss your needs.</Trans></p>
          <button
            onClick={() => window.location.href = 'mailto:grancaffe.mc@gmail.com'}
            className="email-button"
          >
            <Trans>Email Us!</Trans>
          </button>
        </div>
        <div className="card-image">
          <img src={privateHireImg} alt="Gran Caffè" />
        </div>
      </div>

      <section className="private-hire-details">
        <h2><Trans>Why Choose Us?</Trans></h2>
        <div className="details-content">
          <div className="detail-item">
            <FaBirthdayCake className="detail-icon" />
            <p><Trans>Perfect for birthdays and special celebrations with friends and family.</Trans></p>
          </div>
          <div className="detail-item">
            <FaUsers className="detail-icon" />
            <p><Trans>Ideal for corporate events, offering an exclusive setting and tailored services.</Trans></p>
          </div>
          <div className="detail-item">
            <FaCocktail className="detail-icon" />
            <p><Trans>Enjoy access to our Mediterranean-inspired dishes and crafted cocktails.</Trans></p>
          </div>
        </div>
      </section>
      <section className="ambient-images">
  <div className="image-grid">
    <img src={ambientImg1} loading="lazy" alt="Elegant dining table setup with candles and cutlery" className="ambient-image small" />
    <img src={ambientImg2} loading="lazy" alt="Cozy seating area with lush greenery and ambient lighting" className="ambient-image large" />
    <img src={ambientImg3} loading="lazy" alt="Modern restaurant interior with artistic wall decor" className="ambient-image medium" />
    <img src={ambientImg4} loading="lazy" alt="Outdoor patio seating with string lights and plants" className="ambient-image small" />
    <img src={ambientImg7} loading="lazy" alt="Stylish wine glasses arranged on a rustic wooden table" className="ambient-image small" />
    <img src={ambientImg5} loading="lazy" alt="Romantic candlelit dinner setup with elegant tableware" className="ambient-image large" />
    <img src={ambientImg6} loading="lazy" alt="Close-up of a dining table with wine bottles and flowers" className="ambient-image medium" />
  </div>
</section>
    </div>
  );
}

export default PrivateHire;
