"use client";

import Image, { StaticImageData } from "next/image";
import { IoMdPerson } from "react-icons/io";
import { FaStickyNote } from "react-icons/fa";
import { FlexIconText } from "../../courseDetails/[id]/page";

import bkash from "@/public/images/Bkash.png";
import nagad from "@/public/images/Nagad.png";
import american from "@/public/images/American-Express.png";
import visa from "@/public/images/visa.png";
import mastercard from "@/public/images/mastercard.png";
import { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import CustomCheckBox from "@/components/CustomCheckBox";

interface PaymentIconProps {
  src: StaticImageData;
  alt: string;
  name: string;
  selectPayment: string;
  setSelectPayment: (name: string) => void;
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

const payments = [
  { src: bkash, alt: "Bkash", name: "bkash" },
  { src: nagad, alt: "Nagad", name: "nagad" },
  { src: american, alt: "American Express", name: "americaExpress" },
  { src: visa, alt: "Visa", name: "visa" },
  { src: mastercard, alt: "Mastercard", name: "mastercard" },
];

export default function Payment() {
  const [loading, setLoading] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [discount, setDiscount] = useState<number | "">(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [selectPayment, setSelectPayment] = useState(payments[0]?.name);

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
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value === "") {
      setDiscount("");
      return;
    }

    const parsed = parseFloat(value);
    if (isNaN(parsed)) {
      setDiscount(0);
    } else {
      setDiscount(parsed);
    }
  };

  const handlePlay = () => {
    videoRef.current?.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    videoRef.current?.pause();
    setIsPlaying(false);
  };

  const handlePayment = () => {};

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
              <h3 className="text-lg font-bold">
                BDT {parseFloat(course?.feeBdt ?? "0")}
              </h3>

              <p className="font-bold mt-7">What Include In this Course</p>

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
        {/* Payment Channel */}
        <div className="font-bold">
          <h2 className="mt-10 mb-3 text-lg">Choose Payment Chanel</h2>
          <div className="flex items-center gap-2">
            {payments.map((item, index) => (
              <PaymentIcon
                key={index}
                src={item.src}
                alt={item.alt}
                name={item.name}
                selectPayment={selectPayment}
                setSelectPayment={setSelectPayment}
              />
            ))}
          </div>
        </div>

        {/* Payment Information */}
        <h2 className="mt-10 mb-3 text-lg font-bold">Payment Information</h2>
        <div className="rounded-sm border border-gray-400 p-10 w-[calc(100%-460px)]">
          <div className="flex items-center gap-5">
            <div className="flex flex-col gap-1 w-full">
              <label className="text-sm font-medium text-gray-700">
                Course Fee
              </label>
              <input
                value={course?.feeBdt ? parseFloat(course.feeBdt) : ""}
                type="number"
                readOnly
                placeholder="Enter course fee"
                className="border border-gray-300 rounded-md px-3 py-2 outline-none"
              />
            </div>

            <div className="flex flex-col gap-1 w-full">
              <label className="text-sm font-medium text-gray-700">
                Discount
              </label>
              <input
                type="number"
                value={discount}
                placeholder="Enter discount (if any)"
                className="border border-gray-300 rounded-md px-3 py-2 outline-none"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mt-15">
            <p className="text-xs text-gray">Amount Will Be Charged</p>
            <p className="text-lg font-bold text-primary">
              BDT{" "}
              {Math.max(
                parseFloat(course?.feeBdt || "0") -
                  (typeof discount === "number" ? discount : 0),
                0,
              ).toFixed(2)}
            </p>
          </div>
        </div>

        <label className="flex items-center gap-2 cursor-pointer mt-7 mb-10">
          <CustomCheckBox
            value={acceptTerms}
            label=""
            handleChange={() => setAcceptTerms(!acceptTerms)}
          />
          <span className="text-gray">
            By Completing this Ticket Request Agree with our
          </span>
          <span className="text-primary">
            Terms and Conditions & Privacy Policy
          </span>
        </label>

        <button
          disabled={loading}
          className="bg-primary w-[calc(100%-460px)] text-white rounded-sm py-2 cursor-pointer"
          onClick={handlePayment}
        >
          {loading ? "Loading..." : "Proceed To Payment"}
        </button>
      </div>
    </div>
  );
}

const PaymentIcon = ({
  src,
  alt,
  name,
  selectPayment,
  setSelectPayment,
}: PaymentIconProps) => {
  const isSelected = selectPayment === name;
  return (
    <div
      className={`w-20 h-10 border rounded-lg flex items-center justify-center cursor-pointer
        ${isSelected ? "border-primary" : "border-[#DBE1EB]"} 
        bg-[#FAFEFF]`}
      onClick={() => setSelectPayment(name)}
    >
      <Image
        src={src}
        alt={alt}
        className="object-contain p-1 h-full w-full"
        width={120}
        height={60}
      />
    </div>
  );
};
