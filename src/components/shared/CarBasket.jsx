import React, { useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';

const CarBasket = (props) => {
  const { productName, price, image, deleteItem } = props;
  const [cantidad, setCantidad] = useState(1);

  const handleCantidadChange = (newCantidad) => {
    if (newCantidad >= 1){
      setCantidad(newCantidad);
      props.updateTotalCarrito(newCantidad, props.producto, props.index);
    } else {
      setCantidad(0);
    }
  };

  const handleDeleteFromCarList = () => {
    console.log('handleDeleteFromCarList')
    // Llama a la función deleteItem del prop para eliminar el elemento del carList
    deleteItem();
  };

  // console.log('carList-checkeo', carList)

  return (
    <div className="bg-[#262837] p-4 rounded-xl mb-4">
      <div className="mb-4 gap-2 flex flex-row justify-between">
        {/* Product description */}
        <div className="flex items-center gap-3">
          <img src={image} className="w-16 h-16 object-cover rounded-full" alt={productName} />
          <div className='flex flex-col justify-start items-start'>
            <h2>{productName}</h2>
            <h3 className="text-gray-500">$ {price}</h3>
          </div>
        </div>
        {/* Qty */}
        <div className='flex flex-col justify-center items-center gap-2'>
          {/* Price */}
          <div className='h-5 px-1 flex flex-row justify-center items-center'>
            <span>$ {props.producto.valorTotal}</span>
          </div>
          <div className='h-5 flex flex-row justify-center items-center gap-x-2 font-semibold'>
          <button
            onClick={() => (cantidad > 1) ? handleCantidadChange(cantidad - 1) : null}
            className="text-gray-400 font-bold text-2xl w-6 h-6 bg-[#505050]/[15%] rounded-full flex items-center justify-center pb-2 transition duration-300 ease-in-out hover:bg-[#505050]/90 hover:border-[#545554]"
          >
            -
          </button>

            <span className='w-8 flex flex-row justify-center'>{cantidad}</span>
            <button
              onClick={() => handleCantidadChange(cantidad + 1)}
              className="text-gray-400 font-bold text-2xl w-6 h-6 bg-[#505050]/[15%] rounded-full flex items-center justify-center pb-2 transition duration-300 ease-in-out hover:bg-[#505050]/90 hover:border-[#545554]"
            >
              +
            </button>
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
          <button 
          onClick={handleDeleteFromCarList}
          className="p-2 rounded-lg border border-[#2e2]"
          >
            <RiDeleteBin6Line className="text-red-500" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarBasket;
