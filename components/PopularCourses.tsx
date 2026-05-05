"use client";

import { useState } from "react";
import { motion, MotionProps } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

import CourseCard, { Course } from "./CourseCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

const categories = [
  "All courses",
  "UI/UX Design",
  "Development",
  "Digital Marketing",
  "Language Learning",
  "Business Consulting",
];

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
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400",
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
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400",
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
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400",
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
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400",
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

const anim = (delay: number = 0): MotionProps => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function PopularCourses() {
  const [activeCategory, setActiveCategory] = useState("All courses");

  const filtered =
    activeCategory === "All courses"
      ? courses
      : courses.filter((c) => c.category === activeCategory);

  return (
    <section className="bg-[#e8f0ff] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div {...anim()} className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Explore Most Popular Courses
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Learn from top-rated instructors across in-demand categories and
            start growing your skills today.
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          {...anim(0.1)}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all border ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground border-primary shadow-md"
                  : "bg-secondary border-border hover:bg-muted"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Swiper */}
        <motion.div
          {...anim(0.2)}
          className="relative popular-courses-swiper group"
        >
          <Swiper
            modules={[Grid, Navigation, Pagination]}
            grid={{ rows: 2, fill: "row" }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2, grid: { rows: 2 } },
              1024: { slidesPerView: 3, grid: { rows: 2 } },
            }}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
            }}
            navigation={{
              nextEl: ".courses-next",
              prevEl: ".courses-prev",
            }}
            className="pb-10"
          >
            {filtered.map((course, i) => (
              <SwiperSlide key={course.title + i}>
                <CourseCard course={course} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="relative flex items-center justify-center min-h-10 mt-4">
            <div className="custom-pagination static! flex items-center justify-center gap-3"></div>

            <div className="absolute right-0 flex items-center gap-2">
              <button className="courses-prev w-10 h-10 rounded-md border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-primary transition-all disabled:opacity-30">
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button className="courses-next w-10 h-10 rounded-md bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-all disabled:opacity-30">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
