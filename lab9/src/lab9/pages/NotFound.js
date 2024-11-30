import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-red-600">404 - Strona nie znaleziona</h1>
      <p className="text-gray-700 mt-4 text-lg">Nie znaleziono strony. Wróć na <Link to="/" className="text-blue-600 hover:underline">stronę główną</Link>.</p>
    </div>
  );
}

export default NotFound;
