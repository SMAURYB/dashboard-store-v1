import { useState, useEffect } from "react";

const Card = (props) => {
  const { 
    id, 
    img, 
    description, 
    price, 
    inventory, 
    setCarList, 
    carList, 
    selected, 
    setShowProductImage, 
    setSelectedImage, 
    searchList, 
    filteredList,
    bg2,
    bg3
  } = props;

  const handleCheckboxChange = () => {
    if (!selected) {
      const cantidad = 1;
      const valorTotal = price * 1;
      let elementToModify = searchList.find((e) => e.id === id)
      if (elementToModify) {
        elementToModify.checked = true
      }
      let elementToModify2 = filteredList.find((e) => e.id === id)
      if (elementToModify2) {
        elementToModify2.checked = true
      }
      // Agregar el elemento a la lista carList si no está checked
      setCarList([...carList, { id, img, description, price, cantidad, valorTotal, inventory }]);
    } else {
      let elementToModify = searchList.find((e) => e.id === id)
      if (elementToModify) {
        elementToModify.checked = false
      }
      let elementToModify2 = filteredList.find((e) => e.id === id)
      if (elementToModify2) {
        elementToModify2.checked = false
      }
      // Remover el elemento de la lista carList si está checked
      const updatedCarList = carList.filter(item => item.id !== id);
      setCarList(updatedCarList);
    }
  };

  const handleShowProductImage = () => {
    setShowProductImage(true);
    setSelectedImage(img);
  }

  return (
    <div className={`${selected ? `${bg3}` : `${bg2}` } p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300 shadow-lg`}>
      <button
        onClick={handleShowProductImage}
        className="hover:scale-[102%] duration-75 ease-out  "
      >
        <img
          src={img}
          alt={description}
          className="w-[170px] h-[170px] object-cover -mt-[85px] shadow-2xl rounded-full border border-gray-400"
        />
      </button>

      
      <p className="text-[20px] hover:text-[#fff] hover:scale-[101%]">{description}</p>
      <span className="text-[18px] text-gray-200  hover:text-gray-300 hover:scale-[101%]">${price}</span>
      <p className="text-[14px] text-gray-400  hover:text-gray-300 hover:scale-[101%]">{inventory} disponibles</p>


      <label className="text-[14px] text-gray-200 hover:text-gray-300 hover:scale-[101%]">
        <div className="flex items-center">
          <span className="mr-2">
            Meter al carrito
          </span>
          <input
            type="checkbox"
            checked={selected}
            onChange={handleCheckboxChange}
            className="transform scale-120 ml-2 appearance-none w-6 h-6 bg-gray-200 border border-gray-400 rounded-md checked:bg-lime-400 checked:border-slate-200 checked:border-2 focus:outline-none focus:ring-none"
          />
        </div>
      </label>
    </div>
  );
};

export default Card;
