import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from '../src/components/Home';
import Projects from '../src/components/Project';
import Resume from '../src/components/Resume';
import Contact from '../src/components/Contact';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
