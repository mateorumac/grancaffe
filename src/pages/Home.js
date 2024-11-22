import React, { useEffect } from 'react';
import './Home.css';
import heroimg from '../assets/heroimg.jpg';
import hero1 from '../assets/ambient/amb1.jpeg';
import hero2 from '../assets/hero2.jpeg';
import feat1 from '../assets/feat/tartare.webp';
import feat2 from '../assets/feat/Spaghetti seafood.webp';
import feat3 from '../assets/feat/tournedos.webp';
import feat4 from '../assets/feat/assiette gran caffe.webp';
import specialsImage from '../assets/specials.jpeg';
import { GiCoffeeCup, GiForkKnifeSpoon } from 'react-icons/gi';
import { FaCocktail } from 'react-icons/fa';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Trans, useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();

  useEffect(() => {
    console.log("Website Provided by D&A SmartSolutions - Mateo Rumac");
  }, []);
    
  return (
    <div className="home">
      <section
        className="hero"
        style={{
          backgroundImage: `url(${heroimg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="hero-overlay">
          <div className="hero-text-container">
            <h1 className="hero-heading">
              <Trans>Experience Monaco's Finest Cuisine & Lounge</Trans>
            </h1>
            <p className="hero-description">
              <Trans i18nKey="hero.intro">
                Nestled in the heart of Monaco, our restaurant and lounge offer an unparalleled culinary experience with Mediterranean-inspired
                <br />
                dishes in a stylish and welcoming ambiance, overlooking the breathtaking Riviera.
              </Trans>
            </p>
            <p className="hero-description">
              <Trans>
                Indulge in our seasonal menu crafted with the finest ingredients, alongside our signature cocktails and an exceptional selection of
                wines.
              </Trans>
            </p>
            <p className="hero-description">
              <Trans>
                Elevate your experience with exclusive private dining and event services, perfect for creating unforgettable memories in an elegant
                setting.
              </Trans>
            </p>
            <div className="hero-buttons">
              <button
                aria-label="Reserve Your Experience"
                onClick={() => (window.location.href = '/reservation')}
              >
                <i className="fas fa-calendar-check"></i>
                <Trans>Reserve Your Experience</Trans>
              </button>
              <button
                aria-label="Join Our Exclusive Events"
                onClick={() => (window.location.href = '/events')}
              >
                <i className="fas fa-glass-cheers"></i>
                <Trans>Join Our Exclusive Events</Trans>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="hero-split">
        <div className="hero-image">
          <img src={hero2} alt="Delicious Beef tataki with Asian sauce" />
        </div>
        <div className="hero-text">
          <div className="hero-text-inner">
            <h4>
              <Trans>Taste the cuisine of the world</Trans>
            </h4>
            <h1>
              <Trans>Fresh Cuisine</Trans>
            </h1>
            <p>
              <Trans i18nKey="hero.paragraph1">
                We are not afraid to experiment. Our chef combines carefully <br />
                selected ingredients and serves them on your plate <br /> in an extraordinary way.
              </Trans>
            </p>
          </div>
        </div>
      </section>

      <section className="hero-split hero-reversed">
        <div className="hero-text">
          <div className="hero-text-inner">
            <h4>
              <Trans>The Story of</Trans>
            </h4>
            <h1>
              <Trans>Our Restaurant</Trans>
            </h1>
            <p>
              <Trans i18nKey="hero.paragraph2">
                Discover a culinary journey with flavors from around the world,<br /> crafted with passion and expertise.
              </Trans>
            </p>
            <button aria-label="Learn More about Our Restaurant" onClick={() => (window.location.href = '/about')}>
              <Trans>Learn More</Trans>
            </button>
          </div>
        </div>
        <div className="hero-image">
          <img src={hero1} alt="A delicious Dessert on display" />
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <GiCoffeeCup className="feature-icon" aria-label="Coffee Icon" />
          <h3>{t('Excellent Coffee')}</h3>
          <p>{t('We offer only the best coffee, sourced from the finest beans.')}</p>
        </div>
        <div className="feature">
          <FaCocktail className="feature-icon" aria-label="Cocktail Icon" />
          <h3>{t('Signature Cocktails')}</h3>
          <p>{t('Our bartenders craft cocktails that delight the senses.')}</p>
        </div>
        <div className="feature">
          <GiForkKnifeSpoon className="feature-icon" aria-label="Cutlery Icon" />
          <h3>{t('Delicious Food')}</h3>
          <p>{t('Fresh ingredients, bold flavors, unforgettable cuisine.')}</p>
        </div>
      </section>

      <section className="feature-meals">
        <h5>
          <Trans>Discover Our</Trans>
        </h5>
        <h2>
          <Trans>Great Flavors</Trans>
        </h2>
        <div className="meal-grid">
          <div className="meal">
            <img src={feat1} loading="lazy" alt={t('Beef tartare')} />
            <h4>
              <Trans>Beef tartare</Trans>
            </h4>
            <p>
              <Trans>Tender chicken accompanied by grilled seasonal vegetables</Trans>
            </p>
            <span>€24</span>
          </div>
          <div className="meal">
            <img src={feat2} loading="lazy" alt={t('Spaghetti Seafood')} />
            <h4>
              <Trans>Spaghetti Seafood</Trans>
            </h4>
            <p>
              <Trans>A mix of fresh seafood and al dente spaghetti in a rich tomato sauce with garlic, white wine, and herbs</Trans>
            </p>
            <span>€26</span>
          </div>
          <div className="meal">
            <img src={feat3} loading="lazy" alt={t('Tournedos Rossini')} />
            <h4>
              <Trans>Tournedos Rossini</Trans>
            </h4>
            <p>
              <Trans>Beef, duck liver escalope, truffle</Trans>
            </p>
            <span>€32</span>
          </div>
          <div className="meal">
            <img src={feat4} loading="lazy" alt={t('Assiette gran caffe')} />
            <h4>
              <Trans>Assiette gran caffe</Trans>
            </h4>
            <p>
              <Trans>Daily Tapas suggestions from chef</Trans>
            </p>
            <span>€20</span>
          </div>
        </div>
        <button
          className="menu-button"
          aria-label="View Full Menu"
          onClick={() => (window.location.href = '/menu')}
        >
          <Trans>View Full Menu</Trans>
        </button>
      </section>

      <section
        className="specials"
        style={{
          backgroundImage: `url(${specialsImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="specials-content">
          <h4>
            <Trans>We Believe</Trans>
          </h4>
          <h2>
            <Trans>Food is Important</Trans>
          </h2>
          <p>
            <Trans>
              At Gran Caffe, we know that every meal is an opportunity to create memories and savor authentic flavors. Join us for an experience
              where each dish is crafted with passion, bringing the essence of the Mediterranean to your table. Taste, connect, and make moments
              that last.
            </Trans>
          </p>
          <button
            aria-label="Book a Table"
            onClick={() => (window.location.href = '/reservation')}
          >
            <Trans>Book a Table</Trans>
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
