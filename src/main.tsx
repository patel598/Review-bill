import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import { BrowserRouter as Router } from 'react-router';
import { ToastContainer } from 'react-toastify';
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider >
      <Router>
        <App />
        <ToastContainer />
      </Router>
    </HelmetProvider>
  </StrictMode>
);
