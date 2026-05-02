"use client";

import Image from "next/image";
import { Star, BookOpen, Clock, Users } from "lucide-react";

export type Course = {
  title: string;
  instructor: string;
  lessons: number;
  duration: string;
  students: string;
  price: string;
  rating: number;
  image: string;
  badge?: string;
  badgeColor?: string;
};

type Props = {
  course: Course;
};

export default function CourseCard({ course }: Props) {
  return (
    <div className="bg-card rounded-2xl border border-border overflow-hidden flex flex-col h-full shadow-sm hover:shadow-md transition-shadow duration-300 mb-5">
      {/* Image */}
      <div className="relative aspect-2/1 overflow-hidden m-2 rounded-lg">
        <Image
          src={course.image}
          alt={course.title}
          width={400}
          height={200}
          className="w-full h-full object-cover"
        />

        {/* Rating */}
        <div className="absolute top-2 left-2 flex items-center gap-1 bg-white/90 rounded-full px-2 py-0.5 text-xs font-medium">
          <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
          {course.rating}
        </div>

        {/* Badge */}
        {course.badge && (
          <span
            className={`absolute top-2 right-2 text-xs px-2 py-0.5 rounded-full ${
              course.badgeColor || "bg-blue-100 text-blue-600"
            }`}
          >
            {course.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-3 pt-1 flex flex-col flex-1">
        <h3 className="text-base font-bold text-foreground mb-1 line-clamp-1">
          {course.title}
        </h3>
        <p className="text-xs text-muted-foreground mb-3">
          by{" "}
          <span className="text-primary font-medium">{course.instructor}</span>
        </p>

        {/* Meta */}
        <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-muted-foreground mb-2">
          <span className="flex items-center gap-1 border border-border bg-[#e8f0ff] px-2 py-1 rounded-xl">
            <BookOpen className="w-3.5 h-3.5" /> {course.lessons} Lessons
          </span>
          <span className="flex items-center gap-1 border border-border bg-[#e8f0ff] px-2 py-1 rounded-xl">
            <Clock className="w-3.5 h-3.5" /> {course.duration}
          </span>
        </div>
        <div className="flex items-center gap-1 text-xs text-muted-foreground mb-4 border border-border bg-[#e8f0ff] px-2 py-1 rounded-xl w-fit">
          <Users className="w-3.5 h-3.5" />
          <span>{course.students} Students Enrolled</span>
        </div>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between pt-3 border-t border-border">
          <div>
            <span className="text-lg font-extrabold text-foreground">
              {course.price}
            </span>
            <span className="text-xs text-muted-foreground ml-1">
              /lifetime
            </span>
          </div>
          <button className="icon-gradient font-semibold text-xs px-3 py-1.5 rounded-full text-white bg-primary transition-all shadow-lg">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}
