import { ImmProfile } from '@/lib/types';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { MoreVertical, Instagram, Linkedin, Github, Play } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface PlaylistItemProps {
  profile: ImmProfile;
}

export default function PlaylistItem({ profile }: PlaylistItemProps) {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    router.push(`/profiles?id=${profile.id}`);
  };

  const handleMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  const handlePlayClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    router.push(`/profiles?id=${profile.id}`);
  };

  return (
    <div 
      ref={itemRef}
      onClick={handleClick}
      onMouseLeave={() => setShowMenu(false)}
      className="flex items-center gap-6 p-4 cursor-pointer border-b border-gray-200 hover:bg-gray-50 relative">
      <div className="w-24 h-24 relative flex-shrink-0">
        <Image
          src={profile.profileImage}
          alt={profile.name}
          fill
          className="rounded-lg object-cover"
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 truncate">{profile.name}</div>
        <div className="text-base text-gray-600 group-hover:text-gray-900 truncate">{profile.title}</div>
      </div>
      <div className="flex items-center gap-3">
        <button 
          onClick={handlePlayClick}
          className="p-2 hover:bg-gray-200 rounded-full transition-colors">
          <Play className="w-6 h-6 text-gray-600" />
        </button>
        <button 
          onClick={handleMenuClick}
          className="p-2 hover:bg-gray-200 rounded-full transition-colors">
          <MoreVertical className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      {/* Menu Popup */}
      {showMenu && (
        <div 
          ref={menuRef}
          className="absolute right-0 top-full mt-1 bg-white rounded-lg shadow-lg py-2 z-50"
          onClick={e => e.stopPropagation()}>
          <a 
            href={profile.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-gray-700">
            <Instagram className="w-4 h-4" />
            <span>Instagram</span>
          </a>
          <a 
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-gray-700">
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
          <a 
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-gray-700">
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        </div>
      )}
    </div>
  );
} 