export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  recommendedFor: string[];
  iconName: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specializations: string[];
  approach: string;
  bio: string;
  academic: string[];
  image: string;
  email?: string;
  phone?: string;
  website?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  authorId: string;
  category: string;
  image: string;
  readTime: string;
  author?: {
    name: string;
    image: string;
  };
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  hours: string[];
}

export interface HomeContent {
  hero: {
    image: string;
    avatars: string[];
  }
}