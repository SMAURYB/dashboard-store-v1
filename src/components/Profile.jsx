import React from "react";
import { useForm } from "react-hook-form"; 
import { useNavigate, useLocation } from 'react-router-dom';
import { GrFormClose } from 'react-icons/gr';
import { db } from "../firebase.config"; 
import { doc, setDoc } from "firebase/firestore";
import { ref, listAll, getDownloadURL, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

const Profile = () => {
  const location = useLocation();
  const message = location.state?.message;
  const userPassword = location.state?.user?.password;
  const userEmail = location.state?.user?.email;

  // Configurar el formulario react-hook-form
  const { register, handleSubmit } = useForm();
  // Obtener la función de navegación
  const navigate = useNavigate();

  // Función que se ejecuta cuando se envía el formulario
  const onSubmit = async (data) => {
    console.log("entro a onsubmit")
    try {
      console.log("Datos del formulario:", data);
        console.log(data.username)
        console.log(data.address)
        console.log(data.phone)
        console.log(data.email)
      const docRef = doc(db, "usuarios", v4()); 
      await setDoc(docRef, {
        nombre: data.username,
        direccion: data.address,
        correo: data.email,
        password: data.password,
        telefono: data.phone
      });

      console.log("Documento añadido con ID: ", docRef.id);

      // Redireccionar al usuario a la página de inicio de sesión o a otra página relevante
      navigate("/login"); // Redirecciona al usuario a la página de inicio de sesión
    } catch (error) {
      // Manejar cualquier error que ocurra durante el envío de datos a Firestore
      console.error("Error al enviar los datos del usuario a Firestore:", error);
    }
  };

  // Renderizar el componente
  return (
    <div className='relative bg-[#1F1D2B] w-[400px] flex flex-col justify-between py-10 px-8 mt-[100px] rounded-xl'>
      {/* Botón para cerrar el formulario */}
      <button 
        className="absolute -right-1 -top-1 w-5 h-5 cursor-pointer rounded-full bg-[#e6ebf5] flex flex-row items-center justify-center"
        onClick={() => navigate(-2)}
      >
        <GrFormClose size={18} />
      </button>
      {/* Formulario */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Mensaje */}
        <p className="mb-8 text-[22px] font-medium text-center">{message}</p>
        {/* Campo de nombre */}
        <div className="mb-2">
          <label htmlFor="nombre" className="block text-white mb-1">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="username"
            {...register("username", { required: true })}
            className="bg-gray-100 text-slate-800 p-2 rounded-lg w-full"
          />
        </div>
        {/* Campo de teléfono */}
        <div className="mb-2">
          <label htmlFor="telefono" className="block text-white mb-1">Teléfono:</label>
          <input
            type="tel"
            id="telefono"
            name="phone"
            {...register("phone", { required: true })}
            className="bg-gray-100 text-slate-800 p-2 rounded-lg w-full"
          />
        </div>
        {/* Campo de dirección */}
        <div className="mb-2">
          <label htmlFor="direccion" className="block text-white mb-1">Dirección:</label>
          <input
            type="text"
            id="direccion"
            name="address"
            {...register("address", { required: true })}
            className="bg-gray-100 text-slate-800 p-2 rounded-lg w-full"
          />
        </div>
        {/* Campo de correo electrónico */}
        <div className="mb-2">
          <label htmlFor="email" className="block text-white mb-1">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userEmail} // Usar value en lugar de defaultValue
            {...register("email", { required: true })}
            className="bg-gray-100 text-slate-800 p-2 rounded-lg w-full"
          />
        </div>
        {/* Campo de contraseña */}
        <div className="mb-2">
          <label htmlFor="password" className="block text-white mb-1">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={userPassword} // Usar value en lugar de defaultValue
            {...register("password", { required: true })}
            className="bg-gray-100 text-slate-800 p-2 rounded-lg w-full"
          />
        </div>
        {/* Botones de acción */}
        <div className="flex flex-row gap-x-4 justify-between">
          {/* Botón para saltar este paso */}
          <button
            type="button"
            onClick={() => navigate("/dashboard", { state: { message: 'Bienvenido a su tienda Online' } })}
            className="bg-[#ec7c6a] text-white rounded-lg p-2 w-full mt-10"
          >
            Saltar este paso
          </button>
          {/* Botón para enviar el formulario */}
          <button
            type="submit"
            className="bg-[#ec7c6a] text-white rounded-lg p-2 w-full mt-10"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
