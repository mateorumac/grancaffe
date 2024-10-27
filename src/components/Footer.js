import React from 'react';
import { FaFacebookF, FaInstagram, FaTripadvisor } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            Learn more about our restaurant, our story, and our dedication to providing the best dining experience.
          </p>
          <p>
            <strong>Working Hours:</strong> <br />
            Mon - Thu: 08:00 - 20:00 <br />
            Fri: 08:00 - 21:00 <br></br>
            Sat: 10:00 - 21:00
          </p>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: grancaffe.mc@gmail.com</p>
          <p>Phone: +377 6 07 93 96 82<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +377 97 97 78 88</p>
          
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
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
          <Link to="/reservation" className="footer-book-button">Book Now</Link>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Gran Caffè | All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
