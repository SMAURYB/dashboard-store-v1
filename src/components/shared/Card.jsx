import React from "react";

const Card = (props) => {
  const { img, description, price, inventory } = props;

  return (
    <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
      <img
        src={img}
        className=" w-[180px] h-[180px] object-cover -mt-[85px] shadow-2xl rounded-full"
      />
      <p className="text-xl">{description}</p>
      <span className="text-gray-400">${price}</span>
      <p className="text-gray-600">{inventory} available</p>
      <label className="text-gray-600">
        Meter al carrito
        <input
          className="ml-2"
          type="checkbox"
        />      
      </label>
    </div>
  );
  
};

export default Card;
