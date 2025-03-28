"use client";

import { getImmProfiles } from '@/lib/api';
import Playlist from '../components/Playlist';
import Image from 'next/image';

export default function Home() {
  const profiles = getImmProfiles();

  return (
    <div className="flex min-h-screen bg-[#E4F5FF]">
      {/* Left Column */}
      <div className="flex-1"></div>

      {/* Center Column */}
      <div className="flex-[3] max-w-[800px] flex flex-col gap-8 py-8">
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
