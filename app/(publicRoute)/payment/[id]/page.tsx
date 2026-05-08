"use client";

import Image, { StaticImageData } from "next/image";
import { IoMdPerson } from "react-icons/io";
import { FaStickyNote } from "react-icons/fa";
import { FlexIconText } from "../../courses/[id]/page";

import bkash from "@/public/images/Bkash.png";
import nagad from "@/public/images/Nagad.png";
import american from "@/public/images/American-Express.png";
import visa from "@/public/images/visa.png";
import mastercard from "@/public/images/mastercard.png";
import { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import CustomCheckBox from "@/components/CustomCheckBox";
import { useQuery } from "@tanstack/react-query";
import { ICourse } from "@/type/courseType";
import { fetchCourses } from "@/utils/helpers";
import { useParams } from "next/navigation";

interface PaymentIconProps {
  src: StaticImageData;
  alt: string;
  name: string;
  selectPayment: string;
  setSelectPayment: (name: string) => void;
}

const payments = [
  { src: bkash, alt: "Bkash", name: "bkash" },
  { src: nagad, alt: "Nagad", name: "nagad" },
  { src: american, alt: "American Express", name: "americaExpress" },
  { src: visa, alt: "Visa", name: "visa" },
  { src: mastercard, alt: "Mastercard", name: "mastercard" },
];

export default function Payment() {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [selectPayment, setSelectPayment] = useState(payments[0]?.name);

  const { data: courses = [] } = useQuery<ICourse[]>({
    queryKey: ["courses"],
    queryFn: fetchCourses,
  });

  const course = courses.find((c) => c.id === id);

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
              <h3 className="text-lg font-bold">BDT {course?.price}</h3>

              <p className="font-bold mt-7">What Include In this Course</p>

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
                value={course?.price}
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
                value={course?.discount}
                placeholder="Enter discount (if any)"
                className="border border-gray-300 rounded-md px-3 py-2 outline-none"
                readOnly
              />
            </div>
          </div>

          <div className="mt-15">
            <p className="text-xs text-gray">Amount Will Be Charged</p>
            <p className="text-lg font-bold text-primary">
              BDT{" "}
              {Math.max(
                (course?.price ?? 0) - (course?.discount ?? 0),
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
            By Completing this Payment Request Agree with our
          </span>
          <span className="text-primary font-bold">Terms and Conditions</span> &{" "}
          <span className="text-primary font-bold">Privacy Policy.</span>
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
