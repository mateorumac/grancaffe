import React from 'react';
import './Home.css';
import hero1 from '../assets/hero1.jpeg';
import hero2 from '../assets/hero2.jpeg';
import hero3 from '../assets/hero3.jpeg';
import feat2 from '../assets/feat2.jpeg';
import feat3 from '../assets/feat3.jpeg';
import feat4 from '../assets/feat4.jpeg';
import specialsImage from '../assets/specials.jpeg';
import { GiCoffeeCup, GiForkKnifeSpoon } from 'react-icons/gi';
import { FaBirthdayCake } from 'react-icons/fa';
import { Trans, useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();

  return (
    <div className="home">
      {/* Original Hero Section */}
      <section className="hero-split">
  <div className="hero-image">
    <img src={hero1} alt="Chef preparing food" />
  </div>
  <div className="hero-text">
    <h4><Trans>Taste the cuisine of the world</Trans></h4>
    <h1><Trans>Fresh Cuisine</Trans></h1>
    <p>
      <Trans i18nKey="hero.paragraph1">
        We are not afraid to experiment. Our chef combines carefully <br />selected ingredients and serves them on your plate <br /> in an extraordinary way.
      </Trans>
    </p>
  </div>
</section>

<section className="hero-split hero-reversed">
  <div className="hero-text">
    <h4><Trans>The Story of</Trans></h4>
    <h1><Trans>Our Restaurant</Trans></h1>
    <p>
      <Trans i18nKey="hero.paragraph2">
        Discover a culinary journey with flavors from around the world,<br /> crafted with passion and expertise.
      </Trans>
    </p>
    <button onClick={() => window.location.href='/about'}>
      <Trans>Learn More</Trans>
    </button>
  </div>
  <div className="hero-image">
    <img src={hero2} alt="Delicious dish on display" />
  </div>
</section>

      {/* Features Section */}
      <section className="features">
        <div className="feature">
          <GiCoffeeCup className="feature-icon" />
          <h3>{t('Excellent Coffee')}</h3>
          <p>{t('We offer only the best coffee, sourced from the finest beans.')}</p>
        </div>
        <div className="feature">
          <FaBirthdayCake className="feature-icon" />
          <h3>{t('Iconic Cakes')}</h3>
          <p>{t('Our cakes are made with love for you.')}</p>
        </div>
        <div className="feature">
          <GiForkKnifeSpoon className="feature-icon" />
          <h3>{t('Delicious Food')}</h3>
          <p>{t('Original cuisine at will.')}</p>
        </div>
      </section>

      <section className="feature-meals">
  <h5><Trans>Discover Our</Trans></h5>
  <h2><Trans>Great Flavors</Trans></h2>
  <div className="meal-grid">
    <div className="meal">
      <img src={hero3} alt={t("Black Olive Pizza")} />
      <h4><Trans>Black Olive Pizza</Trans></h4>
      <p>
        <Trans>
          Lorem ipsum dolor sit amet elit the estibulum sit aet purus eu lectus tristique aliquam best.
        </Trans>
      </p>
      <span>$25</span>
    </div>
    <div className="meal">
      <img src={feat2} alt={t("Caesar Salad")} />
      <h4><Trans>Caesar Salad</Trans></h4>
      <p>
        <Trans>
          Lorem ipsum dolor sit amet elit the estibulum sit aet purus eu lectus tristique aliquam best.
        </Trans>
      </p>
      <span>$15</span>
    </div>
    <div className="meal">
      <img src={feat3} alt={t("Balsamic Bruschetta")} />
      <h4><Trans>Balsamic Bruschetta</Trans></h4>
      <p>
        <Trans>
          Lorem ipsum dolor sit amet elit the estibulum sit aet purus eu lectus tristique aliquam best.
        </Trans>
      </p>
      <span>$12</span>
    </div>
    <div className="meal">
      <img src={feat4} alt={t("Italian Pancakes")} />
      <h4><Trans>Italian Pancakes</Trans></h4>
      <p>
        <Trans>
          Lorem ipsum dolor sit amet elit the estibulum sit aet purus eu lectus tristique aliquam best.
        </Trans>
      </p>
      <span>$22</span>
    </div>
  </div>
  <button className="menu-button" onClick={() => window.location.href='/menu'}>
    <Trans>View Full Menu</Trans>
  </button>
</section>
 {/* Specials Section */}
 <section className="specials" style={{
        backgroundImage: `url(${specialsImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="specials-content">
    <h4><Trans>We Believe</Trans></h4>
    <h2><Trans>Food is Important</Trans></h2>
    <p>
      <Trans>
        At Gran Caffe, we know that every meal is an opportunity to create memories and savor authentic flavors.
        Join us for an experience where each dish is crafted with passion, bringing the essence of Italy to your table. 
        Taste, connect, and make moments that last.
      </Trans>
    </p>
    <button onClick={() => window.location.href='/reservation'}>
      <Trans>Book a Table</Trans>
    </button>
  </div>
</section>
    </div>
  );
}
export default Home;
