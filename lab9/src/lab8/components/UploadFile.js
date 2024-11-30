import React, { useState } from 'react';

const UploadFile = ({ onFileUpload }) => {
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl); // Ustawiamy URL obrazka w stanie lokalnym
      if (onFileUpload) {
        onFileUpload(imageUrl); // Wywołanie funkcji przekazanej przez rodzica, aby zaktualizować główny stan
      }
    }
  };

  return (
    <div className="mb-4">
      <input 
        type="file" 
        accept="image/*" 
        onChange={handleFileChange} 
        className="p-2 border rounded"
      />
      {uploadedImage && (
        <div className="mt-4">
          <h3>Załadowany obrazek:</h3>
          <img src={uploadedImage} alt="Załadowany obrazek" className="mt-4 rounded-lg shadow-md max-w-xs" />
        </div>
      )}
    </div>
  );
};

export default UploadFile;
