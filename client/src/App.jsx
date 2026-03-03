import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';

// Pages
import Landing from './pages/Landing/Landing';

// Components
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

// Auth
import SignupPage from './Auth/Signup';
import LoginPage from './Auth/Login';
import Dashboard from './pages/Landing/JimPages/Dashboard';
import Hero from './pages/Landing/JimPages/Hero';


const App = () => {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/hero" element={<Hero />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer /> 
    </Router>
  );
};

export default App;