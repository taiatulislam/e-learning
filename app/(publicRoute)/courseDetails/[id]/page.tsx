"use client";

import { FC, useRef, useState } from "react";
import Image from "next/image";
import { TiTick } from "react-icons/ti";
import { IoMdPerson } from "react-icons/io";
import { FaStickyNote } from "react-icons/fa";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FaPlay, FaPause } from "react-icons/fa";

interface FlexIconTextProps {
  icon: React.ElementType;
  text: string;
  iconClass?: string;
}

interface IInstructor {
  id: string;
  name: string;
  instructorType: string;
  designations: string;
  company: string;
  email: string;
  phone: string;
  imageUrl: string;
  active: boolean;
  createdBy: string;
}

interface ILesson {
  id: string;
  sectionId: string;
  title: string;
  description: string;
  videoUrl: string;
  position: number;
  duration: string | null;
  isRequired: boolean;
}

interface ICourse {
  id: string;
  language: string;
  category: string;
  title: string;
  description: string;
  feeBdt: string;
  feeUsd: string;
  thumbnailUrl: string;
  thumbnailVideoUrl: string;
  status: string;
  sections: ISection[];
  courseContent: ICourseContent[];
}

interface ISection {
  id: string;
  courseId: string;
  instructorId: string;
  instructor: IInstructor;
  languageType: string | null;
  sectionName: string;
  className: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  lessons: ILesson[];
  position: number;
}

interface ICourseContent {
  text: string;
}

export default function CourseDetails() {
  const { id } = useParams();
  const course: ICourse = {
    id: "1",
    language: "English",
    category: "UI/UX Design",
    title: "Learn Figma from Basic",
    description: "A beginner-friendly course to master Figma for UI/UX design.",
    feeBdt: "5000",
    feeUsd: "50",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400",
    thumbnailVideoUrl:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    status: "available",

    sections: [
      {
        id: "sec-1",
        courseId: "1",
        instructorId: "inst-1",
        instructor: {
          id: "inst-1",
          name: "John Doe",
          instructorType: "Senior Instructor",
          designations: "UI/UX Designer",
          company: "Design Studio",
          email: "john@example.com",
          phone: "0123456789",
          imageUrl: "https://i.pravatar.cc/150?img=1",
          active: true,
          createdBy: "admin",
        },
        languageType: "English",
        sectionName: "Introduction to Figma",
        className: "Beginner",
        description: "Get started with Figma basics and interface.",
        thumbnailUrl:
          "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400",
        videoUrl: "https://example.com/intro-video",
        position: 1,

        lessons: [
          {
            id: "lesson-1",
            sectionId: "sec-1",
            title: "What is Figma?",
            description: "Overview of Figma and its features.",
            videoUrl: "https://example.com/video1",
            position: 1,
            duration: "5:30",
            isRequired: true,
          },
          {
            id: "lesson-2",
            sectionId: "sec-1",
            title: "Figma Interface",
            description: "Learn about the Figma workspace.",
            videoUrl: "https://example.com/video2",
            position: 2,
            duration: "8:00",
            isRequired: true,
          },
        ],
      },
    ],

    courseContent: [
      { text: "Learn Figma from scratch" },
      { text: "Understand UI/UX fundamentals" },
      { text: "Create real-world design projects" },
    ],
  };

  const instructors =
    course?.sections?.map((section) => ({
      name: section.instructor.name,
      designation: section.instructor.designations,
      imageUrl: section.instructor.imageUrl,
    })) || [];

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
    <div>
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
              <h3 className="text-lg font-bold">
                BDT {parseFloat(course?.feeBdt ?? "0")}
              </h3>

              <Link href={`/payment/${id}`}>
                <button className="bg-primary hover:bg-blue-900 text-white w-full rounded-sm py-3 my-5 cursor-pointer">
                  Purchase This Course
                </button>
              </Link>

              <p className="font-bold">What Include In this Course</p>

              <FlexIconText
                icon={IoMdPerson}
                text="400 Students Enrolled This Course"
              />
              <FlexIconText icon={FaStickyNote} text="Class Note" />
              <FlexIconText icon={FaStickyNote} text="4 Quiz" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-[75%] mx-auto">
        {/* Instructor */}
        <div className="font-bold">
          <h2 className="mt-10 mb-3 text-lg">Course Instructor</h2>
          <div className="flex gap-3 rounded-sm border border-gray-400 p-5 w-[calc(100%-460px)]">
            {instructors.length > 0 && (
              <div className="flex gap-3">
                <Image
                  src={instructors[0].imageUrl}
                  alt={instructors[0].name}
                  width={80}
                  height={80}
                  className="h-20 w-20 rounded-sm object-cover"
                />
                <div>
                  <h3 className="font-semibold">{instructors[0].name}</h3>
                  <p className="text-xs text-gray">
                    {instructors[0].designation}
                  </p>
                </div>
              </div>
            )}
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
