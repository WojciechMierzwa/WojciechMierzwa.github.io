import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <ul className="flex justify-around">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/hobbies" className="hover:underline">Hobbies</Link></li>
        <li><Link to="/fav-movie" className="hover:underline">Favorite Movie</Link></li>
        <li><Link to="/contact" className="hover:underline">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
