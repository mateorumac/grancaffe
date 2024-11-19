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
    if (lang === 'en') {
      i18n.changeLanguage('en'); 
    } else {
      i18n.changeLanguage(lang);
    }
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="header" aria-label="Main navigation">
      <nav className="navbar">
        <Link to="/" className="logo">
          <img src={logo} alt="Gran Caffe Restaurant Logo" />
        </Link>
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li><Link to="/" onClick={() => setIsMenuOpen(false)}>{t('Home')}</Link></li>
          <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>{t('About Us')}</Link></li>
          <li><Link to="/menu" onClick={() => setIsMenuOpen(false)}>{t('Menu')}</Link></li> 
          <li><Link to="/gallery" onClick={() => setIsMenuOpen(false)}>{t('Gallery')}</Link></li>
          <li><Link to="/events" onClick={() => setIsMenuOpen(false)}>{t('Events')}</Link></li>
          <li><Link to="/private-hire" onClick={() => setIsMenuOpen(false)}>{t('Private Hire')}</Link></li>
          <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>{t('Contact')}</Link></li>

        </ul>
        <button
          className="book-button"
          onClick={() => navigate('/reservation')}>
          {t('Book Now')}
        </button>
        <div className="icons-group">
        <button
          ref={buttonRef}
          aria-haspopup="true"
          aria-expanded={isDropdownOpen}
          aria-label="Select language"
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
          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <FaBars />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
