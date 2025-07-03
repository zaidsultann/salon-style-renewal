import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Home from './Home';
import Services from './Services';
import Gallery from './Gallery';
import Contact from './Contact';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop'; // 👈 adjust the path as needed

const Index = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Navigation />
      <ScrollToTop /> {/* 👈 This handles scrolling to top on route change */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Index;
