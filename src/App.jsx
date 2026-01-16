import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { GalleryProvider } from './context/GalleryContext';
import { TrainerProvider } from './context/TrainerContext';

import Home from './pages/Home';
import About from './pages/About';
import Trainers from './pages/Trainers';
import Membership from './pages/Membership';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Admin from './pages/Admin';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <GalleryProvider>
      <TrainerProvider>
        <Router>
          <ScrollToTop />
          <div className="bg-dark-900 min-h-screen text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
              <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gold-400/5 rounded-full blur-[100px]" />
              <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-gold-400/5 rounded-full blur-[100px]" />
            </div>

            <Navbar />

            <main className="relative z-10">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/trainers" element={<Trainers />} />
                <Route path="/membership" element={<Membership />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin" element={<Admin />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </Router>
      </TrainerProvider>
    </GalleryProvider>
  );
}

export default App;
