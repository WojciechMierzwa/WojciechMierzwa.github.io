import React from 'react';

const ShowImage = ({ image }) => {
  const defaultImage = 'https://www.opengift.pl/f/7dfe63a2f9de0b8ad5bd2564f1bdaaef35881792/500/gumowa-kaczka-do-kapieli-zolty-V7978-08.jpg'; 

  return (
    <div className="mt-4">
      {image ? (
        <div>
          <h2 className="text-xl font-semibold">Załadowany obrazek:</h2>
          <img src={image} alt="Załadowany obrazek" className="mt-4 rounded-lg shadow-md max-w-xs" />
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-semibold">Przykładowy obrazek:</h2>
          <img src={defaultImage} alt="Przykładowy obrazek" className="mt-4 rounded-lg shadow-md max-w-xs" />
        </div>
      )}
    </div>
  );
};

export default ShowImage;
