import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";
import mercado from '../assets/mercado.png';

export default function Dashboard() {
  const authContext = useAuth()
  const navigate = useNavigate()
  const handleButtonClick = (item) => {
    navigate(`/`)
  }
  
  // Obtén el nombre de usuario del contexto de autenticación
  const userName = authContext?.user?.email;

  return (
    <div className='flex flex-col items-center justify-center pt-5 pb-2 gap-y-3'>
      <h1>Bienvenido usuario {userName}</h1>
        <p className='text-[24px] text-[#c8d2ee]'>Mi tienda online</p>
        <img src={mercado} className='w-[500px] opacity-80'/>
        <button 
            onClick={handleButtonClick}
            className='text-[16px] text-[#c8d2ee] hover:text-white hover:scale-[105%]'
        >
            CONTINUAR
        </button>
    </div>
  );
}
