import React from 'react';
import { FaFacebookF, FaInstagram, FaTripadvisor } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import './Footer.css';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4><Trans>About Us</Trans></h4>
          <p>
            <Trans>Experience the essence of Italian cuisine, crafted with passion and served with warmth.</Trans>
          </p>
          <p>
            <strong><Trans>Working Hours:</Trans></strong> <br />
            <Trans>Mon - Thu: 08:00 - 20:00</Trans> <br />
            <Trans>Fri: 08:00 - 21:00</Trans> <br />
            <Trans>Sat: 10:00 - 21:00</Trans>
          </p>
        </div>
        <div className="footer-section">
          <h4><Trans>Contact Us</Trans></h4>
          <p><Trans>Email:</Trans> grancaffe.mc@gmail.com</p>
          <p><Trans>Phone:</Trans> +377 6 07 93 96 82<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +377 97 97 78 88</p>
        </div>
        <div className="footer-section">
          <h4><Trans>Follow Us</Trans></h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/gcrestaurantmonaco/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/grancaffe.mc/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.tripadvisor.com/Restaurant_Review-g190409-d8537530-Reviews-Gran_Caffe-Monte_Carlo.html" target="_blank" rel="noopener noreferrer">
              <FaTripadvisor />
            </a>
          </div>
          <Link to="/reservation" className="footer-book-button"><Trans>Book Now</Trans></Link>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Gran Caffè | <Trans>All rights reserved.</Trans>
      </div>
    </footer>
  );
}

export default Footer;
