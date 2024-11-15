
import Home from '../src/components/Home';
import Projects from '../src/components/Project';
import Resume from '../src/components/Resume';
import Contact from '../src/components/Contact';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <div>
        <nav className="w-full flex justify-between items-center p-6 bg-black bg-opacity-50 shadow-lg fixed top-0 z-10">
          <h1 className="text-2xl font-bold text-white">MAHENDRAN</h1>
          <div className="flex space-x-6">
            <Link to="/" className="bg-blue-500 text-white p-2 rounded-md ">Home</Link>
            <Link to="/projects" className="bg-blue-500 text-white p-2 rounded-md">Projects</Link>
            <Link to="/resume" className="bg-blue-500 text-white p-2 rounded-md">Resume</Link>
            <Link to="/contact" className="bg-blue-500 text-white p-2 rounded-md">Contact</Link>
            </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

// Box-shadow: 0 0 5px #4deeea; transition:0.5s; button:hover box-shadow: 0 0 5px #4deeea, 0 0 25px ,0 0 50px,0 0 100px.  convert tailwindcss