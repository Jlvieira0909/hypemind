import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './Pages/Projects/Projects';
import Welcome from './Pages/Welcome/Welcome';
import AboutUs from './Pages/AboutUs/AboutUs';
import Creator from './Pages/Creator/Creator';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/creator" element={<Creator />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/" element={<Welcome />} />
      </Routes>
    </Router>
  );
}

export default App;
