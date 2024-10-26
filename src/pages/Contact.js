import React from 'react';
import './Contact.css';
import { FaPhoneAlt, FaMapMarkerAlt, FaRegClock, FaEnvelope } from 'react-icons/fa';


function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-content">
        <div className="contact-info">
          <h4>Here For You</h4>
          <h2>Write to Us</h2>
          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
            </div>
            <div className="form-row">
              <input type="text" placeholder="Phone Number" required />
              <input type="email" placeholder="Email" required />
            </div>
            <textarea placeholder="Message" required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2876.6656160806256!2d7.4192883!3d43.7379929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cddc08fd83f583%3A0xc45d6c40c1f67f93!2sRue%20Grimaldi%2057%2C%20Monaco!5e0!3m2!1sen!2sus!4v1611120380651!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Restaurant Location"
          ></iframe>
        </div>
      </div>

      <div className="contact-details">
        <div className="detail-item">
          <FaRegClock className="detail-icon" />
          <h4>Working Hours</h4>
          <p>Mon - Thu: 08:00 - 20:00 <br />
            Fri: 08:00 - 21:00 <br />
            Sat: 10:00 - 21:00</p>
        </div>
        <div className="detail-item">
          <FaPhoneAlt className="detail-icon" />
          <h4>Call Us</h4>
          <p>+377 6 07 93 96 82<br/> +377 97 97 78 88</p>
        </div>
        <div className="detail-item">
          <FaMapMarkerAlt className="detail-icon" />
          <h4>Address</h4>
          <p>Rue Grimaldi 57, Monaco</p>
        </div>
        <div className="detail-item">
          <FaEnvelope className="detail-icon" />
          <h4>Email</h4>
          <p>grancaffe.mc@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;