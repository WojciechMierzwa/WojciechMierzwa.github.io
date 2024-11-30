import React from 'react';

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600">O mnie</h1>
      <p className="text-gray-700 mt-4 text-lg text-center max-w-xl">
        Cześć! Nazywam się Wojciech Mierzwa i jestem studentem ANS w Elblągu, obecna strona jest realizacją laboratoriów z przedmiotu "Języki wysokiego poziomu w aplikacjach internetowych". Zapraszam do przeglądania.
      </p>
    </div>
  );
}

export default Home;
