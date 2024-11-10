import React from 'react';
import './Home.css';
import hero1 from '../assets/hero1.jpeg';
import hero2 from '../assets/hero2.jpeg';
import hero3 from '../assets/hero3.jpeg';
import feat2 from '../assets/feat2.jpeg';
import feat3 from '../assets/feat3.jpeg';
import feat4 from '../assets/feat4.jpeg';
import specialsImage from '../assets/specials.jpeg';
import { GiCoffeeCup, GiForkKnifeSpoon, GiCupcake } from 'react-icons/gi';
import { Trans, useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();

  return (
    <div className="home">
      <section className="hero-split">
  <div className="hero-image">
    <img src={hero1} alt="A Delicious dessert" />
  </div>
  <div className="hero-text">
  <div className="hero-text-inner">
    <h4><Trans>Taste the cuisine of the world</Trans></h4>
    <h1><Trans>Fresh Cuisine</Trans></h1>
    <p>
      <Trans i18nKey="hero.paragraph1">
        We are not afraid to experiment. Our chef combines carefully <br />selected ingredients and serves them on your plate <br /> in an extraordinary way.
      </Trans>
    </p>
  </div>
  </div>
</section>

<section className="hero-split hero-reversed">
  <div className="hero-text">
  <div className="hero-text-inner">
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
  </div>
  <div className="hero-image">
    <img src={hero2} alt="Delicious dish on display" />
  </div>
</section>

      <section className="features">
        <div className="feature">
          <GiCoffeeCup className="feature-icon" />
          <h3>{t('Excellent Coffee')}</h3>
          <p>{t('We offer only the best coffee, sourced from the finest beans.')}</p>
        </div>
        <div className="feature">
          <GiCupcake className="feature-icon" />
          <h3>{t('Iconic Desserts')}</h3>
          <p>{t('Our desserts are made with love for you.')}</p>
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
      <img src={hero3} alt={t("Mediterranean Mezze Platter")} />
      <h4><Trans>Mediterranean Mezze Platter</Trans></h4>
      <p>
        <Trans>
        A delightful assortment of Mediterranean appetizers featuring fresh bruschetta, stuffed pastries, cured meats, and mini toasts.
        </Trans>
      </p>
      <span>$25</span>
    </div>
    <div className="meal">
      <img src={feat2} alt={t("Sesame-Crusted Tuna Salad")} />
      <h4><Trans>Sesame-Crusted Tuna Salad</Trans></h4>
      <p>
        <Trans>
        Slices of seared sesame-crusted tuna atop a bed of fresh greens, garnished with sprouts and served with a savory soy dipping sauce.
        </Trans>
      </p>
      <span>$15</span>
    </div>
    <div className="meal">
      <img src={feat3} alt={t("Rustic Mushroom & Basil Pizza")} />
      <h4><Trans>Rustic Mushroom & Basil Pizza</Trans></h4>
      <p>
        <Trans>
        A thin, wood-fired pizza topped with savory mushrooms, fresh basil, black olives, and a hint of garlic.
        </Trans>
      </p>
      <span>$12</span>
    </div>
    <div className="meal">
      <img src={feat4} alt={t("Tropical Pineapple Fizz")} />
      <h4><Trans>Tropical Pineapple Fizz</Trans></h4>
      <p>
        <Trans>
        A refreshing tropical drink with pineapple juice, a splash of citrus, and a garnish of fresh mint.
        </Trans>
      </p>
      <span>$22</span>
    </div>
  </div>
  <button className="menu-button" onClick={() => window.location.href='/menu'}>
    <Trans>View Full Menu</Trans>
  </button>
</section>

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
