import React, { useState } from 'react';

const HandleMouseOver = () => {
  const [color, setColor] = useState('black');
  const [message, setMessage] = useState('Najedź na mnie myszką!');

  const handleMouseOver = () => {
    setColor('blue');
    setMessage('Wojciech Mierzwa 20858');
  };

  const handleMouseOut = () => {
    setColor('black');
    setMessage('Najedź na mnie myszką!');
  };

  return (
    <div className="p-4">
      <p
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut} 
        style={{ color }}
        className="text-lg"
      >
        {message}
      </p>
    </div>
  );
};

export default HandleMouseOver;
