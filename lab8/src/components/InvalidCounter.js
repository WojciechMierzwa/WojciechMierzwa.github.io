import React from "react";

let counter = 0;

const InvalidCounter = () => {
  const handleClick = () => {
    counter++; 
    console.log("Nieprawidłowy licznik:", counter); 
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-6 border border-red-400 rounded-md shadow-md">
      <h1 className="text-xl font-bold text-red-500">Nieprawidłowy licznik</h1>
      <p className="text-lg">Wartość licznika: {counter}</p>
      <button
        onClick={handleClick}
        className="px-6 py-2 bg-red-500 text-white font-medium rounded-md hover:bg-red-600"
      >
        Zwiększ licznik
      </button>
    </div>
  );
};

export default InvalidCounter;
