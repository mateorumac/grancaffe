// Header.js
import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Header.css';
import logo from '../assets/logo.jpeg';
import { FaGlobe, FaBars } from 'react-icons/fa';

function Header() {
  const { t, i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const navigate = useNavigate();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsDropdownOpen(false);
  };

  // Position dropdown below the button dynamically
  useEffect(() => {
    if (isDropdownOpen && buttonRef.current && dropdownRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      dropdownRef.current.style.top = `${buttonRect.bottom + 10}px`;
      dropdownRef.current.style.left = `${buttonRect.left}px`;
    }
  }, [isDropdownOpen]);

  return (
    <header className="header">
      <nav className="navbar">
        {/* Logo leading to landing page */}
        <Link to="/" className="logo">
          <img src={logo} alt="Restaurant Logo" />
        </Link>

        {/* Navigation Links */}
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li><Link to="/">{t('Home')}</Link></li>
          <li><Link to="/about">{t('About Us')}</Link></li>
          <li><Link to="/menu">{t('Menu')}</Link></li> {/* New Menu Link */}
          <li><Link to="/gallery">{t('Gallery')}</Link></li>
          <li><Link to="/contact">{t('Contact')}</Link></li>
        </ul>

        {/* Book a Table Button */}
        <button
          className="book-button"
          onClick={() => navigate('/reservation')}
        >
          {t('Book Now')}
        </button>

        {/* Language Dropdown with Icon */}
        <div className="language-selector">
          <button
            ref={buttonRef}
            onClick={() => setIsDropdownOpen((prev) => !prev)}
            className="language-icon"
          >
            <FaGlobe />
          </button>
          {isDropdownOpen && (
            <div ref={dropdownRef} className="dropdown-menu">
              <button onClick={() => changeLanguage('en')}>English</button>
              <button onClick={() => changeLanguage('fr')}>Français</button>
              <button onClick={() => changeLanguage('it')}>Italiano</button>
            </div>
          )}
        </div>

        {/* Hamburger Menu Icon for Mobile */}
        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <FaBars />
        </button>
      </nav>
    </header>
  );
}

export default Header;
