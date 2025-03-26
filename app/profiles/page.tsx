"use client";

import Image from 'next/image';
import ProfileCard from '@/components/ProfileCard';
import { useState } from 'react';
import { getImmProfiles } from '@/lib/api';
import { ImmProfile } from '@/lib/types';

export default function Prototype() {
  const profiles = getImmProfiles();
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentProfileIndex((prevIndex) => 
      prevIndex === 0 ? profiles.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentProfileIndex((prevIndex) => 
      prevIndex === profiles.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePlay = () => {
    // You can implement auto-play functionality here if needed
    console.log('Play clicked');
  };

  const currentProfile: ImmProfile = profiles[currentProfileIndex];

  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/bg.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <ProfileCard
          name={currentProfile.name}
          title={currentProfile.title}
          description={currentProfile.description}
          profileImage={currentProfile.profileImage}
          topImage={currentProfile.topImage}
          linkedinUrl={currentProfile.linkedinUrl}
          onPrevious={handlePrevious}
          onPlay={handlePlay}
          onNext={handleNext}
        />
      </div>
    </div>
  );
}