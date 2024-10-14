import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FlowerRain1 from './Flowers/FlowerRain1'; 
import FlowerRain2 from './Flowers/FlowerRain2'; 
import FlowerRain3 from './Flowers/FlowerRain3'; 

const HomePage = () => {
  const navigate = useNavigate(); // Hook para la navegación
  const [showFlowers, setShowFlowers] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Estado para cargar

  // Función para mostrar las flores
  const handleClick = () => {
    setShowFlowers(true);
    setTimeout(() => setShowFlowers(false), 5000); // Esconder después de 5 segundos
  };

  // Función para redirigir a la página de citas
  const goToAppointmentPage = () => {
    setIsLoading(true); // Muestra el estado de "Cargando..."
    setTimeout(() => {
      setIsLoading(false); // Resetea el estado
      navigate('/appointment'); // Redirige a la página de citas después de un tiempo
    }, 1000); // Retraso antes de la navegación
  };

  // Función para redirigir a otra página
  const goToAnotherPage = () => {
    setIsLoading(true); // Muestra el estado de "Cargando..."
    setTimeout(() => {
      setIsLoading(false); // Resetea el estado
      navigate('/ideas'); // Redirige a otra página después de un tiempo
    }, 1000); // Retraso antes de la navegación
  };

  return (
    <div className="relative flex flex-col items-center bg-[#F7F7F7] rounded-lg shadow-xl p-10 max-w-xl mx-auto">
      {/* Muestra las flores si showFlowers es verdadero */}
      {showFlowers && <FlowerRain1 />}
      {showFlowers && <FlowerRain2 />}
      {showFlowers && <FlowerRain3 />}

      <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 text-5xl">
        🪷
      </div>

      <h1 className="text-4xl font-bold text-[#8D6A55] mb-4 cursor-default">¡Bienvenid@!</h1>
      <h2 className="text-lg text-[#8AA399] mb-6 cursor-default">¿Qué deseas hacer?</h2>

      <div className="flex flex-col space-y-4 w-full">
        <button 
          onClick={goToAppointmentPage} 
          className="bg-[#da9985] text-white w-full px-6 py-3 rounded-lg border border-white shadow hover:bg-[#C77A5D] transition duration-300 transform hover:scale-105"
        >
          Invitar a una cita
        </button>

        <button 
          onClick={goToAnotherPage} 
          className="bg-[#e5ae6e] text-white w-full px-6 py-3 rounded-lg border border-white shadow hover:bg-[#E3AC78] transition duration-300 transform hover:scale-105"
        >
          Ideas de citas
        </button>

        <button 
          onClick={handleClick} 
          className="bg-[#aaae8d] text-white w-full px-6 py-3 rounded-lg border border-white shadow hover:bg-[#769087] transition duration-300 transform hover:scale-105"
        >
          ¡Flores!
        </button> 
      </div>

      {/* Notificación de Cargando en la esquina superior derecha */}
      {isLoading && (
        <div className="fixed top-5 right-5 bg-[#D98E72] text-white p-3 rounded-lg shadow-md z-50 w-auto">
          Cargando...
        </div>
      )}
    </div>
  );
};

export default HomePage;
