import { useState } from "react";
import {
  RiMenu3Fill,
  RiUser3Line,
  RiAddLine,
  RiPieChartLine,
  RiCloseLine,
  RiArrowDownSLine,
} from "react-icons/ri";
// Components
import Sidebar from "./components/shared/Sidebar";
import Car from "./components/shared/Car";
import Header from "./components/shared/Header";
import Card from "./components/shared/Card";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };

  const toggleOrders = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
  };

  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      <Car showOrder={showOrder} setShowOrder={setShowOrder} />
      {/* Menu movil */}
      <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
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
      <main className="lg:pl-32 lg:pr-96 pb-20">
        <div className="md:p-8 p-4">
          {/* Header */}
          <Header />
          {/* Title content */}
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-xl text-gray-300">Choose Dishes</h2>
            <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg">
              <RiArrowDownSLine /> Dine in
            </button>
          </div>
          {/* Content */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {/* Card */}
            <Card
              img="queso-crema-colanta.png"
              description="Queso Crema"
              price="2.29"
              inventory="20"
            />
            {/* Card */}
            <Card
              img="huevos.jpg"
              description="Detergente Versa"
              price="2.29"
              inventory="20"
            />
            {/* Card */}
            <Card
              img="azucar.jpg"
              description="Azucar"
              price="2.29"
              inventory="20"
            />
            {/* Card */}
            <Card
              img="cerveza-aguila-6u.jpg"
              description="Aguila Six-Pack"
              price="2.29"
              inventory="20"
            />
            {/* Card */}
            <Card
              img="cafe-sello-rojo.jpg"
              description="Cafe Sello Rojo"
              price="2.29"
              inventory="20"
            />
            {/* Card */}
            <Card
              img="cocacola-x250.jpg"
              description="Coca Cola 400ml"
              price="2.29"
              inventory="20"
            />
            {/* Card */}
            <Card
              img="frutiño-limon.jpg"
              description="Frutiño limón"
              price="2.29"
              inventory="20"
            />
            {/* Card */}
            <Card
              img="gelatina-limon.jpg"
              description="gelatina-limon"
              price="2.29"
              inventory="20"
            />
            {/* Card */}
            <Card
              img="sal-marina.jpg"
              description="Sal Marina"
              price="2.29"
              inventory="20"
            />
            {/* Card */}
            <Card
              img="queso-costeño.jpg"
              description="Queso Costeño"
              price="2.29"
              inventory="20"
            />
            {/* Card */}
            <Card
              img="jamon-pietran.jpg"
              description="Jamón Pietran"
              price="2.29"
              inventory="20"
            />
            {/* Card */}
            <Card
              img="coca-cola-2L.jpg"
              description="Cocacola 2 Lts"
              price="2.29"
              inventory="20"
            />
             <Card
              img="queso-costeño.jpg"
              description="Queso Costeño"
              price="2.29"
              inventory="20"
            />
            {/* Card */}
            <Card
              img="jamon-pietran.jpg"
              description="Jamón Pietran"
              price="2.29"
              inventory="20"
            />
            {/* Card */}
            <Card
              img="coca-cola-2L.jpg"
              description="Cocacola 2 Lts"
              price="2.29"
              inventory="20"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
