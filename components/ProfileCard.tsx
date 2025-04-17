import { ChevronLeft, ChevronRight, Play, Linkedin } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProfileCardProps {
  name: string;
  title: string;
  description: string;
  profileImage: string;
  topImage: string;
  linkedinUrl: string;
  portfolioUrl: string;
  onPrevious?: () => void;
  onPlay?: () => void;
  onNext?: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  title,
  description,
  profileImage,
  topImage,
  linkedinUrl,
  portfolioUrl,
  onPrevious,
  onPlay,
  onNext,
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-[500px] md:max-w-[600px] lg:max-w-[800px] mx-auto h-auto bg-white p-3 sm:p-4 lg:p-6 flex flex-col gap-2 sm:gap-3 lg:gap-4 rounded-2xl border-4 border-[#C3BCBC]"
    >
      {/* Top row - Square image */}
      <motion.div 
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        className="relative w-full max-w-[400px] md:max-w-[500px] lg:max-w-none mx-auto aspect-[4/3] sm:aspect-[3/2] lg:aspect-square mb-2 sm:mb-3 lg:mb-4"
      >
        {topImage.endsWith('.mp4') ? (
          <video
            src={topImage}
            className="w-full h-full object-cover rounded-lg"
            autoPlay
            loop
            muted
            playsInline
            controls={false}
          />
        ) : (
          <Image
            src={topImage}
            alt="Top image"
            fill
            className="object-cover rounded-lg"
            priority
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "";
            }}
          />
        )}
      </motion.div>

      {/* Second row - Profile section */}
      <motion.div 
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 lg:gap-4 mb-2 sm:mb-3 lg:mb-4"
      >
        <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 relative rounded-full overflow-hidden">
          <Image
            src={profileImage}
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1 text-center sm:text-left">
          <motion.h3 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm sm:text-base lg:text-xl font-bold text-[#65688D]"
          >
            {name}
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xs sm:text-sm lg:text-base text-gray-600"
          >
            {title}
          </motion.p>
        </div>
        <div className="flex gap-2">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open(portfolioUrl, '_blank')}
            className="px-2 sm:px-3 lg:px-8 py-1 sm:py-1.5 lg:py-2 bg-[#65688D] text-white rounded-2xl hover:bg-[#887D9A] text-xs sm:text-sm lg:text-base"
          >
            Portfolio
          </motion.button>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={linkedinUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center p-1 sm:p-1.5 lg:p-2 bg-[#65688D] rounded-lg hover:bg-[#887D9A]"
          >
            <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 text-white" />
          </motion.a>
        </div>
      </motion.div>

      {/* Third row - Description */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mb-2 sm:mb-3 lg:mb-4"
      >
        <p className="text-xs sm:text-sm lg:text-base text-gray-700 h-[2.5rem] sm:h-[3rem] lg:h-[4.5rem] line-clamp-2 sm:line-clamp-2 lg:line-clamp-3">{description}</p>
      </motion.div>

      {/* Fourth row - Line */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.4 }}
        className="h-px bg-gray-300 mb-2 sm:mb-3 lg:mb-4"
      />

      {/* Fifth row - Controls */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex justify-center items-center gap-3 sm:gap-4 lg:gap-8">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-1.5 sm:p-1.5 lg:p-2 bg-gray-200 hover:bg-gray-300 rounded-full" 
          onClick={onPrevious}
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-8 lg:h-8 text-gray-700" />
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-1.5 sm:p-1.5 lg:p-2 bg-[#65688D] hover:bg-[#887D9A] rounded-full" 
          onClick={onPlay}
        >
          <Play className="w-4 h-4 sm:w-5 sm:h-5 lg:w-8 lg:h-8 text-white" />
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-1.5 sm:p-1.5 lg:p-2 bg-gray-200 hover:bg-gray-300 rounded-full" 
          onClick={onNext}
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-8 lg:h-8 text-gray-700" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default ProfileCard;