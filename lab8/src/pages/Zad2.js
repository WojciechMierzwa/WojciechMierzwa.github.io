import React from 'react';
import HandleClick from '../components/HandleClick';
import HandleMouseOver from '../components/HandleMouseOver';
import ShowImage from '../components/ShowImage';
import LoadDataFromJson from '../components/LoadDataFromJson';
import UploadFile from '../components/UploadFile';
import ChangeStyle from '../components/ChangeStyle';

function Zad2() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Interakcje użytkownika</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Komponenty */}
        <HandleClick />
        <HandleMouseOver />
        <ShowImage /> {/* Wywołanie ShowImage */}
        <LoadDataFromJson />
        <UploadFile />
        <ChangeStyle />
      </div>
    </div>
  );
}

export default Zad2;
