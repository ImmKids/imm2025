"use client";

const MenuWidget = () => {
  return (
    <div className="w-[300px] border border-gray-300 rounded overflow-hidden">
      <h2 className="bg-[#C3BCBC] text-gray-800 py-3 px-4 m-0 text-lg font-bold font-jaro">
        IMM2025
      </h2>
      <ul className="list-none p-0 m-0 bg-white">
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
            className="bg-white py-3 px-4 border-b border-gray-200 last:border-b-0 cursor-pointer transition-colors duration-300 hover:bg-[#65688D] hover:text-white text-gray-800"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuWidget; 