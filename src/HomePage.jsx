import React, { useState } from 'react';
import FlowerRain from './Flowers/FlowerRain'; // Asegúrate de que la ruta sea correcta

const HomePage = ({ onYesClick, onNoClick }) => {
  const [showFlowers, setShowFlowers] = useState(false);

  const handleClick = () => {
    setShowFlowers(true);
    setTimeout(() => setShowFlowers(false), 5000); // Esconder después de 5 segundos
  };

  return (
    <div className="flex flex-col items-center bg-[#F7F7F7] rounded-lg shadow-xl p-10 max-w-xl mx-auto relative">
      {/* Aquí puedes agregar el componente de lluvia de flores */}
      {showFlowers && <FlowerRain />}

      <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 text-5xl">
      🪷
      </div>

      <h1 className="text-4xl font-bold text-[#8B7B5A] mb-4 cursor-default">¡Bienvenid@!</h1>

      <h2 className='text-lg text-[#D36E8E] mb-6 cursor-default'>¿Qué deseas hacer?</h2>

      <div className="flex flex-col space-y-4 w-full">

        <button 
          onClick={onYesClick} 
          className="bg-[#D36E8E] text-white w-full px-6 py-3 rounded-lg border border-white shadow hover:bg-[#B0546F] transition duration-300 transform hover:scale-105"
        >
          Invitar a una cita
        </button>

        <button 
  onClick={onNoClick} 
  className="bg-[#FF8B9B] text-white w-full px-6 py-3 rounded-lg border border-white shadow hover:bg-[#FF6A7B] transition duration-300 transform hover:scale-105"
>
  Ideas de citas
</button>



        {/* Botón rosa que provoca la lluvia de flores */}
        <button 
          onClick={handleClick} 
          className="bg-[#8B7B5A] text-white w-full px-6 py-3 rounded-lg border border-white shadow hover:bg-[#7A6B4A] transition duration-300 transform hover:scale-105"
        >
          ¡Flores!
        </button>

      </div>
    </div>
  );
};

export default HomePage;
