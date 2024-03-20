import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";
import mercado from '../assets/mercado.png';

export default function Dashboard() {
  const authContext = useAuth();
  const location = useLocation();
  const message = location.state?.message;
  const navigate = useNavigate();

  // Obtén el nombre de usuario del contexto de autenticación
  const userName = authContext?.user?.email;

  const handleContinueClick = () => {
    navigate(`/`);
  };

  const handleExitClick = async () => {
    try {
      await authContext.logout(); // Cerrar sesión
      navigate('/login'); // Redirigir a la página de inicio de sesión
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center pt-5 pb-2 gap-y-3'>
      <p className='text-[24px] text-[#c8d2ee]'>{message}     {userName}</p>
      <img src={mercado} className='w-[500px] opacity-80'/>
      <div className='flex flex-row gap-16'>
        <button 
          onClick={handleExitClick}
          className='text-[16px] text-[#c8d2ee] hover:text-white hover:scale-[105%]'
        >
          SALIR
        </button>
        <button 
          onClick={handleContinueClick}
          className='text-[16px] text-[#c8d2ee] hover:text-white hover:scale-[105%]'
        >
          CONTINUAR
        </button>
      </div>
    </div>
  );
}
