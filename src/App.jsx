import React, { useState } from 'react';
import emailjs from '@emailjs/browser'; // Importa EmailJS

function App() {
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [correo, setCorreo] = useState('');

  // Inicializa EmailJS con tu User ID
  emailjs.init("Blv9Mk9RLGdaplRur");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Configuración del email a enviar
    const templateParamsForMe = {
      nombre: nombre,
      fecha: fecha,
      hora: hora,
      correo: 'nek.mon.arc@gmail.com' // Siempre se enviará a este correo
    };

    const templateParamsForUser = {
      nombre: nombre,
      fecha: fecha,
      hora: hora,
      user_email: correo // Aquí debe coincidir con el nombre en la plantilla
    };

    // Enviar el correo a través de EmailJS
    emailjs.send('service_aadp9gj', 'template_dflzqjo', templateParamsForMe)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Appointment successfully scheduled!');
      }, (error) => {
        console.error('Error sending the mail:', error);
        alert('Error while scheduling the appointment. Please try again.');
      });

    emailjs.send('service_aadp9gj', 'template_pt9vx87', templateParamsForUser)

    // Limpia el formulario
    setNombre('');
    setFecha('');
    setHora('');
    setCorreo('');
  };

  return (
    <div className="container1">
      {/* Formulario para agendar cita */}
      <form id="citaForm" onSubmit={handleSubmit}>
        <h2>Agendar una cita</h2>
        <input
          type="text"
          id="nombre"
          placeholder="Tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="email"
          id="correo"
          placeholder="Tu correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />
        <input
          type="date"
          id="fecha"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          required
        />
        <input 
          type="time"
          id="hora"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
          required
        />
        <button type="submit">Agendar</button>
      </form>
    </div>
  );
}

export default App;
