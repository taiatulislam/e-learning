// Data Fetching

export const fetchCourses = async () => {
  const response = await fetch("/data/courses.json");

  if (!response.ok) {
    throw new Error("Failed to fetch courses");
  }

  return response.json();
};

export const fetchInstructors = async () => {
  const response = await fetch("/data/instructors.json");

  if (!response.ok) {
    throw new Error("Failed to fetch courses");
  }

  return response.json();
};

export const fetchCategories = async () => {
  const response = await fetch("/data/categories.json");

  if (!response.ok) {
    throw new Error("Failed to fetch courses");
  }

  return response.json();
};
