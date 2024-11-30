import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const renderLinksForLab = (labNumber) => {
    return (
      <ul className="flex flex-col md:flex-row gap-4 items-center">
        <li>
          <Link
            to={`/lab${labNumber}Zad1`}
            className={`hover:bg-blue-700 px-3 py-2 rounded text-sm md:text-base ${currentPath === `/lab9/lab${labNumber}Zad1` ? 'bg-blue-700' : ''}`}
          >
            Zad1
          </Link>
        </li>
        <li>
          <Link
            to={`/lab${labNumber}Zad2`}
            className={`hover:bg-blue-700 px-3 py-2 rounded text-sm md:text-base ${currentPath === `/lab9/lab${labNumber}Zad2` ? 'bg-blue-700' : ''}`}
          >
            Zad2
          </Link>
        </li>
      </ul>
    );
  };

  const renderLinks = () => {
    if (currentPath.startsWith('/lab7')) {
      return renderLinksForLab(7);
    } else if (currentPath.startsWith('/lab8')) {
      return renderLinksForLab(8);
    }

    return (
      <ul className="flex flex-col md:flex-row gap-4 items-center">
        <li>
          <Link
            to="/"
            className={`hover:bg-blue-700 px-3 py-2 rounded text-sm md:text-base ${currentPath === '/lab9/' ? 'bg-blue-700' : ''}`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/hobbies"
            className={`hover:bg-blue-700 px-3 py-2 rounded text-sm md:text-base ${currentPath === '/lab9/hobbies' ? 'bg-blue-700' : ''}`}
          >
            Hobbies
          </Link>
        </li>
        <li>
          <Link
            to="/fav-movie"
            className={`hover:bg-blue-700 px-3 py-2 rounded text-sm md:text-base ${currentPath === '/lab9/fav-movie' ? 'bg-blue-700' : ''}`}
          >
            Favorite Movie
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={`hover:bg-blue-700 px-3 py-2 rounded text-sm md:text-base ${currentPath === '/lab9/contact' ? 'bg-blue-700' : ''}`}
          >
            Contact
          </Link>
        </li>
      </ul>
    );
  };

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto p-4 flex flex-col md:flex-row justify-between items-center">
        {/* Link Section: Lab Navigation */}
        <ul className="flex flex-col md:flex-row gap-4 items-center">
          <li>
            <Link
              to="lab7Zad1"
              className={`hover:bg-blue-700 px-3 py-2 rounded text-sm md:text-base ${currentPath.startsWith('/lab9/lab7') ? 'bg-blue-700' : ''}`}
            >
              Lab7
            </Link>
          </li>
          <li>
            <Link
              to="lab8Zad1"
              className={`hover:bg-blue-700 px-3 py-2 rounded text-sm md:text-base ${currentPath.startsWith('/lab9/lab8') ? 'bg-blue-700' : ''}`}
            >
              Lab8
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className={`hover:bg-blue-700 px-3 py-2 rounded text-sm md:text-base ${currentPath === '/lab9/' ? 'bg-blue-700' : ''}`}
            >
              Lab9
            </Link>
          </li>
        </ul>

        {/* Render additional links based on the current path */}
        {renderLinks()}
      </div>
    </nav>
  );
}

export default Navbar;
