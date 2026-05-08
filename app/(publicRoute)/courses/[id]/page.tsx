"use client";

import { FC, useRef, useState } from "react";
import Image from "next/image";
import { TiTick } from "react-icons/ti";
import { IoMdPerson } from "react-icons/io";
import { FaStickyNote } from "react-icons/fa";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FaPlay, FaPause } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { ICourse } from "@/type/courseType";
import { fetchCourses } from "@/utils/helpers";

interface FlexIconTextProps {
  icon: React.ElementType;
  text: string;
  iconClass?: string;
}

export default function CourseDetails() {
  const { id } = useParams<{ id: string }>();

  const { data: courses = [] } = useQuery<ICourse[]>({
    queryKey: ["courses"],
    queryFn: fetchCourses,
  });

  const course = courses.find((c) => c.id === id);

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handlePlay = () => {
    videoRef.current?.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    videoRef.current?.pause();
    setIsPlaying(false);
  };

  return (
    <div className="mb-10">
      <div className="hero-gradient relative">
        <div className="w-[75%] mx-auto pt-15 pb-20 rounded-sm relative">
          <h3 className="capitalize text-3xl font-bold text-white">
            {course?.title}
          </h3>
          <p className="text-sm font-normal mt-5 mb-10 max-w-100 text-white">
            {course?.description}
          </p>

          {/* Course Thumbnail */}
          <div className="border border-grey-400 bg-white absolute top-18 right-0 p-2 rounded-sm">
            {course?.thumbnailVideoUrl && (
              <div
                className="relative h-50 w-100 group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <video
                  ref={videoRef}
                  src={course?.thumbnailVideoUrl}
                  className="h-full w-full object-cover rounded-md"
                  muted
                  playsInline
                  onClick={isPlaying ? handlePause : handlePlay}
                />

                {!isPlaying && (
                  <button
                    onClick={handlePlay}
                    className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-md"
                  >
                    <div className="p-4 bg-white/90 rounded-full shadow-md">
                      <FaPlay className="text-black text-xl ml-1" />
                    </div>
                  </button>
                )}

                {isPlaying && isHovered && (
                  <button
                    onClick={handlePause}
                    className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-md"
                  >
                    <div className="p-4 bg-white/90 rounded-full shadow-md">
                      <FaPause className="text-black text-xl" />
                    </div>
                  </button>
                )}
              </div>
            )}

            <div className="p-5">
              <h3 className="text-lg font-bold">BDT {course?.price}</h3>

              <Link href={`/payment/${id}`}>
                <button className="bg-primary hover:bg-blue-900 text-white w-full rounded-sm py-3 my-5 cursor-pointer">
                  Purchase This Course
                </button>
              </Link>

              <p className="font-bold">What Include In this Course</p>

              <FlexIconText
                icon={IoMdPerson}
                text={`${course?.students} Students Enrolled This Course`}
              />
              <FlexIconText icon={FaStickyNote} text="Class Note" />
              <FlexIconText icon={FaStickyNote} text={`${course?.quiz} Quiz`} />
            </div>
          </div>
        </div>
      </div>

      <div className="w-[75%] mx-auto">
        {/* Instructor */}
        <div className="font-bold">
          <h2 className="mt-10 mb-3 text-lg">Course Instructor</h2>
          <div className="flex gap-3 rounded-sm border border-gray-400 p-5 w-[calc(100%-460px)]">
            {course?.instructor &&
              course?.instructor?.length > 0 &&
              course.instructor.map((instructor, index) => (
                <div key={instructor.id} className="flex items-center gap-3">
                  <Image
                    src={instructor.imageUrl ?? "/default-avatar.png"}
                    alt={instructor.name}
                    width={80}
                    height={80}
                    className="h-20 w-20 rounded-sm object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{instructor.name}</h3>
                    <p className="text-xs text-gray-500">
                      {instructor.designation}
                    </p>
                  </div>

                  {/* Add vertical line except after the last instructor */}
                  {index < course.instructor.length - 1 && (
                    <div className="h-12 w-px bg-gray-300 mx-4" />
                  )}
                </div>
              ))}
          </div>
        </div>

        {/* What Will Learn */}
        <h2 className="mt-10 mb-3 text-lg font-bold">What you will Learn</h2>
        <div className="rounded-sm border border-gray-400 p-5 w-[calc(100%-460px)] flex flex-col gap-2">
          {course?.courseContent?.map((item, index) => (
            <div className="flex items-center gap-3" key={index}>
              <TiTick className="text-green-600 text-xl" />
              {item?.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const FlexIconText: FC<FlexIconTextProps> = ({
  icon: Icon,
  text,
  iconClass = "",
}) => {
  return (
    <div className="flex items-center gap-2 my-2">
      <Icon className={`text-primary ${iconClass}`} />
      <p className="text-gray">{text}</p>
    </div>
  );
};
