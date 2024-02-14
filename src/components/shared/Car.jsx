import React, { useState, useEffect } from "react";
import { RiCloseLine } from "react-icons/ri";
import CarBasket from "./CarBasket";

const Card = (props) => {
  const { 
    showOrder, 
    setShowOrder, 
    carList, 
    setCarList
  } = props;

  const [totalCarrito, setTotalCarrito] = useState(0);

  useEffect(() => {
    let total = 0;
    carList.forEach((item) => {
      total += item.valorBasket;
    });
    setTotalCarrito(total);
  }, [carList]);

  console.log('De aquí saco los datos', carList)

  return (
    <div
      className={`lg:col-span-2 fixed top-0 bg-[#1F1D2B] w-full lg:w-96 lg:right-0 h-full transition-all z-50 ${
        showOrder ? "right-0" : "-right-full"
      }`}
    >
      {/* Orders */}
      <div className="relative pt-16 lg:pt-8 text-gray-300 p-8 h-full">
        <RiCloseLine
          onClick={() => setShowOrder(false)}
          className="lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl"
        />
        {/* <h1 className="text-2xl my-4">Orders #151416</h1> */}
        {/* Pills */}
        <div className="flex items-center gap-4 flex-wrap mb-8">
          <button className="bg-[#ec7c6a] text-white py-2 px-4 rounded-xl">
            Dine In
          </button>
          <button className="text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500">
            To Go
          </button>
          <button className="text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500">
            Delivery
          </button>
        </div>
        {/* Car */}
        <div>
          <div className="grid grid-cols-6 mb-4 p-4">
            <h5 className="col-span-4">Item</h5>
            <h5>Cantidad</h5>
            <h5>{carList?.price}</h5>
          </div>
          {/* Products */}
          
          <div className="h-[400px] md:h-[700px] lg:h-[540px] overflow-scroll">
            {
              carList.map(item => (
                <CarBasket 
                  productName={item.description}
                  price={item.price}
                  image={item.img}
                  setTotalCarrito={setTotalCarrito}
                />
              ))
            }
          </div>

        </div>
        {/* Submit payment */}
        <div className="bg-[#262837] absolute w-full bottom-0 left-0 p-4">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-400">Descuento</span>
            <span>$0</span>
          </div>
          <div className="flex items-center justify-between mb-6">
            <span className="text-gray-400">Subtotal</span>
            <span>$ {totalCarrito}</span>
          </div>
          <div>
            <button className="bg-[#ec7c6a] w-full py-2 px-4 rounded-lg">
              Continuar con el pago
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
