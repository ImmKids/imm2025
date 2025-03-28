import { ChevronLeft, ChevronRight, Play, Linkedin, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProfileCardProps {
  name: string;
  title: string;
  description: string;
  profileImage: string;
  topImage: string;
  linkedinUrl: string;
  onPrevious?: () => void;
  onPlay?: () => void;
  onNext?: () => void;
  onBack?: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  title,
  description,
  profileImage,
  topImage,
  linkedinUrl,
  onPrevious,
  onPlay,
  onNext,
  onBack,
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="w-[var(--card-width)] h-auto bg-white p-6 flex flex-col gap-4 rounded-2xl border-4 border-[#C3BCBC]"
    >
      {/* Top row - Square image */}
      <motion.div 
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        className="relative w-full aspect-square mb-4"
      >
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
      </motion.div>

      {/* Second row - Profile section */}
      <motion.div 
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex items-center gap-4 mb-4"
      >
        <div className="w-16 h-16 relative rounded-full overflow-hidden">
          <Image
            src={profileImage}
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1">
          <motion.h3 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold text-[#65688D]"
          >
            {name}
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600"
          >
            {title}
          </motion.p>
        </div>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-2 bg-[#65688D] text-white rounded-2xl hover:bg-[#887D9A]"
        >
          Portfolio
        </motion.button>
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={linkedinUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center justify-center px-2 py-2 bg-[#65688D] rounded-lg hover:bg-[#887D9A]"
        >
          <Linkedin className="w-6 h-6 text-white" />
        </motion.a>
      </motion.div>

      {/* Third row - Description */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mb-4"
      >
        <p className="text-gray-700 h-[4.5rem] line-clamp-3">{description}</p>
      </motion.div>

      {/* Fourth row - Line */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.4 }}
        className="h-px bg-gray-300 mb-4"
      />

      {/* Fifth row - Controls */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex justify-center items-center gap-8">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full" 
          onClick={onPrevious}
        >
          <ChevronLeft className="w-8 h-8 text-gray-700" />
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 bg-[#65688D] hover:bg-[#887D9A] rounded-full" 
          onClick={onPlay}
        >
          <Play className="w-8 h-8 text-white" />
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full" 
          onClick={onNext}
        >
          <ChevronRight className="w-8 h-8 text-gray-700" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default ProfileCard;