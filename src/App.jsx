import React, { useState } from 'react';
import HomePage from './HomePage';
import AppointmentForm from './AppointmentForm';
import AnotherPage from './AnotherPage'; 
import './index.css';

function App() {
  const [isAppointmentPage, setIsAppointmentPage] = useState(false);
  const [isAnotherPage, setIsAnotherPage] = useState(false);

  const handleYesClick = () => {
    setIsAppointmentPage(true);
    setIsAnotherPage(false); 
  };

  const handleNoClick = () => {
    setIsAnotherPage(true);
    setIsAppointmentPage(false); 
  };

  const handleReturn = () => {
    setIsAppointmentPage(false);
    setIsAnotherPage(false);
  };


  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-tl from-green-200 to-purple-300"
      style={{
        backgroundImage: 'url(public/fondo.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
      }}>
      {isAppointmentPage ? (
        <AppointmentForm onBack={handleReturn} />
      ) : isAnotherPage ? (
        <AnotherPage onBack={handleReturn} /> // Renderiza AnotherPage aquí
      ) : (
        <HomePage onYesClick={handleYesClick} onNoClick={handleNoClick} />
      )}
    </div>
  );
}

export default App;
