"use client";

import Image from 'next/image';
import ProfileCard from '@/components/ProfileCard';
import ProfileHead from '@/components/ProfileHead';
import { useState, useEffect, useMemo, useCallback, Suspense } from 'react';
import { getImmProfiles } from '@/lib/api';
import { ImmProfile } from '@/lib/types';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import DoodleBackground from '@/components/DoodleBackground';

function ProfileContent() {
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
      <ProfileHead />
      {/* Doodle Background */}
      <DoodleBackground profiles={profiles} currentProfileId={currentProfile.id} />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center pointer-events-none">
        <div className="relative pointer-events-auto">
          <ProfileCard
            name={currentProfile.name}
            title={currentProfile.title}
            description={currentProfile.description}
            profileImage={currentProfile.profileImage}
            topImage={currentProfile.topImage}
            linkedinUrl={currentProfile.linkedinUrl}
            portfolioUrl={currentProfile.portfolioUrl}
            onPrevious={handlePrevious}
            onPlay={handlePlay}
            onNext={handleNext}
          />
          
          {/* Back button positioned below the card */}
          <motion.button 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            onClick={() => router.push('/')}
            className="absolute -bottom-16 left-0 px-6 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-gray-700 flex items-center gap-2 shadow-md"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </motion.button>
        </div>

        {/* Profile Popup */}
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
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default function Prototype() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProfileContent />
    </Suspense>
  );
}