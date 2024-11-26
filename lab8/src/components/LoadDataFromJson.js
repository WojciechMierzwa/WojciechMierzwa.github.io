import React, { useState } from 'react';

const LoadDataFromJson = () => {
  const [data, setData] = useState(null);

  const loadDataFromJson = () => {
    
    const jsonData = {
      imie: "Kaczuszka",
      gatunek: "Kaczka",
      kolor: "Żółty"
    };
    setData(jsonData);
  };

  return (
    <div className="p-4">
      <button onClick={loadDataFromJson} className="px-4 py-2 bg-yellow-500 text-white rounded">
        Załaduj dane
      </button>
      {data && (
        <div className="mt-4">
          <p>Imię: {data.imie}</p>
          <p>Gatunek: {data.gatunek}</p>
          <p>Kolor: {data.kolor}</p>
        </div>
      )}
    </div>
  );
};

export default LoadDataFromJson;
