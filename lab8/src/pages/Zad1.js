import React from 'react';
import InvalidCounter from '../components/InvalidCounter';
import ValidCounter from '../components/ValidCounter';

function Zad1() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Liczniki</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        <InvalidCounter />
        <ValidCounter />
      </div>
    </div>
  );
}

export default Zad1;
