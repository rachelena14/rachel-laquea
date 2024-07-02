import React from 'react';
import "../src/index.css";
import App from '../src/App.js'
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';

require('dotenv').config();

console.log(process.env.DATABASE_URL); // Outputs: mongodb://localhost/myapp
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

if (typeof window !== 'undefined') {
  window.process = {
    env: { DEBUG: undefined },
  };
}