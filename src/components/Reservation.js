import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Reservation.css';
import showAlert from './showAlert';

function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    people: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      date: formData.date,
      time: formData.time,
      people: formData.people,
    };

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      templateParams,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
      showAlert("Reservation sent successfully!", "success");

      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        people: ''
      });
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      showAlert('An error occurred. Please try again.', 'error');
    });
  };

  return (
    <div className="reservation-page">
      <div className="reservation-container">
        <h2 className="reservation-title">Make a Reservation</h2>
        <p className="reservation-subtitle">
          Book a table at our restaurant to enjoy an unforgettable dining experience. We look forward to serving you.
        </p>
        <form className="reservation-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
          <input type="time" name="time" value={formData.time} onChange={handleChange} required />
          <input type="number" name="people" placeholder="Number of People" value={formData.people} onChange={handleChange} required min="1" />
          <button type="submit">Reserve</button>
        </form>
      </div>
    </div>
  );
}

export default Reservation;
