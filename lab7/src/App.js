import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Zad1 from './pages/Zad1';
import Zad2 from './pages/Zad2';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/zad1" element={<Zad1 />} />
          <Route path="/zad2" element={<Zad2 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
