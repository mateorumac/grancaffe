import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import Reservation from './components/Reservation';
import PrivateHire from './pages/PrivateHire';
import Events from './pages/Events';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/private-hire" element={<PrivateHire />} />
        <Route path="/events" element={<Events />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
