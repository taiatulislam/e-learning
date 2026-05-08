"use client";

import { useState } from "react";
import { motion, MotionProps } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

import CourseCard from "./CourseCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useQuery } from "@tanstack/react-query";
import { ICourse } from "@/type/courseType";
import { ICategory } from "@/type/categoryType";
import { fetchCategories, fetchCourses } from "@/utils/helpers";

const anim = (delay: number = 0): MotionProps => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, margin: "-50px" },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function PopularCourses() {
  const [activeCategory, setActiveCategory] = useState("All courses");

  const {
    data: courses = [],
    isLoading: coursesLoading,
    isError,
    error,
  } = useQuery<ICourse[]>({
    queryKey: ["courses"],
    queryFn: fetchCourses,
  });

  const { data: categories = [{ id: "cat-0", name: "All courses" }] } =
    useQuery<ICategory[]>({
      queryKey: ["categories"],
      queryFn: fetchCategories,
    });

  if (coursesLoading && courses.length === 0) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{(error as Error).message}</p>;
  }

  const filtered =
    activeCategory === "All courses"
      ? courses
      : courses?.filter((c) => c.category === activeCategory);

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
          {categories?.slice(0, 6).map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.name)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all border ${
                activeCategory === cat.name
                  ? "bg-primary text-primary-foreground border-primary shadow-md"
                  : "bg-secondary border-border hover:bg-muted"
              }`}
            >
              {cat.name}
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
            {filtered?.map((course, i) => (
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
