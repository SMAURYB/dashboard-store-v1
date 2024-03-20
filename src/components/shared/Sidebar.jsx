import { useState, useEffect } from 'react';
import ColorThemes from './ColorThemes';
import {
  RiHome6Line,
  RiUserLine,
  RiPieChartLine,
  RiMailLine,
  RiNotification3Line,
  RiSettings4Line,
  RiLogoutCircleRLine,
} from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

const Sidebar = (props) => {
  const { showMenu } = props;
  const [showColorOptions, setShowColorOptions] = useState(false);
  const [bgColor, setBgColor] = useState('#1F1D2B');
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

  console.log('bgColor en sidebar', bgColor)

  useEffect(() => {
    setBgColor(bgColor)
  }, [bgColor]);

  return (
    <div
      className={`bg-${bgColor} fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50 transition-all ${
        showMenu ? 'left-0' : '-left-full'
      }`}
    >
      <div>
        <ul className="pl-4">
          <li className="mb-2 flex justify-center">
            <img src="car-red.png" alt="Logo carro compras" className="w-[50px] h-[50px] opacity-90" />
          </li>
          <li className="bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl">
            {/* Utiliza navigate('/profile') para navegar a la ruta '/profile' */}
              <RiHome6Line className="text-2xl" />
          </li>
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <button
              onClick={() => navigate("/profile")}
              className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiUserLine className="text-2xl" />
            </button>
          </li>
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiPieChartLine className="text-2xl" />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiMailLine className="text-2xl" />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiNotification3Line className="text-2xl" />
            </a>
          </li>
          <li className="relative hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            {/* Botón para navegar a /dashboard */}
            <button
              onClick={handlerColorOptions}
              className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiSettings4Line className="text-2xl" />
            </button>
            { showColorOptions && 
              <div className="absolute -top-[3px] -right-[110px] group-hover:bg-[#262837] bg-[#1F1D2B] rounded-r-xl">
                <ColorThemes 
                  setBgColor={setBgColor}
                  bgColor={bgColor}
                />
              </div>}
          </li>
        </ul>
      </div>
      <div>
        <ul className="pl-4">
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            {/* Botón para navegar a /dashboard */}
            <button
              onClick={handleDashboardClick}
              className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
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
