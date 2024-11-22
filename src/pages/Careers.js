import React from "react";
import "./Careers.css";
import chefImage from "../assets/jobs/chef.webp";
import barmanImage from "../assets/jobs/barman.webp";
import dishwasherImage from "../assets/jobs/dishwasher.webp";
import { useTranslation, Trans } from "react-i18next";

function Careers() {
  const { t } = useTranslation();

  return (
    <div className="careers">
      <h1 className="careers-heading"><Trans>Work With Us</Trans></h1>
      <p className="careers-description">
        <Trans>
          Join our team of passionate individuals dedicated to creating an
          unforgettable experience for our guests. We are looking for energetic,
          service-oriented professionals who love food and hospitality.
        </Trans>
      </p>
      <div className="careers-cards">
        <div className="careers-card">
          <img src={chefImage} alt={t("careers.chef.alt")} className="card-image" />
          <h2 className="card-title"><Trans>Chefs & Assistant Chefs</Trans></h2>
          <p className="card-description">
            <Trans>
              Looking for talented individuals with a passion for culinary arts.
            </Trans>
          </p>
          <button
            className="apply-button"
            onClick={() =>
              window.location.href = "mailto:grancaffe.mc@gmail.com?subject=" +
              encodeURIComponent(t("careers.chef.subject"))
            }
          >
            <Trans>Apply Now</Trans>
          </button>
        </div>
        <div className="careers-card">
          <img src={barmanImage} alt={t("careers.barman.alt")} className="card-image" />
          <h2 className="card-title"><Trans>Barmans & Waiters/Waitresses</Trans></h2>
          <p className="card-description">
            <Trans>
              Join our front-of-house team to create memorable dining experiences.
            </Trans>
          </p>
          <button
            className="apply-button"
            onClick={() =>
              window.location.href = "mailto:grancaffe.mc@gmail.com?subject=" +
              encodeURIComponent(t("careers.barman.subject"))
            }
          >
            <Trans>Apply Now</Trans>
          </button>
        </div>
        <div className="careers-card">
          <img src={dishwasherImage} alt={t("careers.dishwasher.alt")} className="card-image" />
          <h2 className="card-title"><Trans>Dishwasher</Trans></h2>
          <p className="card-description">
            <Trans>
              Seeking detail-oriented individuals to maintain a spotless kitchen.
            </Trans>
          </p>
          <button
            className="apply-button"
            onClick={() =>
              window.location.href = "mailto:grancaffe.mc@gmail.com?subject=" +
              encodeURIComponent(t("careers.dishwasher.subject"))
            }
          >
            <Trans>Apply Now</Trans>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Careers;
