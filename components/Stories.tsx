"use client";

import { Play } from "lucide-react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";

import Image, { StaticImageData } from "next/image";
import { HeroText } from "./HeroText";

import learner1 from "@/public/assets/learner-1.jpg";
import learner2 from "@/public/assets/learner-2.jpg";
import learner3 from "@/public/assets/learner-3.jpg";
import learner4 from "@/public/assets/learner-4.jpg";
import learner5 from "@/public/assets/learner-5.jpg";

type Learner = {
  name: string;
  role: string;
  image: StaticImageData;
};

const learners: Learner[] = [
  { name: "Yesha Khan", role: "UI/UX Designer", image: learner1 },
  { name: "Ethan Samuel", role: "Product Designer", image: learner2 },
  { name: "William Henry", role: "Web Developer", image: learner3 },
  { name: "Robert Davis", role: "Frontend Developer", image: learner4 },
  { name: "Sarah Chen", role: "Data Analyst", image: learner5 },
  { name: "Yesha Khan", role: "UI/UX Designer", image: learner1 },
  { name: "Ethan Samuel", role: "Product Designer", image: learner2 },
];

const Stories = () => {
  return (
    <section className="py-20 bg-background overflow-hidden px-6 max-w-7xl mx-auto">
      <HeroText
        title="Stories from Our Successful Learners"
        description="See how everyday learners became professionals with guidance, effort, and expert-led learning."
        descriptionMaxWidth="max-w-lg"
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={25}
          slidesPerView={1}
          loop
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={800}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3.5 },
            1280: { slidesPerView: 5 },
          }}
        >
          {learners.map((learner: Learner, index: number) => (
            <SwiperSlide key={index}>
              <div className="group relative rounded-2xl overflow-hidden cursor-pointer">
                <Image
                  src={learner.image}
                  alt={learner.name}
                  width={200}
                  height={200}
                  className="w-full h-87.5 object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

                {/* Bottom overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {learner.name}
                    </h3>
                    <p className="text-white/70 text-sm">{learner.role}</p>
                  </div>

                  <div className="w-10 h-10 rounded-full bg-background/90 flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                    <Play
                      className="w-4 h-4 text-foreground ml-0.5"
                      fill="currentColor"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Stories;
