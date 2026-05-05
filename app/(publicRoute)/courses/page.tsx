"use client";

import { useState } from "react";
import CourseCard, { Course } from "@/components/CourseCard";

export default function Page() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All courses");

  const courses: (Course & { category: string })[] = [
    {
      id: "1",
      title: "Learn Figma from Basic",
      instructor: "purepearl studio",
      lessons: 17,
      duration: "2h 16m",
      students: "850+",
      price: "$50.00",
      badge: "Beginner",
      badgeColor: "bg-primary/10 text-primary",
      rating: 4.5,
      category: "UI/UX Design",
      image:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400",
    },
    {
      id: "2",
      title: "Web Development Bootcamp",
      instructor: "devhub",
      lessons: 28,
      duration: "4h 10m",
      students: "2.1k+",
      price: "$75.00",
      badge: "All Levels",
      badgeColor: "bg-primary text-primary-foreground",
      rating: 4.5,
      category: "Development",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400",
    },
    {
      id: "3",
      title: "Digital Marketing Essentials",
      instructor: "market360",
      lessons: 18,
      duration: "3h 05m",
      students: "900+",
      price: "$55.00",
      badge: "Popular",
      badgeColor: "bg-destructive/10 text-destructive",
      rating: 4.5,
      category: "Digital Marketing",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400",
    },
    {
      id: "4",
      title: "English for Daily Conversations",
      instructor: "languageflow",
      lessons: 15,
      duration: "2h 00m",
      students: "700+",
      price: "$40.00",
      badge: "Intermediate",
      badgeColor: "bg-primary/10 text-primary",
      rating: 4.5,
      category: "Language Learning",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400",
    },
    {
      id: "5",
      title: "Digital Marketing Essentials",
      instructor: "market360",
      lessons: 18,
      duration: "3h 05m",
      students: "900+",
      price: "$55.00",
      badge: "All Levels",
      badgeColor: "bg-destructive/10 text-destructive",
      rating: 4.5,
      category: "Digital Marketing",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=240&fit=crop",
    },
    {
      id: "6",
      title: "English for Daily Conversations",
      instructor: "languageflow",
      lessons: 15,
      duration: "2h 00m",
      students: "700+",
      price: "$40.00",
      badge: "Intermediate",
      badgeColor: "bg-primary/10 text-primary",
      rating: 4.5,
      category: "Language Learning",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=240&fit=crop",
    },
    {
      id: "7",
      title: "Business Strategy Masterclass",
      instructor: "bizcoach",
      lessons: 22,
      duration: "5h 00m",
      students: "1.2k+",
      price: "$85.00",
      badge: "All Levels",
      badgeColor: "bg-primary text-primary-foreground",
      rating: 4.5,
      category: "Business Consulting",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=240&fit=crop",
    },
  ];

  const categories = [
    "All courses",
    "UI/UX Design",
    "Development",
    "Digital Marketing",
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
                key={cat}
                onClick={() => setCategory(cat)}
                className={`text-left text-xs px-3 py-2 rounded-lg border transition ${
                  category === cat
                    ? "bg-primary text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {cat}
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
