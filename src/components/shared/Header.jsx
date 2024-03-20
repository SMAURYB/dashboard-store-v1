import { RiSearch2Line } from "react-icons/ri";
import { useState } from "react";
import { useAuth } from '../../context/AuthContext';

const Header = (props) => {
  const { selectedCategory, setSelectedCategory, setSearchItem, matchingCount, bg2, bg4 } = props;
  const [searchText, setSearchText] = useState(''); // Agregado estado para el texto de búsqueda
  const categoryData = [
    { id: 1, name: 'Bebidas', category: '1' },
    { id: 2, name: 'Viveres', category: '2' },
    { id: 3, name: 'Aseo Personal', category: '3' },
    { id: 4, name: 'Aseo Hogar', category: '4' },
  ];

  const hoy = new Date().toLocaleDateString();
  const authContext = useAuth()
  const handleSearch = (e) => {
    const inputValue = e.target.value;
    setSearchItem(inputValue);
    setSearchText(inputValue); // Actualiza el estado del texto de búsqueda
    // Puedes realizar más acciones con el valor del input si es necesario
  };

  const userName = authContext?.user?.email;

  return (
    <header>
      {/* Title and search */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6 ">
        <div>
          <h1 className="text-2xl text-gray-300">Tienda Virtual</h1>
          <p className="text-gray-500">Fecha: {hoy}</p>
        </div>
        <div className="flex flex-col items-start justify-center">
          <form >
            <div className="w-full relative flex flex-row items-center justify-between">
              <RiSearch2Line className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
              <input
                onChange={handleSearch}
                value={searchText}
                type="text"
                className={`${bg2} w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none`}
                placeholder="Buscar"
              />
            </div>
          </form>
          <div>
            <p>{userName}</p>
          </div>
        </div>
      </div>
      {/* Tabs */}
        {searchText ?
          <nav className='text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6'>
            <p className='py-2 pr-4'>
              {`Búsqueda por palabra '${searchText}', entrega '${matchingCount}' resultados`}
            </p>
          </nav>
        :
          <nav className='text-gray-300 text-lg flex items-center justify-between md:justify-start md:gap-8 border-b mb-6'>
            {categoryData.map(item => (
              <button
                key={item.id}
                className={`py-2 pr-4 ${selectedCategory === item.category ? `relative before:w-1/2 before:h-[2px] before:absolute before:${bg4} before:left-0 before:rounded-full before:-bottom-[1px] text-[#ec7c6a]` : ''}`}
                onClick={() => setSelectedCategory(item.category)}
              >
                {item.name}
              </button>
            ))}
          </nav>
        }
    </header>
  );
};

export default Header;
