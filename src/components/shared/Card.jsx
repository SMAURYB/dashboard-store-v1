import React, { useState, useEffect } from "react";

const Card = (props) => {
  const { img, description, price, inventory, setCarList, carList } = props;
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    if (!isChecked) {
      // Agregar el elemento a la lista carList
      setCarList([...carList, { img, description, price }]);
    } else {
      // Remover el elemento de la lista carList
      const updatedCarList = carList.filter(item => item.description !== description);
      setCarList(updatedCarList);
    }
    setIsChecked(!isChecked);
  };

  return (
    <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
      <img
        src={img}
        alt={description}
        className="w-[180px] h-[180px] object-cover -mt-[85px] shadow-2xl rounded-full"
      />
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
