import { useState } from 'react';
import ColorThemes from './ColorThemes';
import {
  RiHome6Line,
  RiUserLine,
  RiPieChartLine,
  RiMailLine,
  RiAdminLine,
  RiSettings4Line,
  RiLogoutCircleRLine,
} from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

const Sidebar = (props) => {
  const { 
    showMenu,
    bg1,
    bg2,
    bg3,
    bg4,
    setBg1,
    setBg2,
    setBg3,
    setBg4
  } = props;
  const [showColorOptions, setShowColorOptions] = useState(false);
  const navigate = useNavigate();
  
  const handleDashboardClick = () => {
    navigate('/dashboard', {
      state: {
        message: 'Hasta pronto.... gracias por confiar en nosotros',
      },
    });
  };

  const handlerColorOptions = () => {
    setShowColorOptions(!showColorOptions);
  };

  const hoverBg1 = `hover:${bg1}`;

  return (
    <div
      className={`${bg2} fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50 transition-all ${
        showMenu ? 'left-0' : '-left-full'
      }`}
    >
      <div>
        <ul className="pl-4">
          <li className="mb-2 flex justify-center">
            <img src="car-red.png" alt="Logo carro compras" className="w-[50px] h-[50px] opacity-90" />
          </li>
          <li className={`${bg2} p-4 rounded-tl-xl rounded-bl-xl group transition-colors`}>
            <button
              onClick={() => navigate("/home")}
              className={`group-hover:${bg4} p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors`}
            >
              <RiHome6Line className="text-2xl" />
            </button>
          </li>
          <li className={`${hoverBg1} p-4 rounded-tl-xl rounded-bl-xl group transition-colors`}>
            <button
              onClick={() => navigate("/profile")}
              className={`group-hover:${bg4} p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors`}
            >
              <RiUserLine className="text-2xl" />
            </button>
          </li>
          <li className={`hover:${bg1} p-4 rounded-tl-xl rounded-bl-xl group transition-colors`}>
            <a
              href="#"
              className={`group-hover:${bg4} p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors`}
            >
              <RiPieChartLine className="text-2xl" />
            </a>
          </li>
          <li className={`hover:${bg1} p-4 rounded-tl-xl rounded-bl-xl group transition-colors`}>
            <a
              href="#"
              className={`group-hover:${bg4} p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors`}
            >
              <RiMailLine className="text-2xl" />
            </a>
          </li>
          <li className={`hover:${bg1} p-4 rounded-tl-xl rounded-bl-xl group transition-colors`}>
            <button
              onClick={() => navigate("/admin")}
              className={`group-hover:${bg4} p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors`}
            >
              <RiAdminLine className="text-2xl" />
            </button>
          </li>
          <li className={`relative hover:${bg1} p-4 rounded-tl-xl rounded-bl-xl group transition-colors`}>
            {/* Botón para navegar a /dashboard */}
            <button
              onClick={handlerColorOptions}
              className={`group-hover:${bg4} p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors`}
            >
              <RiSettings4Line className="text-2xl" />
            </button>
            { showColorOptions && 
              <div className={`absolute -top-[3px] -right-[110px] group-hover:${bg1} rounded-r-xl`}>
                <ColorThemes 
                  setBg1={setBg1}
                  setBg2={setBg2}
                  setBg3={setBg3}
                  setBg4={setBg4}
                  bg2={bg2}
                />
              </div>}
          </li>
        </ul>
      </div>
      <div>
        <ul className="pl-4">
          <li className={`hover:${bg1} p-4 rounded-tl-xl rounded-bl-xl group transition-colors`}>
            {/* Botón para navegar a /dashboard */}
            <button
              onClick={handleDashboardClick}
              className={`group-hover:${bg4} p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors`}
            >
              <RiLogoutCircleRLine className="text-2xl" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;