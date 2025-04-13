"use client";

import { getImmProfiles } from '@/lib/api';
import Playlist from '../components/Playlist';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const profiles = getImmProfiles();
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#E4F5FF] relative">
      {/* Light String Layer */}
      <div className="absolute top-0 left-0 w-full z-[50]">
  {/* Rope (scaled) */}
  <div className="w-full h-[50vh] relative group transform scale-x-[1] scale-y-[0.3] origin-top transition-transform duration-300 ease-in-out">
    <Image
      src="/string.png"
      alt="String"
      fill
      className="object-cover pointer-events-none"
    />
  </div>

  {/* Light (outside the scaled container) */}
  <div
    className="absolute top-[1%] left-[21.9%] w-[12vw] h-[20vh] transition-transform duration-300 ease-in-out"
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    style={{ transform: 'translateX(-50%)' }} // centers the light horizontally
  >
    <Image
      src={hovered ? '/lightblink.png' : '/lightdark.png'}
      alt="Light"
      fill
      className="object-contain"
    />
  </div>
  <div
    className="absolute top-[21%] left-[50%] w-[12vw] h-[20vh] transition-transform duration-300 ease-in-out"
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    style={{ transform: 'translateX(-50%)' }} // centers the light horizontally
  >
    <Image
      src={hovered ? '/lightblink.png' : '/lightdark.png'}
      alt="Light"
      fill
      className="object-contain"
    />
  </div>
  <div
    className="absolute top-[19%] left-[80%] w-[12vw] h-[20vh] transition-transform duration-300 ease-in-out"
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    style={{ transform: 'translateX(-50%)' }} // centers the light horizontally
  >
    <Image
      src={hovered ? '/lightblink.png' : '/lightdark.png'}
      alt="Light"
      fill
      className="object-contain"
    />
  </div>
</div>

      {/* Left Column */}
      <div className="flex-1"></div>

      {/* Center Column */}
      <div className="w-[var(--card-width)] flex flex-col gap-8 py-8">
        {/* Hero Image */}
        <div className="w-full aspect-[4/3] bg-gray-200 rounded-lg relative overflow-hidden">
          <Image 
            src="/coverphoto.jpeg"
            alt="IMM 2025 Cover"
            fill
            className="object-cover"
          />
        </div>

        {/* Title */}
        <div className="text-center">
          <div className="text-5xl font-bold text-[#414759] text-left">Interactive Media Management</div>
          <div className="text-5xl font-bold text-[#414759] mt-2 text-left">2025</div>
        </div>

        {/* Playlist Component */}
        <Playlist profiles={profiles} />
      </div>

      {/* Right Column */}
      <div className="flex-1"></div>
    </div>
  );
}
