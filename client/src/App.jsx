import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';

import Landing from './pages/Landing/Landing';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Dashboard from './pages/Landing/JimPages/Dashboard';
import Hero from './pages/Landing/Hero';
import About from './pages/About/About';
import Companies from './pages/Companies/Companies';

const App = () => {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/companies" element={<Companies/>} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer /> 
    </Router>
  );
};

export default App;