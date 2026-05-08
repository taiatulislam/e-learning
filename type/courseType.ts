import { IInstructor } from "./instructorType";

export interface ICourse {
  id: string;
  title: string;
  description: string;
  instructor: IInstructor[];
  category: string;
  badge: string;
  badgeColor: string;
  lessons: number;
  quiz: number;
  rating: number;
  duration: string;
  students: string;
  price: number;
  discount: number;
  accessTime: string;
  thumbnailImage: string;
  language: string;
  thumbnailVideoUrl: string;
  status: "available" | "upcoming";
  courseContent: { id: string; text: string }[];
}
