"use client";

import Image from 'next/image';
import ProfileCard from '@/components/ProfileCard';
import { useState, useEffect, useMemo, useCallback } from 'react';
import { getImmProfiles } from '@/lib/api';
import { ImmProfile } from '@/lib/types';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Prototype() {
  const profiles = useMemo(() => getImmProfiles(), []);
  const searchParams = useSearchParams();
  const router = useRouter();
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Handle URL query parameter
  useEffect(() => {
    const id = searchParams.get('id');
    if (id) {
      const index = profiles.findIndex(profile => profile.id === parseInt(id));
      if (index !== -1) {
        setCurrentProfileIndex(index);
      }
    }
    setIsLoading(false);
  }, [searchParams, profiles]);

  const handlePrevious = useCallback(() => {
    const newIndex = currentProfileIndex === 0 ? profiles.length - 1 : currentProfileIndex - 1;
    setCurrentProfileIndex(newIndex);
    router.push(`/profiles?id=${profiles[newIndex].id}`);
  }, [currentProfileIndex, profiles, router]);

  const handleNext = useCallback(() => {
    const newIndex = currentProfileIndex === profiles.length - 1 ? 0 : currentProfileIndex + 1;
    setCurrentProfileIndex(newIndex);
    router.push(`/profiles?id=${profiles[newIndex].id}`);
  }, [currentProfileIndex, profiles, router]);

  const handlePlay = useCallback(() => {
    setIsPopupOpen(true);
  }, []);

  const handleClosePopup = useCallback(() => {
    setIsPopupOpen(false);
  }, []);

  const currentProfile: ImmProfile = profiles[currentProfileIndex];

  if (isLoading) {
    return null;
  }

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