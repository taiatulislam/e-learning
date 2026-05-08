export interface IInstructor {
  id: string;
  name: string;
  instructorType: string;
  designation: string;
  company: string;
  email: string;
  phone: string;
  imageUrl: string;
  bio: string;
  categories: string[];
  expertise: string[];
  students: number;
  reviews: number;
  courses: number;
  rating: number;
  avatarGrad: string;
  social: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    website?: string;
  };
  badge: string;
  featured: boolean,
}
