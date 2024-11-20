import React from "react";
import "./Careers.css";
import chefImage from "../assets/jobs/chef.webp"; 
import barmanImage from "../assets/jobs/barman.webp";
import dishwasherImage from "../assets/jobs/dishwasher.webp";

function Careers() {
  return (
    <div className="careers">
      <h1 className="careers-heading">Work With Us</h1>
      <p className="careers-description">
        Join our team of passionate individuals dedicated to creating an unforgettable experience for our guests. 
        We are looking for energetic, service-oriented professionals who love food and hospitality.
      </p>
      <div className="careers-cards">
        <div className="careers-card">
          <img src={chefImage} alt="Chef and Assistant Chef" className="card-image" />
          <h2 className="card-title">Chefs & Assistant Chefs</h2>
          <p className="card-description">
            Looking for talented individuals with a passion for culinary arts.
          </p>
          <button
            className="apply-button"
            onClick={() => window.location.href = "mailto:grancaffe.mc@gmail.com?subject=Application for Chefs & Assistant Chefs"}
          >
            Apply Now
          </button>
        </div>
        <div className="careers-card">
          <img src={barmanImage} alt="Barmans and Waiters" className="card-image" />
          <h2 className="card-title">Barmans & Waiters/Waitresses</h2>
          <p className="card-description">
            Join our front-of-house team to create memorable dining experiences.
          </p>
          <button
            className="apply-button"
            onClick={() => window.location.href = "mailto:grancaffe.mc@gmail.com?subject=Application for Barmans & Waiters/Waitresses"}
          >
            Apply Now
          </button>
        </div>
        <div className="careers-card">
          <img src={dishwasherImage} alt="Dishwasher" className="card-image" />
          <h2 className="card-title">Dishwasher</h2>
          <p className="card-description">
            Seeking detail-oriented individuals to maintain a spotless kitchen.
          </p>
          <button
            className="apply-button"
            onClick={() => window.location.href = "mailto:grancaffe.mc@gmail.com?subject=Application for Dishwasher (Plongeur)"}
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Careers;
