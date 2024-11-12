import React from 'react';
import './PrivateHire.css';
import privateHireImg from '../assets/gcaffe.jpg';
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
            onClick={() => window.location.href = 'mailto:hello@jacobsandfield.com'}
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
    </div>
  );
}

export default PrivateHire;
