"use client";

import { ChevronRight } from 'lucide-react';

const MenuWidget = () => {
  return (
    <div className="w-[300px] border-4 border-[#C3BCBC] rounded-lg overflow-hidden gap-0 bg-white">
      <h2 className="bg-[#D9D9D9] text-gray-800 py-3 px-4 m-0 text-[30px] font-jaro flex justify-between items-center text-center">
        IMM2025
        <svg width="39" height="18.5" viewBox="0 0 78 37" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
          <path d="M69.2845 26.4056C69.2845 26.062 69.4163 25.7325 69.651 25.4896C69.8857 25.2466 70.2039 25.1101 70.5358 25.1101H75.7197V13.2125H70.5358C70.2039 13.2125 69.8857 13.076 69.651 12.833C69.4163 12.5901 69.2845 12.2606 69.2845 11.917M69.2845 11.917V2.64392H2.58191V35.0478H69.2845V26.4056" fill="#D0CFCE"/>
          <path d="M70.6759 12.8679C70.3441 12.8679 70.0258 12.7314 69.7912 12.4884C69.5565 12.2455 69.4247 11.916 69.4247 11.5724V2.29675H2.72083V34.7019H69.4284V26.0572C69.4284 25.7136 69.5603 25.3841 69.7949 25.1411C70.0296 24.8982 70.3478 24.7617 70.6797 24.7617H75.8636V12.8692L70.6759 12.8679Z" fill="#C4BCBC"/>
          <path d="M9.26355 29.7324H49.6024V7.7002H9.26355V29.7324Z" fill="#B1CC33"/>
          <path d="M70.6734 11.5711V2.29548C70.6734 1.9519 70.5415 1.62239 70.3069 1.37944C70.0722 1.13649 69.754 1 69.4221 1H2.71951C2.38766 1 2.0694 1.13649 1.83474 1.37944C1.60009 1.62239 1.46826 1.9519 1.46826 2.29548V34.7045C1.46826 35.0481 1.60009 35.3776 1.83474 35.6206C2.0694 35.8635 2.38766 36 2.71951 36H69.4271C69.759 36 70.0772 35.8635 70.3119 35.6206C70.5465 35.3776 70.6784 35.0481 70.6784 34.7045V26.0572H77.1135V11.5698L70.6734 11.5711Z" stroke="black" strokeOpacity="0.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8.00977 6.40479H50.8511V31.028H8.00977V6.40479Z" stroke="black" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
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
            className="py-1 px-4 cursor-pointer transition-colors duration-300 hover:bg-gradient-to-r hover:from-[#65688D] hover:via-[#887D9A] hover:to-[#65688D] hover:text-white font-roboto text-black flex justify-between items-center group"
          >
            {item}
            <ChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={20} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuWidget;