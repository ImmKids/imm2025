import { ImmProfile } from '@/lib/types';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { MoreVertical, Instagram, Linkedin, Github } from 'lucide-react';
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

  return (
    <div 
      ref={itemRef}
      onClick={handleClick}
      onMouseLeave={() => setShowMenu(false)}
      className="flex items-center gap-4 p-6 cursor-pointer border-b border-black hover:bg-blue-500 hover:text-white relative">
      <div className="w-16 h-16 relative">
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
      <button 
        onClick={handleMenuClick}
        className="p-2 hover:bg-blue-600 rounded-full">
        <MoreVertical className="w-5 h-5" />
      </button>

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