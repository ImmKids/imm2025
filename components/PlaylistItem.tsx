import { ImmProfile } from '@/lib/types';
import Image from 'next/image';

interface PlaylistItemProps {
  profile: ImmProfile;
  isSelected?: boolean;
  onClick?: () => void;
}

export default function PlaylistItem({ profile, isSelected = false, onClick }: PlaylistItemProps) {
  return (
    <div 
      onClick={onClick}
      className={`flex items-center gap-4 p-3 cursor-pointer border-b border-black
        ${isSelected ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}>
      <div className="w-12 h-12 relative">
        <Image
          src={profile.profileImage}
          alt={profile.name}
          fill
          className="rounded-full object-cover"
        />
      </div>
      <div className="flex-1">
        <div className={`text-sm ${isSelected ? 'text-white' : 'text-gray-600'}`}>{profile.title}</div>
        <div className={`text-sm ${isSelected ? 'text-white' : 'text-gray-600'}`}>{profile.name}</div>
      </div>
    </div>
  );
} 