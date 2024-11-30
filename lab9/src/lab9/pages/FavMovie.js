import React from 'react';

function FavMovie() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-blue-600">Ulubiony Film</h1>
      <p className="text-gray-700 mt-4 text-lg text-center max-w-xl">
        Moim ulubionym filmem jest <strong>Poszukiwany, poszukiwana</strong>. Uwielbiam jego ścieżkę dźwiękową i klimat tamtych czasów. Jeden z polskich klasyków filmowych.
      </p>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWFvR-34OFphoZg2X3Mvfp0vXNwrDQG69y9w&s" 
        alt="Plakat filmu Poszukiwany, poszukiwana"
        className="mt-6 rounded-lg shadow-lg max-w-xs md:max-w-md"
      />
    </div>
  );
}

export default FavMovie;
