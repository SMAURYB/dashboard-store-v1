import React, { useState, useEffect } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';

export default function CarBasket({
  productName,
  price,
  image,
  setTotalCarrito,
  // setValorCarrito,
}) {
  const [cantidad, setCantidad] = useState(1);
  const [valorTotalItem, setValorTotalItem] = useState(price)

  const sacarCarrito = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
    }
  };

  const meterCarrito = () => {
    setCantidad(cantidad + 1);
  };

  useEffect(() => {
    const valorTotal = cantidad * price;
    setValorTotalItem(valorTotal);
    setTotalCarrito(valorTotal); // Actualiza el valor del basket
    // setValorCarrito(valorTotal); // Actualiza el valor total del carrito
  }, [cantidad, price]);
  

  return (
    <div className="bg-[#262837] p-4 rounded-xl mb-4">
      <div className="mb-4 gap-2 flex flex-row justify-between">
        {/* Product description */}
        <div className="col-span-4 flex items-center gap-3">
          <img src={image} className="w-10 h-10 object-cover rounded-full" alt={productName} />
          <div>
            <h5 className="text-sm">{productName}</h5>
            <p className="text-xs text-gray-500">$ {price}</p>
          </div>
        </div>
        {/* Qty */}
        <div className='flex flex-col justify-center items-center gap-2'>
          {/* Price */}
          <div className='h-5 px-1 flex flex-row justify-center items-center'>
            <span>$ {valorTotalItem}</span>
          </div>
          <div className='h-5 flex flex-row justify-center items-center gap-x-2 font-semibold'>
            <button onClick={sacarCarrito}>-</button>
            <span>{cantidad}</span>
            <button onClick={meterCarrito}>+</button>
          </div>
        </div>
      </div>
      {/* Note */}
      <div className="grid grid-cols-6 items-center">
        <form className="col-span-5">
          <input
            type="text"
            className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none"
            placeholder="Order note..."
          />
        </form>
        <div>
          <button className="p-2 rounded-lg">
            <RiDeleteBin6Line className="text-red-500" />
          </button>
        </div>
      </div>
    </div>
  );
}
