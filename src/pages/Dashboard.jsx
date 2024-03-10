import React from 'react';
import { useNavigate } from 'react-router-dom'
import mercado from '../assets/mercado.png';

export default function Dashboard() {
  const navigate = useNavigate()
  const handleButtonClick = (item) => {
    navigate(`/login`)
  }

  return (
    <div className='flex flex-col items-center justify-center pt-5 pb-2 gap-y-3'>
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

