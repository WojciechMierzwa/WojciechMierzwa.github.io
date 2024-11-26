import React from 'react';

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600">O mnie</h1>
      <p className="text-gray-700 mt-4 text-lg text-center max-w-xl">
        Cześć! Jestem programistą, który uwielbia tworzyć aplikacje w React. W tej aplikacji znajdziesz moje zainteresowania, ulubiony film oraz formularz kontaktowy.
      </p>
    </div>
  );
}

export default Home;
