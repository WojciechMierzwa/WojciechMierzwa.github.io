import React, { useState } from 'react';

const HandleClick = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div className="p-4">
      <button onClick={handleClick} className="px-4 py-2 bg-blue-500 text-white rounded">
        Kliknij mnie
      </button>
      <p>Wartość licznika: {count}</p>
    </div>
  );
};

export default HandleClick;
