import React, { useState } from 'react';
import HomePage from './HomePage';
import AppointmentForm from './AppointmentForm';
import './index.css';

function App() {
  const [isAppointmentPage, setIsAppointmentPage] = useState(false);

  const handleYesClick = () => {
    setIsAppointmentPage(true);
  };

  const handleNoClick = () => {
    alert("No puedes decir no :)");
  };

  const handleReturn = () => {
    setIsAppointmentPage(false);
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-tl from-green-200 to-purple-300 h-screen items-center"
     style={{
       backgroundImage: 'url(/731a5dd697afa69c26ffaa57c7b7008e.png)',
       backgroundSize: 'cover', // Cambia esto para cubrir el área completa
       backgroundPosition: 'center', // Centra la imagen
       backgroundBlendMode: 'overlay', // Combina el degradado y la imagen
     }}>
  
      {isAppointmentPage ? (
        <AppointmentForm onBack={handleReturn} />
      ) : (
        <HomePage onYesClick={handleYesClick} onNoClick={handleNoClick} />
      )}
    </div>
  );
  
  
}

export default App;

