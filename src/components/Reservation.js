import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Reservation.css';
import showAlert from './showAlert';
import { useTranslation } from 'react-i18next';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import { enGB } from 'date-fns/locale';

// Register locale to start the week on Monday
registerLocale('en-GB', enGB);

function Reservation() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: null,
    time: '',
    people: ''
  });

  const handleDateChange = (date) => {
    const day = date.getDay(); // 0 for Sunday
    if (day === 0) {
      showAlert(t("The restaurant is closed on Sundays. Please select another date."), "error");
    } else {
      setFormData({ ...formData, date });
    }
  };

  const handleTimeChange = (e) => {
    setFormData({ ...formData, time: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      date: formData.date ? format(formData.date, 'dd/MM/yyyy') : '',
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
      showAlert(t("Reservation sent successfully!"), "success");
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: null,
        time: '',
        people: ''
      });
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      showAlert(t("An error occurred. Please try again."), "error");
    });
  };

  return (
    <div className="reservation-page">
      <div className="reservation-container">
        <h2 className="reservation-title">{t("Make a Reservation")}</h2>
        <p className="reservation-subtitle">
          {t("Book a table at our restaurant to enjoy an unforgettable dining experience. We look forward to serving you.")}
        </p>
        <form className="reservation-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder={t("Name")} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
          <input type="email" name="email" placeholder={t("Email")} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
          <input type="tel" name="phone" placeholder={t("Phone")} value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required />
          <DatePicker
            selected={formData.date}
            onChange={handleDateChange}
            placeholderText={t("Select a Date")}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            locale="en-GB"
            className="custom-date-picker"
            showPopperArrow={false}
            calendarStartDay={1}
            filterDate={(date) => date.getDay() !== 0}
            popperPlacement="bottom-start"
            renderCustomHeader={({
              date,
              changeYear,
              changeMonth,
              decreaseMonth,
              increaseMonth,
              prevMonthButtonDisabled,
              nextMonthButtonDisabled,
            }) => (
              <div className="custom-header">
                <button
                  onClick={decreaseMonth}
                  disabled={prevMonthButtonDisabled}
                  className="custom-nav-button"
                >
                &#10094; {/* Left arrow character */}
              </button>
                <span className="current-month-year">
              {format(date, "MMMM yyyy")}
                </span>
              <button
                onClick={increaseMonth}
                disabled={nextMonthButtonDisabled}
                className="custom-nav-button"
              >
                &#10095; {/* Right arrow character */}
              </button>
              </div>
            )}
          />
          <select
            value={formData.time}
            onChange={handleTimeChange}
            className="custom-time-picker"
            required
          >
            <option value="">{t("Select Time")}</option>
            {Array.from({ length: 15 }, (_, i) => i + 8).map(hour => (
              <option key={hour} value={`${hour.toString().padStart(2, '0')}:00`}>
                {`${hour.toString().padStart(2, '0')}:00`}
              </option>
            ))}
          </select>
          <input type="number" name="people" placeholder={t("Number of People")} value={formData.people} onChange={(e) => setFormData({ ...formData, people: e.target.value })} required min="1" />
          <button type="submit">{t("Reserve")}</button>
        </form>
      </div>
    </div>
  );
}

export default Reservation;
