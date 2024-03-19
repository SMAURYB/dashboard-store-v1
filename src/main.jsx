// import React from 'react'
// import ReactDOM from 'react-dom/client'
// // import App from './App'
// import App from './App'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthProvider from './context/AuthContext'; // Importa el AuthProvider

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    {/* Envuelve el componente App con AuthProvider */}
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
