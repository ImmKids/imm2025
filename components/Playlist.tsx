import { ImmProfile } from '@/lib/types';
import { Shuffle, Play } from 'lucide-react';
import PlaylistItem from './PlaylistItem';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface PlaylistProps {
  profiles: ImmProfile[];
}

export default function Playlist({ profiles: initialProfiles }: PlaylistProps) {
  const [profiles, setProfiles] = useState(initialProfiles);
  const router = useRouter();

  useEffect(() => {
    // Shuffle profiles on component mount
    const shuffled = [...initialProfiles].sort(() => Math.random() - 0.5);
    setProfiles(shuffled);
  }, [initialProfiles]);

  const handleShuffle = () => {
    const shuffled = [...profiles].sort(() => Math.random() - 0.5);
    setProfiles(shuffled);
  };

  const handlePlay = () => {
    if (profiles.length > 0) {
      router.push(`/profiles?id=${profiles[0].id}`);
    }
  };

  return (
    <div className="rounded-lg p-0">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="text-xl font-bold text-[#414759]">
          We are IMM&apos;s 2025
        </div>
        <div className="flex gap-4">
          <button 
            onClick={handleShuffle}
            className="p-2 hover:bg-gray-100 rounded-full text-black">
            <Shuffle className="w-6 h-6" />
          </button>
          <button 
            onClick={handlePlay}
            className="p-2 bg-[#AEC9FF] hover:bg-[#9DB8FF] rounded-full text-white border border-black">
            <Play className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="mb-6 text-gray-700 space-y-4">
        <p>
          Interactive Media Management is a program where technology, design, and storytelling intersect. We learned to manage and develop mobile and web applications from end to end - from design/interactivity and user experience research, to full stack development, to pitching and content strategy.
        </p>
        {/* <p>
          This Graduation Show is a celebration of 15 unique individuals—each from different fields of
          study. Coming from diverse academic and professional backgrounds, we have broken past assumptions, adapted to new ways of thinking, and redefined our creative identities.
        </p> */}
      </div>
      {/* Playlist Items */}
      <div className="max-h-[500px] overflow-y-auto border-4 border-[#AEC9FF] rounded-lg p-4 bg-white/40">
        {profiles.map((profile) => (
          <PlaylistItem 
            key={profile.id} 
            profile={profile} 
          />
        ))}
      </div>
    </div>
  );
} 