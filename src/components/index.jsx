import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"; 
import {
  RiHome6Line,
  RiPercentLine,
  RiPieChartLine,
  RiMailLine,
  RiNotification3Line,
  RiSettings4Line,
  RiLogoutCircleRLine,
} from "react-icons/ri";

const Sidebar = (props) => {
  const { showMenu } = props;
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // Aquí puedes manejar los datos del formulario, como enviarlos a la API, etc.
    console.log(data);
  };

  return (
    <div
      className={`bg-[#1F1D2B] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50 transition-all ${
        showMenu ? "left-0" : "-left-full"
      }`}
    >
      <div>
        <ul className="pl-4">
          <li className="mb-2 flex justify-center bg-[#2e2]">
            <img src="car-red.png" alt="Logo carro compras" className="w-[50px] h-[50px] opacity-90" />
          </li>
          <li className="bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl">
            <button
              onClick={() => navigate("/profile")}
              className="bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-white"
            >
              <RiHome6Line className="text-2xl" />
            </button>
          </li>
          {/* Agregar más elementos de la barra lateral aquí */}
        </ul>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Nombre"
            {...register("nombre", { required: true })}
            className="bg-gray-100 p-2 rounded-lg mb-2 w-full"
          />
          <input
            type="tel"
            placeholder="Teléfono"
            {...register("telefono", { required: true })}
            className="bg-gray-100 p-2 rounded-lg mb-2 w-full"
          />
          <input
            type="text"
            placeholder="Dirección"
            {...register("direccion", { required: true })}
            className="bg-gray-100 p-2 rounded-lg mb-2 w-full"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            {...register("email", { required: true })}
            className="bg-gray-100 p-2 rounded-lg mb-2 w-full"
          />
          <button
            type="submit"
            className="bg-[#ec7c6a] text-white rounded-lg p-2 w-full"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sidebar;
