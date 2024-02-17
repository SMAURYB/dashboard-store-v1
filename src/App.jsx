import { useState, useEffect } from "react";
import {
  RiMenu3Fill,
  RiUser3Line,
  RiAddLine,
  RiPieChartLine,
  RiCloseLine,
  RiArrowDownSLine,
} from "react-icons/ri";
import Sidebar from "./components/shared/Sidebar";
import Car from "./components/shared/Car";
import Header from "./components/shared/Header";
import Card from "./components/shared/Card";
import useDataBase from './hooks/useDataBase';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('1');
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);
  const [filteredList, setFilteredList] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [carList, setCarList] = useState([]);
  const [searchItem, setSearchItem] = useState('');
  const [matchingCount, setMatchingCount] = useState('');
  const [showProductImage, setShowProductImage] = useState(false);

  const { dataBase } = useDataBase();

  useEffect(() => {
    const filteredData = dataBase.filter(item => item.category === selectedCategory);
    setFilteredList(filteredData);
  }, [selectedCategory]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };

  const toggleOrders = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
  };

  useEffect(() => {
    const searchData = dataBase.filter(item =>
      item.name.toLowerCase().includes(searchItem.toLowerCase())
    );
    setSearchList(searchData);
    setMatchingCount(searchList.length);
  }, [searchItem]);

  return (
    <div className={`${showProductImage ? 'blur-lg' : ''} bg-[#262837] w-full min-h-screen`}>
      {showProductImage && <h1>FOTO</h1>}

      <Sidebar showMenu={showMenu} />

      <Car 
        showOrder={showOrder} 
        setShowOrder={setShowOrder}
        carList={carList}
        setCarList={setCarList}
      />

      <Car 
        showOrder={showOrder} 
        setShowOrder={setShowOrder}
        carList={carList}
        setCarList={setCarList}
      />
      
      {/* Menu movil */}
      <nav className="bg-[#1F1D2B] blu lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button className="p-2">
          <RiUser3Line />
        </button>
        <button className="p-2">
          <RiAddLine />
        </button>
        <button onClick={toggleOrders} className="p-2">
          <RiPieChartLine />
        </button>
        <button onClick={toggleMenu} className="text-white p-2">
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </nav>
      <main className="lg:pl-32 lg:pr-96 pb-20 ">
        <div className="md:p-8 p-4">
          {/* Header */}
          <Header 
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            setSearchItem={setSearchItem}
            matchingCount={matchingCount}
          />
          {/* Title content */}
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-xl text-gray-300">Escoge tus productos</h2>
            <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg">
              <RiArrowDownSLine /> Dine in
            </button>
          </div>
          {/* Content */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16">

          {/* Muestra las cards por categorias filtradas */}
          {
            searchItem
              ? searchList.map((item) => (
                  <Card
                    key={item.id}
                    img={item.imagen}
                    description={item.name}
                    price={item.price}
                    inventory={item.availability}
                    size={item.size}
                    setCarList={setCarList}
                    carList={carList}
                    selected={item.selected}
                    setShowProductImage={setShowProductImage}
                  />
                ))
              : filteredList.map((item) => (
                  <Card
                    key={item.id}
                    img={item.imagen}
                    description={item.name}
                    price={item.price}
                    inventory={item.availability}
                    size={item.size}
                    setCarList={setCarList}
                    carList={carList}
                    selected={item.selected}
                  />
                ))
          }
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
