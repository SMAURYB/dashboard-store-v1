import React, { useState, useEffect } from "react";

const Card = (props) => {
  const { img, description, price, inventory, setCarList, carList, selected, setShowProductImage } = props;
  const [isChecked, setIsChecked] = useState(selected || false);

  const handleCheckboxChange = () => {
    if (!isChecked) {
      const cantidad = 1;
      const valorTotal = price * 1;
      // Agregar el elemento a la lista carList si no está checked
      setCarList([...carList, { img, description, price, cantidad, valorTotal }]);
    } else {
      // Remover el elemento de la lista carList si está checked
      const updatedCarList = carList.filter(item => item.description !== description);
      setCarList(updatedCarList);
    }
    setIsChecked(!isChecked);
  };

  const handleShowProductImage = () => {
    setShowProductImage(true)
  }

  return (
    <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
      <button
        onClick={handleShowProductImage}
      >
        <img
          src={img}
          alt={description}
          className="w-[170px] h-[170px] object-cover -mt-[85px] shadow-2xl rounded-full"
        />
      </button>
      
      <p className="text-xl">{description}</p>
      <span className="text-gray-400">${price}</span>
      <p className="text-gray-600">{inventory} disponibles</p>
      <label className="text-gray-600">
        Meter al carrito
        <input
          className="ml-2"
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />      
      </label>
    </div>
  );
};

export default Card;
