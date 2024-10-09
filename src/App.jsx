import React, { useState } from 'react';
import emailjs from '@emailjs/browser'; // Importa EmailJS

function App() {
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [correo, setCorreo] = useState('');
  const [cita, setCita] = useState('');
  const [otro, setOtro] = useState('');

  // Inicializa EmailJS con tu User ID
  emailjs.init("Blv9Mk9RLGdaplRur");

  const handleCitaChange = (value) => {
    setCita(value);
    if (value !== 'otro') {
      setOtro(''); // Limpia el campo de texto si no se selecciona "Otro"
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Configuración del email a enviar
    const templateParamsForMe = {
      nombre: nombre,
      fecha: fecha,
      hora: hora,
      cita: cita,
      otro: otro,
      correo: 'nek.mon.arc@gmail.com' // Siempre se enviará a este correo
    };

    const templateParamsForUser = {
      nombre: nombre,
      fecha: fecha,
      hora: hora,
      cita: cita,
      otro: otro,
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
    setCita('');
    setOtro('');
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
        
        <h3>Selecciona tu cita:</h3>
        <div>
          <label>
            <input
              type="radio"
              value="Salir de Picnic"
              checked={cita === 'Salir de Picnic'}
              onChange={() => handleCitaChange('Salir de Picnic')}
            />
            <img src="/all-our-favorites.webp" alt="Picnic" style={{ width: '100px', height: 'auto' }} />
            Salir de Picnic
          </label>
          <label>
            <input
              type="radio"
              value="Salir a cenar"
              checked={cita === 'Salir a cenar'}
              onChange={() => handleCitaChange('Salir a cenar')}
            />
            <img src="/Christmas_table_(Serbian_cuisine).webp" alt="Cena" style={{ width: '100px', height: 'auto' }} />
            Salir a cenar
          </label>
          <label>
            <input
              type="radio"
              value="Noche de juegos"
              checked={cita === 'Noche de juegos'}
              onChange={() => handleCitaChange('Noche de juegos')}
            />
            <img src="/juegos-de-mesa.webp" alt="Juegos" style={{ width: '100px', height: 'auto' }} />
            Noche de juegos
          </label>
          <label>
            <input
              type="radio"
              value="Sesion de belleza"
              checked={cita === 'Sesion de belleza'}
              onChange={() => handleCitaChange('Sesion de belleza')}
            />
            <img src="/mascarilla-facial.webp" alt="Belleza" style={{ width: '100px', height: 'auto' }} />
            Sesion de belleza
          </label>
          <label>
            <input
              type="radio"
              value="otro"
              checked={cita === 'otro'}
              onChange={() => handleCitaChange('otro')}
            />
            Otra idea
          </label>
          {/* Campo de texto que aparece solo si se selecciona "Otro" */}
          {cita === 'otro' && (
            <input
              type="text"
              id="otro"
              placeholder="Escribe tu idea"
              value={otro}
              onChange={(e) => {
                setOtro(e.target.value);
                setCita(e.target.value); // Establece el valor de cita como el texto ingresado
              }}
              required // Hazlo requerido si "Otro" es seleccionado
            />
          )}
        </div>
        <button type="submit">Agendar</button>
      </form>
    </div>
  );
}

export default App;
