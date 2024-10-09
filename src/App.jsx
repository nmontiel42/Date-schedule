import React, { useState } from 'react';
import emailjs from '@emailjs/browser'; // Importa EmailJS
import './index.css';
import confetti from 'canvas-confetti';

function App() {
  const [nombre1, setNombre1] = useState('');
  const [nombre2, setNombre2] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [myMail, setMyMail] = useState('');
  const [idea, setIdea] = useState('');
  const [isAppointmentPage, setIsAppointmentPage] = useState(false); // Estado para controlar la página actual
  const [userMail, setUserMail] = useState(''); // Nuevo estado para el myMail del destinatario


  // Inicializa EmailJS con tu User ID
  emailjs.init("Blv9Mk9RLGdaplRur");

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Configuración del email a enviar
    const templateParamsForMe = {
      nombre1: nombre1,
      nombre2: nombre2,
      fecha: fecha,
      hora: hora,
      idea: idea,
      myMail: myMail
    };
    
    const templateParamsForUser = {
      nombre1: nombre1,
      nombre2: nombre2,
      fecha: fecha,
      hora: hora,
      idea: idea,
      userMail: userMail
    };
  
    // Enviar el myMail a través de EmailJS
    emailjs.send('service_aadp9gj', 'template_dflzqjo', templateParamsForMe)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Appointment successfully scheduled!');
        confetti();
      }, (error) => {
        console.error('Error sending the mail:', error);
        alert('Error while scheduling the appointment. Please try again.');
      });
  
    emailjs.send('service_aadp9gj', 'template_pt9vx87', templateParamsForUser)
  
    // Limpia todos los campos del formulario
    setNombre1('');
    setNombre2(''); // Asegúrate de limpiar también el campo del nombre de la cita
    setMyMail('');
    setUserMail('');
    setFecha('');
    setHora('');
    setIdea(''); // Asegúrate de limpiar el campo de la idea también
  
    // Si hay otros estados que desees limpiar, añádelos aquí
  };

  // Funciones para cambiar la pantalla
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
    <div className="flex justify-center bg-blue-200 h-screen items-center">

      {isAppointmentPage ? (
        <form onSubmit={handleSubmit} className="bg-blue-400 bg-opacity-60 rounded-2xl shadow-xl p-6 w-full max-w-md">
          <h2 className="text-4xl text-center mb-6">Agendar una cita</h2>

          <div className="flex flex-col space-y-4">

            <p className='cursor-default'>¿Quien eres?</p>

            <input
              className="rounded-lg border-2 border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              id="nombre1"
              placeholder="Tu nombre"
              value={nombre1}
              onChange={(e) => setNombre1(e.target.value)}
              required
            />

            <p className='cursor-default'>¿Cuál es tu myMail? </p>

            <input
              className="rounded-lg border-2 border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="email"
              id="userMail"
              placeholder="Tu correo"
              value={userMail}
              onChange={(e) => setUserMail(e.target.value)} // Actualiza el estado
              required
            />

            <p>Nombre de tu cita</p>
            <input
              className="rounded-lg border-2 border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              id="nombre2"
              placeholder="Su nombre"
              value={nombre2}
              onChange={(e) => setNombre2(e.target.value)}
              required
            />


            <p>¿a quien le pides una cita?</p>
            <input
              className="rounded-lg border-2 border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="email"
              id="myMail"
              placeholder="Su correo"
              value={myMail}
              onChange={(e) => setMyMail(e.target.value)} // Actualiza el estado
              required
            />

            <p className='cursor-default'>¿Que día?</p>

            <input
              className="rounded-lg border-2 border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
              type="date"
              id="fecha"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              required
            />

            <p className='cursor-default'>¿A qué hora?</p>

            <input
              className="rounded-lg border-2 border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
              type="time"
              id="hora"
              value={hora}
              onChange={(e) => setHora(e.target.value)}
              required
            />

          </div>

          <div>
            <p className='mt-3 mb-3 cursor-default'>¿Tienes alguna idea en mente?</p>
            <input
              className='w-full h-20 rounded-lg border-2 border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400'
              type="text"
              id="idea"
              placeholder='Describe la cita aquí'
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              required
            />
           
          </div>

          <div className='flex justify-end'>

            <button type="submit" className="mt-4 rounded-lg bg-blue-500 text-white py-2 px-4 hover:bg-blue-600">
                Agendar
              </button>

            <button type="button" onClick={handleReturn} className="mt-2 text-sm text-blue-500 hover:underline ml-3">
              Atrás
            </button>

          </div>

        </form>

      ) : (

        <div className="flex flex-col items-center">
          <h2 className="text-3xl mb-4">¿Quieres una cita?</h2>
          <div className="flex space-x-4">
            <button 
              onClick={handleYesClick} 
              className="rounded-lg bg-green-500 text-white py-2 px-4"
            >
              Sí
            </button>
            <button 
              onClick={handleNoClick} 
              className="rounded-lg bg-red-500 text-white py-2 px-4"
            >
              No
            </button>
          </div>
        </div>
      )}
      
    </div>
  );
}

export default App;
