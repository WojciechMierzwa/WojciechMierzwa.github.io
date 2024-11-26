import React from 'react';

function CharacterCard({ name, role, image }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6 m-4">
      <img className="w-full h-48 object-cover mb-4" src={image} alt={`${name} - ${role}`} />
      <div className="px-6 py-4">
        <h2 className="font-bold text-2xl mb-2">{name}</h2>
        <p className="text-gray-700 text-base"><strong>Rola:</strong> {role}</p>
      </div>
    </div>
  );
}

export default CharacterCard;
