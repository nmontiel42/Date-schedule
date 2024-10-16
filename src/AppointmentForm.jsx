import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import emailAlert from './assets/emailAlert'; // Asegúrate de que la ruta sea correcta
import { useNavigate } from 'react-router-dom';

const AppointmentForm = () => {
  const navigate = useNavigate(); // Hook para la navegación
  const [nombre1, setNombre1] = useState('');
  const [nombre2, setNombre2] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [myMail, setMyMail] = useState('');
  const [idea, setIdea] = useState('');
  const [userMail, setUserMail] = useState('');
  const [notification, setNotification] = useState({ message: '', type: '', visible: false });
  const [isLoading, setIsLoading] = useState(false); // Nuevo estado para gestionar la carga

  // Inicializa EmailJS con tu User ID
  emailjs.init("Blv9Mk9RLGdaplRur");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true); // Establece el estado de carga en verdadero

    const templateParamsForMe = {
      nombre1,
      nombre2,
      fecha,
      hora,
      idea,
      myMail
    };
    
    const templateParamsForUser = {
      nombre1,
      nombre2,
      fecha,
      hora,
      idea,
      userMail
    };

    // Enviar correos con sus respectivas alertas
    emailAlert(templateParamsForMe, templateParamsForUser, setNotification);

    // Limpia los campos a rellenar
    setTimeout(() => {
      setIsLoading(false); // Establece el estado de carga en falso después del temporizador
      setNombre1('');
      setNombre2('');
      setMyMail('');
      setUserMail('');
      setFecha('');
      setHora('');
      setIdea('');
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <form onSubmit={handleSubmit} className="bg-[#F7F7F7] rounded-3xl shadow-xl p-6 w-full max-w-xl">

        {/* Formulario a rellenar */}
        <div className="flex flex-col space-y-3 mb-4">

          <label className='cursor-default text-[#D98E72]'>¿Cómo te llamas?</label>
          <input
            className="rounded-lg border-2 border-[#E3AC75] p-3 focus:outline-none focus:ring-2 focus:ring-[#D98E72] transition duration-200"
            type="text"
            id="nombre1"
            placeholder="Tu nombre"
            value={nombre1}
            onChange={(e) => setNombre1(e.target.value)}
            required
          />

          <label className='cursor-default text-[#D98E72]'>¿Cuál es tu correo?</label>
          <input
            className="rounded-lg border-2 border-[#E3AC75] p-3 focus:outline-none focus:ring-2 focus:ring-[#D98E72] transition duration-200"
            type="email"
            id="userMail"
            placeholder="Tu correo"
            value={userMail}
            onChange={(e) => setUserMail(e.target.value)}
            required
          />

          <label className='text-[#D98E72]'>¿A quién le pides una cita?</label>
          <input
            className="rounded-lg border-2 border-[#E3AC75] p-3 focus:outline-none focus:ring-2 focus:ring-[#D98E72] transition duration-200"
            type="text"
            id="nombre2"
            placeholder="Su nombre"
            value={nombre2}
            onChange={(e) => setNombre2(e.target.value)}
            required
          />

          <label className='text-[#D98E72]'>¿Cuál es el correo de tu cita?</label>
          <input
            className="rounded-lg border-2 border-[#E3AC75] p-3 focus:outline-none focus:ring-2 focus:ring-[#D98E72] transition duration-200"
            type="email"
            id="myMail"
            placeholder="Su correo"
            value={myMail}
            onChange={(e) => setMyMail(e.target.value)}
            required
          />

          <label className='cursor-default text-[#D98E72]'>¿Qué día?</label>
          <input
            className="rounded-lg border-2 border-[#E3AC75] p-3 focus:outline-none focus:ring-2 focus:ring-[#D98E72] transition duration-200 cursor-pointer"
            type="date"
            id="fecha"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />

          <label className='cursor-default text-[#D98E72]'>¿A qué hora?</label>
          <input
            className="rounded-lg border-2 border-[#E3AC75] p-3 focus:outline-none focus:ring-2 focus:ring-[#D98E72] transition duration-200 cursor-pointer"
            type="time"
            id="hora"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
          />

        </div>

        <div>
          <label className='cursor-default text-[#D98E72]'>¿Tienes alguna idea en mente?</label>
          <input
            className='w-full h-24 rounded-lg border-2 border-[#E3AC75] p-3 focus:outline-none focus:ring-2 focus:ring-[#D98E72] transition duration-200 pt-4 pb-4 mt-4' 
            type="text"
            id="idea"
            placeholder='Describe la cita aquí'
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            required
          />
        </div>

        {/* Botones */}
        <div className='flex justify-between items-center'>

          <button 
            type="button" 
            onClick={() => navigate(-1)} // Cambia onClick para usar navigate
            className="mt-2 text-sm text-[#8AA399] hover:underline ml-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 active:scale-95"
          >
            Atrás
          </button>

          {isLoading && (
            <div className="mt-4 text-center text-[#8AA399]">
              Cargando...
            </div>
          )}

          <button type="submit" className="mt-4 rounded-lg bg-[#D98E72] text-white py-2 px-4 hover:bg-[#C77A5D] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 active:scale-95">
            Agendar
          </button>

        </div>

        {/* Notificación de envío */}
        {notification.visible && (
          <div className={`notification ${notification.type}`}>
            {notification.message}
          </div>
        )}

      </form>
    </div>
  );
};

export default AppointmentForm;
