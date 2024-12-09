import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Competences from './pages/about/Competences';
import Projets from './pages/Projets';
import NotFound from './pages/NotFound';
import About from './pages/about/About';
import Formations from './pages/about/Formations';
import Experience from './pages/about/Experiences';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/compétences" element={<Competences />} />
        <Route path="/about/formations" element={<Formations />} />
        <Route path="/about/expériences" element={<Experience />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
