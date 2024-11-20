import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Reservation.css';
import showAlert from './showAlert';
import { useTranslation } from 'react-i18next';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import { enGB } from 'date-fns/locale';
import Select from 'react-select';

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
    const day = date.getDay(); // 0 for Sunday, 6 for Saturday
    if (day === 0) {
      showAlert(t("The restaurant is closed on Sundays. Please select another date."), "error");
    } else {
      setFormData({ ...formData, date });
    }
  };

  const getAvailableTimes = () => {
    const selectedDay = formData.date ? formData.date.getDay() : null;

    const generateTimeOptions = (startHour, endHour) => {
      const times = [];
      for (let hour = startHour; hour <= endHour; hour++) {
        const isLastHour = hour === endHour;
        const minutesArray = isLastHour ? [0] : [0, 30]; 
        for (let minutes of minutesArray) {
          const timeValue = `${hour.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
          times.push({
            value: timeValue,
            label: timeValue,
          });
        }
      }
      return times;
    };
    

    if (selectedDay === 6) {
      return generateTimeOptions(10, 20); // Saturday: 10:00 AM to 8:00 PM
    }

    return generateTimeOptions(8, 22); // Weekdays: 8:00 AM to 10:00 PM
  };

  const handleTimeChange = (selectedOption) => {
    setFormData({ ...formData, time: selectedOption ? selectedOption.value : '' });
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
          {t("Book a table at our restaurant & lounge bar to enjoy an unforgettable experience with exquisite dining, refreshing cocktails, and a vibrant atmosphere. We look forward to welcoming you.")}
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
            renderCustomHeader={({ date, changeYear, changeMonth, decreaseMonth, increaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled }) => (
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
          <Select
  options={getAvailableTimes()}
  placeholder={t("Select Time")}
  value={getAvailableTimes().find(option => option.value === formData.time)}
  onChange={handleTimeChange}
  classNamePrefix="custom-select"
  isClearable
  required
  styles={{
    option: (provided, state) => {
      const [hour, minute] = state.data.value.split(':').map(Number);
      let backgroundColor;
      if (hour >= 12 && hour < 15) {
        backgroundColor = '#ffebcd'; // Light color for lunch
      } else if (hour >= 18 && (hour < 20 || (hour === 20 && minute <= 30))) {
        backgroundColor = '#ffe4e1'; // Light color for dinner
      } else {
        backgroundColor = '#fff'; // Default
      }

      return {
        ...provided,
        backgroundColor: state.isFocused ? '#ccc' : backgroundColor,
        color: state.isFocused ? '#000' : '#333',
        cursor: 'pointer',
      };
    },
    control: (provided) => ({
      ...provided,
      borderColor: '#ddd',
      boxShadow: 'none',
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: '8px',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#666',
    }),
  }}
/>

{/* Legend Component */}
<div className="legend">
  <div className="legend-item">
    <span className="legend-color" style={{ backgroundColor: '#ffebcd' }}></span>
    <span>{t("Lunch Time (12:00–15:00)")}</span>
  </div>
  <div className="legend-item">
    <span className="legend-color" style={{ backgroundColor: '#ffe4e1' }}></span>
    <span>{t("Dinner Time (18:00–20:30)")}</span>
  </div>
</div>


          <input type="number" name="people" placeholder={t("Number of Guests")} value={formData.people} onChange={(e) => setFormData({ ...formData, people: e.target.value })} required min="1" />
          <button type="submit">{t("Reserve")}</button>
        </form>
      </div>
    </div>
  );
}

export default Reservation;
