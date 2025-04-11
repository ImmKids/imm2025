'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getImmProfiles } from '@/lib/api';
import { ImmProfile } from '@/lib/types';
import { useRouter } from 'next/navigation';

export default function ProfileHead() {
  const searchParams = useSearchParams();
  const [profile, setProfile] = useState<ImmProfile | null>(null);
  const router = useRouter();
  
  useEffect(() => {
    const id = searchParams.get('id');
    if (id) {
      const profiles = getImmProfiles();
      const foundProfile = profiles.find(p => p.id === parseInt(id, 10));
      if (foundProfile) {
        setProfile(foundProfile);
        
        document.title = `${foundProfile.name} - ${foundProfile.title} | IMM Grad Show 2025`;
        
        updateMetaTags(foundProfile);
      }
    }
  }, [searchParams]);
  
  const updateMetaTags = (profile: ImmProfile) => {
    let descTag = document.querySelector('meta[name="description"]');
    if (!descTag) {
      descTag = document.createElement('meta');
      descTag.setAttribute('name', 'description');
      document.head.appendChild(descTag);
    }
    descTag.setAttribute('content', profile.description || "IMM Graduate Portfolio");
    
    updateMetaTag('og:title', `${profile.name} - ${profile.title}`);
    updateMetaTag('og:description', profile.description || "IMM Graduate Portfolio");
    updateMetaTag('og:image', profile.profileImage);
    updateMetaTag('og:url', `https://dev.sheridanimm.com/profiles?id=${profile.id}`);
    updateMetaTag('og:type', 'website');
    
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:site', 'sheridanimm.com');
    updateMetaTag('twitter:creator', '@sheridanimm');
    updateMetaTag('twitter:title', `${profile.name} - ${profile.title}`);
    updateMetaTag('twitter:description', profile.description || "IMM Graduate Portfolio");
    updateMetaTag('twitter:image', profile.profileImage);
  };
  
  const updateMetaTag = (property: string, content: string) => {
    let metaTag = document.querySelector(`meta[property="${property}"]`);
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.setAttribute('property', property);
      document.head.appendChild(metaTag);
    }
    metaTag.setAttribute('content', content);
  };
  
  return null;
}