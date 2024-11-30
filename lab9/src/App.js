import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './lab9/components/Navbar';
import Footer from './lab9/components/Footer';

// lab9
import Home from './lab9/pages/Home';
import Hobbies from './lab9/pages/Hobbies';
import FavMovie from './lab9/pages/FavMovie';
import Contact from './lab9/pages/Contact';
import NotFound from './lab9/pages/NotFound';

// lab7
import Lab7Zad1 from './lab7/pages/Zad1';
import Lab7Zad2 from './lab7/pages/Zad2';

// lab8
import Lab8Zad1 from './lab8/pages/Zad1';
import Lab8Zad2 from './lab8/pages/Zad2';

function App() {
  return (
    <Router> {/* Brak basename, bo HashRouter nie wymaga basename */}
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hobbies" element={<Hobbies />} />
            <Route path="/fav-movie" element={<FavMovie />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/lab7Zad1" element={<Lab7Zad1 />} />
            <Route path="/lab7Zad2" element={<Lab7Zad2 />} />
            <Route path="/lab8Zad1" element={<Lab8Zad1 />} />
            <Route path="/lab8Zad2" element={<Lab8Zad2 />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
