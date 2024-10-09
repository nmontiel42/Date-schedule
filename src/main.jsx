import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'; // Importa tu archivo CSS de Tailwind
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
