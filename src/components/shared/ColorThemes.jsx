import React from 'react';

export default function ColorThemes({ setBg1, setBg2, setBg3, setBg4, bg2 }) {

  const Theme1 = () => {
    setBg1('bg-[#262837]');
    setBg2('bg-[#1F1D2B]');
    setBg3('bg-[#312d49]');
    setBg4('bg-[#d26554]');
  }

  const Theme2 = () => {
    setBg1('bg-[#4d452d]');
    setBg2('bg-[#363023]');
    setBg3('bg-[#756941]');
    setBg4('bg-[#baa42c]');
  }

  const Theme3 = () => {
    setBg1('bg-[#ef8797]');
    setBg2('bg-[#900f25]');
    setBg3('bg-[#8f376c]');
    setBg4('bg-[#e44fab]');
  }

  const Theme4 = () => {
    setBg1('bg-[#3f4862]');
    setBg2('bg-[#2a3043]');
    setBg3('bg-[#3d518f]');
    setBg4('bg-[#3ab4c1]');
  }

  const Theme5 = () => {
    setBg1('bg-[#364c30]');
    setBg2('bg-[#253321]');
    setBg3('bg-[#467f37]');
    setBg4('bg-[#3cc673]');
  }


  return (
    <div className={`w-28 rounded-r-xl p-4 ${bg2}`}>
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
