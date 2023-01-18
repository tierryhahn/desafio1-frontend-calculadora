import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApiCalculatorProvider } from './providers/apiProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApiCalculatorProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApiCalculatorProvider>
);

reportWebVitals();
