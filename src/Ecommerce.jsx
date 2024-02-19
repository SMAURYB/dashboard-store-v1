import { useState, useEffect } from "react";
import {
  RiMenu3Fill,
  RiUser3Line,
  RiAddLine,
  RiPieChartLine,
  RiCloseLine,
  RiArrowDownSLine,
} from "react-icons/ri";
import { MdOutlineCancel } from "react-icons/md";
import Sidebar from "./components/shared/Sidebar";
import Car from "./components/shared/Car";
import Header from "./components/shared/Header";
import Card from "./components/shared/Card";
import useDataBase from './hooks/useDataBase';

function Ecommerce() {
  const [selectedCategory, setSelectedCategory] = useState('1');
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);
  const [filteredList, setFilteredList] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [carList, setCarList] = useState([]);
  const [searchItem, setSearchItem] = useState('');
  const [matchingCount, setMatchingCount] = useState('');
  const [showProductImage, setShowProductImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

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
    <>
    
    {showProductImage && 
        <div className="z-40 flex items-center justify-center h-screen absolute w-full">
          <div className="relative">
            <button
              onClick={() => setShowProductImage(false)}
              className="w-6 h-6 absolute right-5 top-4"
            >
              <MdOutlineCancel className="w-8 h-8 fill-neutral-600"/>
            </button>
            <img 
              src={selectedImage} 
              alt="Selected Product"
              className="w-[270px] h-[270px] object-cover shadow-2xl rounded-lg"
            />
          </div>
        </div>
      }
    <div className={`${showProductImage ? 'blur-lg' : 'relative z-20 bg-[#262837] w-full min-h-screen'}`}>
      

      <Sidebar showMenu={showMenu} />
      <Car 
        showOrder={showOrder} 
        setShowOrder={setShowOrder}
        carList={carList}
        setCarList={setCarList}
        filteredList={filteredList}
        searchList={searchList}
      />
      {/* Menu movil */}
      <nav className={`z-20 bg-[#1F1D2B] blu lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl`}>
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
      <main className={`lg:pl-32 lg:pr-96 pb-20`}>
      
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
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-16 gap-y-[56px]">

          {/* Muestra las cards por categorias filtradas */}
          {
            searchItem
              ? searchList.map((item) => (
                  <Card
                    key={item.id}
                    id={item.id}
                    img={item.imagen}
                    description={item.name}
                    price={item.price}
                    inventory={item.availability}
                    size={item.size}
                    setCarList={setCarList}
                    carList={carList}
                    selected={item.checked}
                    setShowProductImage={setShowProductImage}
                    setSelectedImage={setSelectedImage}
                    filteredList={filteredList}
                    searchList={searchList}
                  />
                ))
              : filteredList.map((item) => (
                  <Card
                    key={item.id}
                    id={item.id}
                    img={item.imagen}
                    description={item.name}
                    price={item.price}
                    inventory={item.availability}
                    size={item.size}
                    setCarList={setCarList}
                    carList={carList}
                    selected={item.checked}
                    setShowProductImage={setShowProductImage}
                    setSelectedImage={setSelectedImage}
                    filteredList={filteredList}
                    searchList={searchList}
                  />
                ))
          }
          </div>
        </div>
      </main>
    </div>
    </>
  );
}

export default Ecommerce;
