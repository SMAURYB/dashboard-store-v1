import React from 'react';

export default function ColorThemes({ setBgColor }) {

  return (
    <div className="w-28 rounded-r-xl p-4">
      <ul className="gap-2 text-gray-300 text-lg list-disc list-inside">
        <li
          className="hover:font-semibold text-[#78388d] cursor-pointer"
          onClick={() => setBgColor('#78388d')}
        >
          Purple
        </li>
        <li
          className="hover:font-semibold text-[#fad35f] cursor-pointer"
          onClick={() => setBgColor('#fad35f')}
        >
          Beige
        </li>
        <li
          className="hover:font-semibold text-[#fb8e9f] cursor-pointer"
          onClick={() => setBgColor('#fb8e9f')}
        >
          Pink
        </li>
        <li
          className="hover:font-semibold text-[#7596f8] cursor-pointer"
          onClick={() => setBgColor('#7596f8')}
        >
          Sea
        </li>
        <li
          className="hover:font-semibold text-[#86fc68] cursor-pointer"
          onClick={() => setBgColor('#86fc68')}
        >
          Forest
        </li>
      </ul>
    </div>
  );
}
