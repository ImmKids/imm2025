"use client";

import MenuWidget from '@/components/MenuWidget';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-imm-about">
      <MenuWidget />
      <div className="flex flex-col w-full max-w-[800px] py-20 items-center sm:items-end justify-center sm:justify-end text-[#414759] text-2xl font-bold font-roboto px-4 sm:px-0">
        <div className="w-full text-center sm:text-right">
          Grad Show Coming Soon
        </div>
      </div>
    </div>
  );
}
