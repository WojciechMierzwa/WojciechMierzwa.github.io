import React, { useState, useReducer, useEffect, useContext, useRef, createContext } from 'react';

const CharacterContext = createContext();

export function CharacterProvider({ children }) {
  const [characters, setCharacters] = useState([
    { name: 'Jett', role: 'Duelist' },
    { name: 'Sage', role: 'Sentinel' }
  ]);
  
  return (
    <CharacterContext.Provider value={{ characters, setCharacters }}>
      {children}
    </CharacterContext.Provider>
  );
}

function useCharacterContext() {
  return useContext(CharacterContext);
}

function characterReducer(state, action) {
  switch (action.type) {
    case 'ADD_CHARACTER':
      return [...state, action.payload];
    case 'REMOVE_CHARACTER':
      return state.filter((_, index) => index !== action.payload);
    default:
      return state;
  }
}

function Zad2() {
  const [newCharacter, setNewCharacter] = useState({ name: '', role: '' });

  const [characterList, dispatch] = useReducer(characterReducer, []);

  const nameRef = useRef();
  const roleRef = useRef();

  const { characters, setCharacters } = useCharacterContext();

  useEffect(() => {
    console.log('Zad2 załadowany');
    const timer = setTimeout(() => {
      setCharacters([
        { name: 'Brimstone', role: 'Controller' },
        { name: 'Phoenix', role: 'Duelist' }
      ]);
    }, 1000);
    return () => clearTimeout(timer); 
  }, [setCharacters]);

  const handleAddCharacter = () => {
    dispatch({ type: 'ADD_CHARACTER', payload: { ...newCharacter } });
    setNewCharacter({ name: '', role: '' });
  };

  const handleRefAddCharacter = () => {
    dispatch({
      type: 'ADD_CHARACTER',
      payload: { name: nameRef.current.value, role: roleRef.current.value }
    });
    nameRef.current.value = '';
    roleRef.current.value = '';
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Przykłady Hooków w Zad2</h1>

      {/*useState*/}
      <div className="mb-8">
        <h2 className="text-xl font-bold">useState</h2>
        <input 
          value={newCharacter.name}
          onChange={(e) => setNewCharacter({ ...newCharacter, name: e.target.value })}
          placeholder="Imię"
          className="border p-2 mr-2"
        />
        <input 
          value={newCharacter.role}
          onChange={(e) => setNewCharacter({ ...newCharacter, role: e.target.value })}
          placeholder="Rola"
          className="border p-2 mr-2"
        />
        <button onClick={handleAddCharacter} className="bg-blue-500 text-white p-2">
          Dodaj Postać
        </button>
      </div>

      {/*useReducer */}
      <div className="mb-8">
        <h2 className="text-xl font-bold">useReducer</h2>
        <ul>
          {characterList.map((character, index) => (
            <li key={index}>
              {character.name} - {character.role}
              <button
                onClick={() => dispatch({ type: 'REMOVE_CHARACTER', payload: index })}
                className="text-red-500 ml-2"
              >
                Usuń
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* useRef */}
      <div className="mb-8">
        <h2 className="text-xl font-bold">useRef</h2>
        <input ref={nameRef} placeholder="Imię" className="border p-2 mr-2" />
        <input ref={roleRef} placeholder="Rola" className="border p-2 mr-2" />
        <button onClick={handleRefAddCharacter} className="bg-green-500 text-white p-2">
          Dodaj Postać przez useRef
        </button>
      </div>

      {/*useContext*/}
      <div className="mb-8">
        <h2 className="text-xl font-bold">useContext</h2>
        <ul>
          {characters.map((character, index) => (
            <li key={index}>{character.name} - {character.role}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}


function Zad2Wrapper() {
  return (
    <CharacterProvider>
      <Zad2 />
    </CharacterProvider>
  );
}

export default Zad2Wrapper;
