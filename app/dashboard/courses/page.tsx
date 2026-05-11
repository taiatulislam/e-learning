"use client";

import CourseCard from "@/components/CourseCard";
import { ICourse } from "@/type/courseType";
import { fetchCourses } from "@/utils/helpers";
import { useQuery } from "@tanstack/react-query";

export default function Courses() {
  const { data: courses = [] } = useQuery<ICourse[]>({
    queryKey: ["courses"],
    queryFn: fetchCourses,
  });

  return (
    <div>
      <h3 className="text-2xl font-bold">Purchased Course</h3>

      <div className="mt-5 grid grid-cols-3 gap-5">
        {courses.length > 0 ? (
          courses.map((course) => (
            <CourseCard key={course.id} course={course} from={"dashboard"} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No courses found
          </p>
        )}
      </div>
    </div>
  );
}
