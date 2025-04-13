import { motion } from 'framer-motion';
import Image from 'next/image';
import { ImmProfile, Doodle } from '@/lib/types';
import { useEffect, useState } from 'react';

interface DoodleBackgroundProps {
  profiles: ImmProfile[];
  currentProfileId?: number;
}

export default function DoodleBackground({ profiles, currentProfileId }: DoodleBackgroundProps) {
  const [doodlePositions, setDoodlePositions] = useState<Array<{
    x: number;
    y: number;
    rotation: number;
    scale: number;
    side: 'left' | 'right';
  }>>([]);
  const [hoveredDoodles, setHoveredDoodles] = useState<Record<string, boolean>>({});

  // Function to generate positions for left and right sides
  const generatePositions = (count: number) => {
    const positions = [];
    // Split images evenly between left and right
    const leftCount = Math.ceil(count / 2);
    const rightCount = count - leftCount;

    // Generate positions for left side
    for (let i = 0; i < leftCount; i++) {
      const section = Math.floor(i / (leftCount / 3)); // Divide left side into 3 sections
      const x = (section * window.innerWidth * 0.1) + (Math.random() * window.innerWidth * 0.1); // Left 60% of the screen
      const y = (i % 3) * (window.innerHeight / 3) + Math.random() * (window.innerHeight / 3); // Distribute vertically
      
      positions.push({
        x,
        y,
        rotation: -15 + Math.random() * 30,
        scale: 1.2 + Math.random() * 0.6, // Increased scale range: 1.2 to 1.8
        side: 'left' as const
      });
    }

    // Generate positions for right side
    for (let i = 0; i < rightCount; i++) {
      const section = Math.floor(i / (rightCount / 3)); // Divide right side into 3 sections
      const x = window.innerWidth * 0.7 + (section * window.innerWidth * 0.1) + (Math.random() * window.innerWidth * 0.1); // Right 30% of the screen
      const y = (i % 3) * (window.innerHeight / 3) + Math.random() * (window.innerHeight / 3); // Distribute vertically
      
      positions.push({
        x,
        y,
        rotation: -15 + Math.random() * 30,
        scale: 1.2 + Math.random() * 0.6, // Increased scale range: 1.2 to 1.8
        side: 'right' as const
      });
    }

    return positions;
  };

  // Update positions when profiles or currentProfileId changes
  useEffect(() => {
    const currentProfile = profiles.find(p => p.id === currentProfileId);
    const doodlesToShow = currentProfile ? currentProfile.doodles : profiles.flatMap(p => p.doodles);
    setDoodlePositions(generatePositions(doodlesToShow.length));
  }, [profiles, currentProfileId]);

  const currentProfile = profiles.find(p => p.id === currentProfileId);
  const allDoodles = currentProfile ? currentProfile.doodles : profiles.flatMap(p => p.doodles);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {allDoodles.map((doodle: Doodle, index) => {
        const doodleKey = `${doodle.base}-${index}-${currentProfileId}`;
        const isHovered = hoveredDoodles[doodleKey] || false;

        return (
          <motion.div
            key={doodleKey}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 1, 
              scale: doodlePositions[index]?.scale || 1,
              x: doodlePositions[index]?.x || 0,
              y: doodlePositions[index]?.y || 0,
              rotate: doodlePositions[index]?.rotation || 0
            }}
            transition={{ 
              duration: 0.8,
              delay: index * 0.05,
              ease: "easeOut"
            }}
            className="absolute w-[400px] h-[300px] group cursor-pointer"
            style={{
              transform: `translate(${doodlePositions[index]?.x || 0}px, ${doodlePositions[index]?.y || 0}px) rotate(${doodlePositions[index]?.rotation || 0}deg)`
            }}
            onMouseEnter={() => {
              console.log('Mouse entered doodle:', {
                base: doodle.base,
                hover: doodle.hover,
                index,
                isHovered
              });
              setHoveredDoodles(prev => ({ ...prev, [doodleKey]: true }));
            }}
            onMouseLeave={() => {
              console.log('Mouse left doodle:', {
                base: doodle.base,
                hover: doodle.hover,
                index,
                isHovered
              });
              setHoveredDoodles(prev => ({ ...prev, [doodleKey]: false }));
            }}
          >
            <div className="relative w-full h-full">
              {/* Base image - only visible when not hovered */}
              <Image
                src={doodle.base}
                alt="Doodle"
                fill
                className={`object-contain rounded-lg transition-all duration-300 ${isHovered ? 'opacity-0' : 'opacity-30'}`}
              />
              {/* Hover image or effect - only visible when hovered */}
              {doodle.hover ? (
                <Image
                  src={doodle.hover}
                  alt="Doodle Hover"
                  fill
                  className={`object-contain rounded-lg transition-all duration-300 transform-gpu will-change-transform origin-center ${isHovered ? 'opacity-100 scale-110' : 'opacity-0'}`}
                />
              ) : (
                <Image
                  src={doodle.base}
                  alt="Doodle Hover"
                  fill
                  className={`object-contain rounded-lg transition-all duration-300 transform-gpu will-change-transform origin-center ${isHovered ? 'opacity-100 scale-110 rotate-6' : 'opacity-0'}`}
                />
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
} 