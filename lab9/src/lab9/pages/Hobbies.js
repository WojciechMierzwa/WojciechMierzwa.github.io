import React from 'react';

function Hobbies() {
  const hobbies = ['Programowanie', 'Gry komputerowe', 'Czytanie książek', 'Wycieczki rowerowe'];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600">Moje Zainteresowania</h1>
      <ul className="mt-4 text-lg text-gray-700">
        {hobbies.map((hobby, index) => (
          <li key={index} className="py-1">{hobby}</li>
        ))}
      </ul>
    </div>
  );
}

export default Hobbies;
