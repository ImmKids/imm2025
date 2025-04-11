export interface Doodle {
  base: string;
  hover?: string;
}

export interface ImmProfile {
  id: number;
  name: string;
  title: string;
  description: string;
  profileImage: string;
  topImage: string;
  linkedinUrl: string;
  instagramUrl: string;
  githubUrl: string;
  portfolioUrl: string;
  doodles: Doodle[];
} 