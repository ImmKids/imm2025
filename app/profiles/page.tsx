"use client";

import Image from 'next/image';
import ProfileCard from '@/components/ProfileCard';
import { useState } from 'react';
import { getImmProfiles } from '@/lib/api';
import { ImmProfile } from '@/lib/types';
import { motion, AnimatePresence } from 'framer-motion';

export default function Prototype() {
  const profiles = getImmProfiles();
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

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
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
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

        {/* Profile Popup */}
        <AnimatePresence>
          {isPopupOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
              onClick={handleClosePopup}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={e => e.stopPropagation()}
              >
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-24 h-24 relative rounded-full overflow-hidden">
                    <Image
                      src={currentProfile.profileImage}
                      alt={currentProfile.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#65688D]">{currentProfile.name}</h2>
                    <p className="text-xl text-gray-600">{currentProfile.title}</p>
                  </div>
                </div>
                <div className="mb-6">
                  <Image
                    src={currentProfile.topImage}
                    alt="Work sample"
                    width={800}
                    height={400}
                    className="rounded-lg w-full object-cover"
                  />
                </div>
                <p className="text-gray-700 whitespace-pre-line">{currentProfile.description}</p>
                <div className="mt-6 flex justify-end">
                  <button
                    onClick={handleClosePopup}
                    className="px-6 py-2 bg-[#65688D] text-white rounded-lg hover:bg-[#887D9A]"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}