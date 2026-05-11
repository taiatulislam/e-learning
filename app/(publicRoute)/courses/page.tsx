"use client";

import { useState } from "react";
import CourseCard from "@/components/CourseCard";
import { ICourse } from "@/type/courseType";
import { useQuery } from "@tanstack/react-query";
import { ICategory } from "@/type/categoryType";
import { fetchCategories, fetchCourses } from "@/utils/helpers";

export default function Page() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All courses");

  const { data: courses = [] } = useQuery<ICourse[]>({
    queryKey: ["courses"],
    queryFn: fetchCourses,
  });

  const { data: fetchedCategories = [] } = useQuery<ICategory[]>({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const categories: ICategory[] = [
    { id: "all", name: "All courses", image: "", courses: 0 },
    ...fetchedCategories,
  ];

  const filtered = courses.filter((c) => {
    const matchCategory = category === "All courses" || c.category === category;

    const matchSearch = c.title.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 my-10 flex flex-col lg:flex-row gap-8">
      {/* 🔹 LEFT SIDEBAR */}
      <aside className="w-full lg:w-65 shrink-0 border rounded-xl p-5 h-fit sticky top-10 bg-white">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>

        {/* Search */}
        <div className="mb-6">
          <p className="text-sm mb-2">Search</p>
          <input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-[12px]"
          />
        </div>

        {/* Categories */}
        <div>
          <p className="text-sm mb-2">Category</p>
          <div className="flex flex-col gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.name)}
                className={`text-left text-xs px-3 py-2 rounded-lg border transition ${
                  category === cat.name
                    ? "bg-primary text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </aside>

      {/* 🔹 RIGHT CONTENT */}
      <main className="flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.length > 0 ? (
            filtered.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No courses found
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
