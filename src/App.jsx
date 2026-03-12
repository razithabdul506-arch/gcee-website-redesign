import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Marquee from './components/Marquee';

import Hero from './sections/Hero';
import About from './sections/About';
import Departments from './sections/Departments';
import News from './sections/News';
import Events from './sections/Events';
import Placements from './sections/Placements';
import Contact from './sections/Contact';
import CivilEngineering from './sections/CivilEngineering';
import AutomobileEngineering from './sections/AutomobileEngineering';
import MechanicalEngineering from './sections/MechanicalEngineering';
import ElectricalEngineering from './sections/ElectricalEngineering';
import ECEEngineering from './sections/ECEEngineering';
import CSEEngineering from './sections/CSEEngineering';
import CSEDataScience from './sections/CSEDataScience';
import InformationTechnology from './sections/InformationTechnology';

function App() {
  return (
    <Router>
      <div className="bg-slate-50 min-h-screen selection:bg-gold-500/30 selection:text-gold-700 text-slate-800">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Marquee />
              <About />
              <Departments />
              <News />
              <Events />
              <Placements />
              <Contact />
            </>
          } />
          <Route path="/departments/civil" element={<CivilEngineering />} />
          <Route path="/departments/automobile" element={<AutomobileEngineering />} />
          <Route path="/departments/mechanical" element={<MechanicalEngineering />} />
          <Route path="/departments/electrical" element={<ElectricalEngineering />} />
          <Route path="/departments/ece" element={<ECEEngineering />} />
          <Route path="/departments/cse" element={<CSEEngineering />} />
          <Route path="/departments/cse-ds" element={<CSEDataScience />} />
          <Route path="/departments/it" element={<InformationTechnology />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;