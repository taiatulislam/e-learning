// Data Fetching
import { ICategory } from "@/type/categoryType";
import { ICourse } from "@/type/courseType";
import { IInstructor } from "@/type/instructorType";

export const fetchCourses = async (): Promise<ICourse[]> => {
  const response = await fetch("/data/courses.json");

  if (!response.ok) {
    throw new Error("Failed to fetch courses");
  }

  return response.json();
};

export const fetchInstructors = async (): Promise<IInstructor[]> => {
  const res = await fetch("/data/instructors.json");

  if (!res.ok) {
    throw new Error("Failed to fetch instructors");
  }

  return res.json();
};

export const fetchCategories = async (): Promise<ICategory[]> => {
  const response = await fetch("/data/categories.json");

  if (!response.ok) {
    throw new Error("Failed to fetch courses");
  }

  return response.json();
};
