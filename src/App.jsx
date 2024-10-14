import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './HomePage';
import AppointmentForm from './AppointmentForm';
import AnotherPage from './AnotherPage';
import './index.css';

const App = () => {
	const [background, setBackground] = useState('url(/fondo.png)');
	const location = useLocation();
  
	useEffect(() => {
	  switch (location.pathname) {
		case '/appointment':
		  setBackground('url(/Appointment.png)');
		  break;
		case '/ideas':
		  setBackground('url(public/ideas.jpg)'); // Esta línea puede necesitar una imagen si deseas una transición de fondo
		  break;
		default:
		  setBackground('url(/fondo.png)');
	  }
	}, [location.pathname]);
  
	return (
	  <div
		className={`flex justify-center items-center h-screen background-transition`}
		style={{
		  backgroundImage: background,
		  backgroundSize: 'cover',
		  backgroundPosition: 'center',
		}}
	  >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/appointment" element={<AppointmentForm />} />
        <Route path="/ideas" element={<AnotherPage />} />
      </Routes>
    </div>
  );
};

const WrappedApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;
