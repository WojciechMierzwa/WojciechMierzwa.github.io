import React, { useState } from "react";

const ValidCounter = () => {
  const [counter, setCounter] = useState(0); 

  const handleClick = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-6 border border-green-400 rounded-md shadow-md">
      <h1 className="text-xl font-bold text-green-500">Prawidłowy licznik</h1>
      <p className="text-lg">Wartość licznika: {counter}</p>
      <button
        onClick={handleClick}
        className="px-6 py-2 bg-green-500 text-white font-medium rounded-md hover:bg-green-600"
      >
        Zwiększ licznik
      </button>
    </div>
  );
};

export default ValidCounter;
