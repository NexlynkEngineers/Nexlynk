import React from 'react';
import Landing from './pages/Landing/Landing';
import { Routes, Route, BrowserRouter as Router } from 'react-router'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
  );
};

export default App;