import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ReservationForm.css';

function ReservationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <textarea name="message" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
      <button type="submit">Reserve</button>
    </form>
  );
}

export default ReservationForm;
