// Home.js
import React from 'react';
import './Home.css';
import hero1 from '../assets/hero1.jpeg';
function Home() {
  return (
    <div className="home">
      {/* Updated Hero Section */}
      <section className="hero-split">
        <div className="hero-image">
          <img src="hero1.jpeg" alt="Chef preparing food" />
        </div>
        <div className="hero-text">
          <h4>Modern Italian</h4>
          <h1>Fresh Cuisine</h1>
          <p>
            Experience authentic Italian flavors with a modern twist, crafted from the finest ingredients.
          </p>
          <button onClick={() => window.location.href='/about'}>Learn More</button>
        </div>
      </section>


      {/* Features Section */}
      <section className="features">
        <div className="feature">
          <img src="/path-to-icon-1.png" alt="Delicious Pastries" />
          <h3>Delicious Pastries</h3>
          <p>Hand-crafted with the finest ingredients.</p>
        </div>
        <div className="feature">
          <img src="/path-to-icon-2.png" alt="Fresh Juices" />
          <h3>Fresh Juices</h3>
          <p>Perfectly refreshing and nutritious.</p>
        </div>
        <div className="feature">
          <img src="/path-to-icon-3.png" alt="Natural Food" />
          <h3>Natural Food</h3>
          <p>Farm-to-table quality ingredients.</p>
        </div>
        <div className="feature">
          <img src="/path-to-icon-4.png" alt="Tasty Breakfasts" />
          <h3>Tasty Breakfasts</h3>
          <p>Start your day with our delightful options.</p>
        </div>
      </section>

      {/* Feature Meals Section */}
      <section className="feature-meals">
        <div className="meal">
          <img src="/path-to-meal-1.jpg" alt="Special Dish 1" />
          <h4>Special Dish 1</h4>
          <p>A short description of the dish.</p>
          <span>$15</span>
        </div>
        <div className="meal">
          <img src="/path-to-meal-2.jpg" alt="Special Dish 2" />
          <h4>Special Dish 2</h4>
          <p>A short description of the dish.</p>
          <span>$18</span>
        </div>
        <div className="meal">
          <img src="/path-to-meal-3.jpg" alt="Special Dish 3" />
          <h4>Special Dish 3</h4>
          <p>A short description of the dish.</p>
          <span>$20</span>
        </div>
        <button onClick={() => window.location.href='/menu'}>View Full Menu</button>
      </section>

      {/* Specials Section */}
      <section className="specials">
        <h2>We Believe Food is Important</h2>
        <p>Our dishes are carefully crafted to perfection, offering you an unforgettable dining experience.</p>
        <button onClick={() => window.location.href='/reservation'}>Book a Table</button>
      </section>

      {/* Customer Reviews Section */}
      <section className="reviews">
        <h3>What Our Customers Say</h3>
        <div className="review">
          <p>"Fantastic atmosphere and delicious food!"</p>
          <span>- Jane Doe</span>
        </div>
        <div className="review">
          <p>"The best Italian experience in town."</p>
          <span>- John Smith</span>
        </div>
        <div className="review">
          <p>"A perfect blend of ambiance and flavor."</p>
          <span>- Maria Garcia</span>
        </div>
      </section>
    </div>
  );
}

export default Home;
