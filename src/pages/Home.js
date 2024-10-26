// Home.js
import React from 'react';
import './Home.css';
import hero1 from '../assets/hero1.jpeg';
import hero2 from '../assets/hero2.jpeg';
import hero3 from '../assets/hero3.jpeg';
import feat2 from '../assets/feat2.jpeg';
import feat3 from '../assets/feat3.jpeg';
import feat4 from '../assets/feat4.jpeg';
import specialsImage from '../assets/specials.jpeg'; // Ensure this path and file name are correct
import { GiCoffeeCup, GiForkKnifeSpoon } from 'react-icons/gi';
import { FaBirthdayCake } from 'react-icons/fa';

function Home() {
  return (
    <div className="home">
      {/* Original Hero Section */}
      <section className="hero-split">
        <div className="hero-image">
          <img src={hero1} alt="Chef preparing food" />
        </div>
        <div className="hero-text">
          <h4>Taste the cuisine of the world</h4>
          <h1>Fresh Cuisine</h1>
          <p>
            We are not afraid to experiment. Our chef combines carefully <br />selected ingredients and serves them on your plate <br /> in an extraordinary way.
          </p>
        </div>
      </section>

      {/* Flipped Hero Section */}
      <section className="hero-split hero-reversed">
        <div className="hero-text">
          <h4>The Story of</h4>
          <h1>Our Restaurant</h1>
          <p>
            Discover a culinary journey with flavors from around the world,<br /> crafted with passion and expertise.
          </p>
          <button onClick={() => window.location.href='/about'}>Learn More</button>
        </div>
        <div className="hero-image">
          <img src={hero2} alt="Delicious dish on display" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature">
          <GiCoffeeCup className="feature-icon" />
          <h3>Excellent Coffee</h3>
          <p>We offer only the best coffee, sourced from the finest beans.</p>
        </div>
        <div className="feature">
          <FaBirthdayCake className="feature-icon" />
          <h3>Iconic Cakes</h3>
          <p>Our cakes are made with love for you.</p>
        </div>
        <div className="feature">
          <GiForkKnifeSpoon className="feature-icon" />
          <h3>Delicious Food</h3>
          <p>Original cuisine at will.</p>
        </div>
      </section>

      {/* Feature Meals Section */}
      <section className="feature-meals">
        <h5>Discover Our</h5>
        <h2>Great Flavors</h2>
        <div className="meal-grid">
          <div className="meal">
            <img src={hero3} alt="Black Olive Pizza" />
            <h4>Black Olive Pizza</h4>
            <p>Lorem ipsum dolor sit amet elit the estibulum sit aet purus eu lectus tristique aliquam best.</p>
            <span>$25</span>
          </div>
          <div className="meal">
            <img src={feat2} alt="Caesar Salad" />
            <h4>Caesar Salad</h4>
            <p>Lorem ipsum dolor sit amet elit the estibulum sit aet purus eu lectus tristique aliquam best.</p>
            <span>$15</span>
          </div>
          <div className="meal">
            <img src={feat3} alt="Balsamic Bruschetta" />
            <h4>Balsamic Bruschetta</h4>
            <p>Lorem ipsum dolor sit amet elit the estibulum sit aet purus eu lectus tristique aliquam best.</p>
            <span>$12</span>
          </div>
          <div className="meal">
            <img src={feat4} alt="Italian Pancakes" />
            <h4>Italian Pancakes</h4>
            <p>Lorem ipsum dolor sit amet elit the estibulum sit aet purus eu lectus tristique aliquam best.</p>
            <span>$22</span>
          </div>
        </div>
        <button className="menu-button" onClick={() => window.location.href='/menu'}>View Full Menu</button>
      </section>

      {/* Specials Section with Inline Background Image */}
      <section
        className="specials"
        style={{
          backgroundImage: `url(${specialsImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
        <div className="specials-content">
          <h4>We Believe</h4>
          <h2>Food is Important</h2>
          <p>
            Lorem ipsum dolor sit amet conse ctetur adipiscing elit the
            stibulum sit aet purus eu lectus tristique aliquam best donec
            maximus lacus nllec aroma pastol.
          </p>
          <button onClick={() => window.location.href='/reservation'}>Book a Table</button>
        </div>
      </section>
    </div>
  );
}

export default Home;
