import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"; 
import { GrFormClose } from 'react-icons/gr'

const Profile = (props) => {
  const { showMenu } = props;
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // Aquí puedes manejar los datos del formulario, como enviarlos a la API, etc.
    console.log(data);
  };

  return (
    <div className='relative bg-[#1F1D2B] w-[400px] flex flex-col justify-between py-10 px-8 rounded-xl'>
        <button 
            className="absolute -right-1 -top-1 w-5 h-5 cursor-pointer rounded-full bg-[#e6ebf5] flex flex-row items-center justify-center"
            onClick={() => navigate(-1)}
        >
            <GrFormClose size={18} />
        </button>
        <form 
            onSubmit={handleSubmit(onSubmit)}>
        
          <p className="mb-8 text-2xl font-medium text-center">Actualice sus datos de perfil</p>
          <div className="mb-2">
            <label htmlFor="nombre" className="block text-white mb-1">Nombre:</label>
            <input
              type="text"
              id="nombre"
              {...register("nombre", { required: true })}
              className="bg-gray-100 text-slate-800 p-2 rounded-lg w-full"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="telefono" className="block text-white mb-1">Teléfono:</label>
            <input
              type="tel"
              id="telefono"
              {...register("telefono", { required: true })}
              className="bg-gray-100 text-slate-800 p-2 rounded-lg w-full"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="direccion" className="block text-white mb-1">Dirección:</label>
            <input
              type="text"
              id="direccion"
              {...register("direccion", { required: true })}
              className="bg-gray-100 text-slate-800 p-2 rounded-lg w-full"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="block text-white mb-1">Correo electrónico:</label>
            <input
              type="email"
              id="email"
              {...register("email", { required: true })}
              className="bg-gray-100 text-slate-800 p-2 rounded-lg w-full"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="block text-white mb-1">Contraseña:</label>
            <input
              type="password"
              id="password"
              {...register("password", { required: true })}
              className="bg-gray-100 text-slate-800 p-2 rounded-lg w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-[#ec7c6a] text-white rounded-lg p-2 w-full mt-10"
          >
            Enviar
          </button>
        </form>
    </div>
  );
};

export default Profile;
