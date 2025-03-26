import { ImmProfile } from './types';

const PLACEHOLDER_PROFILE = "https://picsum.photos/200";  // Square profile image
export const PLACEHOLDER_WORK = "https://picsum.photos/800/600";  // Landscape work image

export function getImmProfiles(): ImmProfile[] {
  return [
    {
      id: 1,
      name: "AURELIA",
      title: "Interaction Designer", 
      description: "Designing innovative ways for users to interact with digital products. Passionate about creating intuitive and delightful user experiences.",
      profileImage: PLACEHOLDER_PROFILE,
      topImage: PLACEHOLDER_WORK,
      linkedinUrl: "https://linkedin.com/in/aurelia"
    },
    {
      id: 12,
      name: "CECELLIA",
      title: "Content Strategist",
      description: "Developing engaging content strategies for digital platforms. Focused on creating meaningful narratives that connect with audiences.",
      profileImage: PLACEHOLDER_PROFILE,
      topImage: PLACEHOLDER_WORK,
      linkedinUrl: "https://linkedin.com/in/cecellia"
    },
    {
      id: 5,
      name: "CELESTE",
      title: "Digital Artist",
      description: "Creating stunning digital artwork and interactive installations. Specializing in blending traditional art with new media technologies.",
      profileImage: PLACEHOLDER_PROFILE,
      topImage: PLACEHOLDER_WORK,
      linkedinUrl: "https://linkedin.com/in/celeste"
    },
    {
      id: 7,
      name: "CHEN",
      title: "Interactive Designer",
      description: "Designing intuitive and engaging user interfaces. Focused on creating seamless interactions between users and digital products.",
      profileImage: PLACEHOLDER_PROFILE,
      topImage: PLACEHOLDER_WORK,
      linkedinUrl: "https://linkedin.com/in/chen"
    },
    {
      id: 2,
      name: "CLAY",
      title: "Motion Designer",
      description: "Creating fluid animations and interactive storytelling experiences. Focused on bringing digital narratives to life through motion and interaction.",
      profileImage: PLACEHOLDER_PROFILE,
      topImage: PLACEHOLDER_WORK,
      linkedinUrl: "https://linkedin.com/in/clay"
    },
    {
      id: 13,
      name: "IAN",
      title: "Interactive Developer",
      description: "Specializing in immersive web experiences and 3D interactions. Passionate about pushing the boundaries of web technology and creating engaging user experiences.",
      profileImage: PLACEHOLDER_PROFILE,
      topImage: PLACEHOLDER_WORK,
      linkedinUrl: "https://linkedin.com/in/ian"
    },
    {
      id: 10,
      name: "KANWAL",
      title: "Digital Producer",
      description: "Managing and coordinating digital projects with a focus on innovation. Skilled in bringing creative visions to life through effective team collaboration.",
      profileImage: PLACEHOLDER_PROFILE,
      topImage: PLACEHOLDER_WORK,
      linkedinUrl: "https://linkedin.com/in/kanwal"
    },
    {
      id: 8,
      name: "LINA",
      title: "Sound Designer",
      description: "Creating immersive audio experiences and interactive soundscapes. Specializing in audio-visual integration for digital media.",
      profileImage: PLACEHOLDER_PROFILE,
      topImage: PLACEHOLDER_WORK,
      linkedinUrl: "https://linkedin.com/in/lina"
    },
    {
      id: 9,
      name: "MEGGIE",
      title: "Experience Designer",
      description: "Crafting holistic user experiences across digital platforms. Passionate about creating meaningful connections through design.",
      profileImage: PLACEHOLDER_PROFILE,
      topImage: PLACEHOLDER_WORK,
      linkedinUrl: "https://linkedin.com/in/meggie"
    },
    {
      id: 11,
      name: "MINT",
      title: "3D Artist",
      description: "Creating stunning 3D visualizations and animations. Specializing in bringing imaginative concepts to life through digital sculpture and modeling.",
      profileImage: PLACEHOLDER_PROFILE,
      topImage: PLACEHOLDER_WORK,
      linkedinUrl: "https://linkedin.com/in/mint"
    },
    {
      id: 4,
      name: "PRIS",
      title: "Creative Technologist",
      description: "Merging art and technology to create unique digital experiences. Focused on experimental interfaces and creative coding.",
      profileImage: PLACEHOLDER_PROFILE,
      topImage: PLACEHOLDER_WORK,
      linkedinUrl: "https://linkedin.com/in/pris"
    },
    {
      id: 15,
      name: "RYAN",
      title: "UX/UI Designer",
      description: "Crafting intuitive user experiences with a focus on accessibility and user-centered design. Passionate about creating meaningful digital solutions.",
      profileImage: PLACEHOLDER_PROFILE,
      topImage: PLACEHOLDER_WORK,
      linkedinUrl: "https://linkedin.com/in/ryan"
    },
    {
      id: 6,
      name: "SHIV",
      title: "AR/VR Developer",
      description: "Developing cutting-edge augmented and virtual reality experiences. Passionate about creating immersive storytelling through emerging technologies.",
      profileImage: PLACEHOLDER_PROFILE,
      topImage: PLACEHOLDER_WORK,
      linkedinUrl: "https://linkedin.com/in/shiv"
    },
    {
      id: 3,
      name: "SID",
      title: "UX Researcher",
      description: "Exploring the intersection of user behavior and digital interfaces. Dedicated to creating data-driven design solutions.",
      profileImage: PLACEHOLDER_PROFILE,
      topImage: PLACEHOLDER_WORK,
      linkedinUrl: "https://linkedin.com/in/sid"
    },
    {
      id: 14,
      name: "YAN",
      title: "Frontend Developer",
      description: "Building responsive and accessible web applications. Focused on creating performant and user-friendly digital experiences.",
      profileImage: PLACEHOLDER_PROFILE,
      topImage: PLACEHOLDER_WORK,
      linkedinUrl: "https://linkedin.com/in/yan"
    }
  ];
}