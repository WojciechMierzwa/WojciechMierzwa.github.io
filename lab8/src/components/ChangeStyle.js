import React, { useState } from 'react';

const ChangeStyle = () => {
  const [style, setStyle] = useState({
    backgroundColor: 'lightblue',
    color: 'black',
  });

  const changeStyle = () => {
    // Mutowanie obiektu za pomocą spread operatora
    setStyle(prevStyle => ({
      ...prevStyle,
      backgroundColor: prevStyle.backgroundColor === 'lightblue' ? 'lightgreen' : 'lightblue',
      color: prevStyle.color === 'black' ? 'white' : 'black',
    }));
  };

  return (
    <div className="p-4">
      <div
        style={style}
        className="p-4 mb-4 rounded"
      >
        Zmieniony styl tła i koloru
      </div>
      <button onClick={changeStyle} className="px-4 py-2 bg-purple-500 text-white rounded">
        Zmień styl
      </button>
    </div>
  );
};

export default ChangeStyle;
