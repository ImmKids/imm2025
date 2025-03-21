"use client";

import { ArrowRight } from 'lucide-react';
import BatteryIcon from '@/public/battery.svg';

const MenuWidget = () => {
  return (
    <div className="w-[300px] border-4 border-[#C3BCBC] rounded-lg overflow-hidden">
      <h2 className="bg-[#D0CFCE] text-gray-800 py-3 px-4 m-0 text-lg font-bold font-jaro flex justify-between items-center">
        IMM2025
        <BatteryIcon 
          className="ml-2" 
          width={39} 
          height={18.5}
        />
      </h2>
      <ul className="list-none p-0 m-0">
        {[
          'Application-Development',
          'User-Research',
          'Immersive-Experiences',
          'Interactive-Coding',
          'Content-Strategy',
          'Audio-Video for Media'
        ].map((item, index) => (
          <li 
            key={index}
            className="py-3 px-4 border-b-4 border-[#C3BCBC] last:border-b-0 cursor-pointer transition-colors duration-300 hover:bg-[#65688D] hover:text-white font-roboto bg-white text-black flex justify-between items-center group"
          >
            {item}
            <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={20} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuWidget; 