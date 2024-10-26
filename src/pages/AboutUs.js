import React from 'react';
import { useTranslation } from 'react-i18next';
import './AboutUs.css';

function AboutUs() {
  const { t } = useTranslation();

  return (
    <div className="about-us">
      <h1>{t('about_us_title')}</h1>
      <p>{t('about_us_text')}</p>
    </div>
  );
}

export default AboutUs;
