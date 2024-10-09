import React from 'react';

const HomePage = ({ onYesClick, onNoClick }) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl mb-4">¿Quieres una cita?</h2>
      <div className="flex space-x-4">
        <button 
          onClick={onYesClick} 
          className="rounded-lg bg-green-500 text-white py-2 px-4"
        >
          Sí
        </button>
        <button 
          onClick={onNoClick} 
          className="rounded-lg bg-red-500 text-white py-2 px-4"
        >
          No
        </button>
      </div>
    </div>
  );
};

export default HomePage;
