"use client";

import { getImmProfiles } from '@/lib/api';
import Playlist from '../components/Playlist';
import Image from 'next/image';

export default function Home() {
  const profiles = getImmProfiles();

  return (
    <div className="relative flex flex-col min-h-screen bg-[#E4F5FF]">
      {/* Banner Container */}
      <div className="absolute top-0 left-0 w-full z-[50]">
        <div className="w-full h-[90vh] relative group transform scale-x-[1] scale-y-[0.3] origin-top transition-transform duration-300 ease-in-out">
          <Image
            src="/banner.png"
            alt="IMM 2025 Banner"
            fill
            className="object-cover transition-opacity duration-300 group-hover:opacity-0"
          />
          <Image
            src="/bannerhover.png"
            alt="IMM 2025 Banner Hover"
            fill
            className="object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-[10] flex flex-1 w-full">
        {/* Left Column */}
        <div className="flex-1"></div>

        {/* Center Column */}
        <div className="w-[var(--card-width)] flex flex-col gap-8 py-8">
          {/* Hero Image */}
          <div className="w-full aspect-[4/3] bg-gray-200 rounded-lg relative">
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
    </div>
  );
}