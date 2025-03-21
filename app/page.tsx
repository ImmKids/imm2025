"use client";

import MenuWidget from '@/components/MenuWidget';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-imm-about">
      <MenuWidget />
      <div className="flex flex-col w-[800px] py-20 items-end justify-end text-[#414759] text-2xl font-bold font-roboto">
        Grad Show Coming Soon
      </div>
    </div>
  );
}
