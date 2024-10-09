import emailjs from '@emailjs/browser'; // Importa EmailJS
import confetti from 'canvas-confetti';

function emailAlert(templateParamsForMe, templateParamsForUser, setNotification) {
    // Enviar el myMail a través de EmailJS
    emailjs.send('service_aadp9gj', 'template_dflzqjo', templateParamsForMe)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setNotification({ message: 'Appointment successfully scheduled!', type: 'success', visible: true });
        confetti();

        // Ocultar la notificación después de 3 segundos
        setTimeout(() => {
          setNotification((prev) => ({ ...prev, visible: false }));
        }, 3000);
      }, (error) => {
        console.error('Error sending the mail:', error);
        setNotification({ message: 'Error while scheduling the appointment. Please try again.', type: 'error', visible: true });

        // Ocultar la notificación después de 3 segundos
        setTimeout(() => {
          setNotification((prev) => ({ ...prev, visible: false }));
        }, 3000);
      });
  
    emailjs.send('service_aadp9gj', 'template_pt9vx87', templateParamsForUser);
}

export default emailAlert;
