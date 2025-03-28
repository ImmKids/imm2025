import { ImmProfile } from '@/lib/types';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface PlaylistItemProps {
  profile: ImmProfile;
}

export default function PlaylistItem({ profile }: PlaylistItemProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/profiles?id=${profile.id}`);
  };

  return (
    <div 
      onClick={handleClick}
      className="flex items-center gap-4 p-3 cursor-pointer border-b border-black hover:bg-blue-500 hover:text-white">
      <div className="w-12 h-12 relative">
        <Image
          src={profile.profileImage}
          alt={profile.name}
          fill
          className="rounded-full object-cover"
        />
      </div>
      <div className="flex-1">
        <div className="text-sm text-gray-600 group-hover:text-white">{profile.title}</div>
        <div className="text-sm text-gray-600 group-hover:text-white">{profile.name}</div>
      </div>
    </div>
  );
} 