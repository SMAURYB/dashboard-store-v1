import React from 'react';

export default function ColorThemes({ setBg1, setBg2, setBg3, setBg4 }) {

  const Theme1 = () => {
    setBg1('bg-[#262837]');
    setBg2('bg-[#1F1D2B]');
    setBg3('bg-[#312d49]');
    setBg4('bg-[#ec7c6a]');
  }

  const Theme2 = () => {
    setBg1('bg-[#614b02]');
    setBg2('bg-[#3c2d02]');
    setBg3('bg-[#765901]');
    setBg4('bg-[#fcec93]');
  }

  const Theme3 = () => {
    setBg1('bg-[#fb8e9f]');
    setBg2('bg-[#6c0312]');
    setBg3('bg-[#f9c7ce]');
    setBg4('bg-[#6b89e3]');
  }

  const Theme4 = () => {
    setBg1('bg-[#6b89e3]');
    setBg2('bg-[#031b62]');
    setBg3('bg-[#9ba6c7]');
    setBg4('bg-[#fb8e9f]');
  }

  const Theme5 = () => {
    setBg1('bg-[#83cb70]');
    setBg2('bg-[#1d7b03]');
    setBg3('bg-[#a0c098]');
    setBg4('bg-[#fad35f]');
  }


  return (
    <div className="w-28 rounded-r-xl p-4">
      <ul className="gap-2 text-gray-300 text-lg list-disc list-inside">
        <li
          className="hover:font-semibold text-[#78388d] cursor-pointer"
          onClick={Theme1}
        >
          Purple
        </li>
        <li
          className="hover:font-semibold text-[#fad35f] cursor-pointer"
          onClick={Theme2}
        >
          Beige
        </li>
        <li
          className="hover:font-semibold text-[#fb8e9f] cursor-pointer"
          onClick={Theme3}
        >
          Pink
        </li>
        <li
          className="hover:font-semibold text-[#7596f8] cursor-pointer"
          onClick={Theme4}
        >
          Sea
        </li>
        <li
          className="hover:font-semibold text-[#86fc68] cursor-pointer"
          onClick={Theme5}
        >
          Forest
        </li>
      </ul>
    </div>
  );
}
