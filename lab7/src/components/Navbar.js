import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4">
      <ul className="flex space-x-4 text-white">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/zad1" className="hover:underline">Zad1</Link></li>
        <li><Link to="/zad2" className="hover:underline">Zad2</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
