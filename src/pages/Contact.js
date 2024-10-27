import React from "react";
import { useTranslation } from "react-i18next";
import "./Contact.css";
import showAlert from '../components/showAlert';
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaRegClock,
  FaEnvelope,
} from "react-icons/fa";
import emailjs from "emailjs-com";

function Contact() {
  const { t } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xhfgwmr",
        "template_6u6sg6o",
        e.target,
        "yUqhtuWZO4g8ZWi75"
      )
      .then(
        (result) => {
          console.log(result.text);
          showAlert(t("Your message has been sent successfully!"), "success");
        },
        (error) => {
          console.log(error.text);
          showAlert(t("There was an error sending your message. Please try again."), "error");
        }
      );

    e.target.reset();
  };

  return (
    <div className="contact-page">
      <div className="contact-content">
        <div className="contact-info">
          <h4>{t("Here For You")}</h4>
          <h2>{t("Write to Us")}</h2>
          <form className="contact-form" onSubmit={sendEmail}>
            <div className="form-row">
              <input
                type="text"
                name="firstName"
                placeholder={t("First Name")}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder={t("Last Name")}
                required
              />
            </div>
            <div className="form-row">
              <input
                type="text"
                name="phone"
                placeholder={t("Phone Number")}
                required
              />
              <input type="email" name="email" placeholder={t("Email")} required />
            </div>
            <textarea name="message" placeholder={t("Message")} required></textarea>
            <button type="submit">{t("Send")}</button>
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
          <h4>{t("Working Hours")}</h4>
          <p>
            {t("Mon - Thu")}: 08:00 - 20:00 <br />
            {t("Fri")}: 08:00 - 21:00 <br />
            {t("Sat")}: 10:00 - 21:00
          </p>
        </div>
        <div className="detail-item">
          <FaPhoneAlt className="detail-icon" />
          <h4>{t("Call Us")}</h4>
          <p>
            +377 6 07 93 96 82
            <br /> +377 97 97 78 88
          </p>
        </div>
        <div className="detail-item">
          <FaMapMarkerAlt className="detail-icon" />
          <h4>{t("Address")}</h4>
          <p>Rue Grimaldi 57, Monaco</p>
        </div>
        <div className="detail-item">
          <FaEnvelope className="detail-icon" />
          <h4>{t("Email")}</h4>
          <p>grancaffe.mc@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
