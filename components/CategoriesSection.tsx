"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { HeroText } from "./HeroText";

type Category = {
  name: string;
  courses: number;
  image: string;
};

const categories: Category[] = [
  {
    name: "Design",
    courses: 20,
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop",
  },
  {
    name: "Web Development",
    courses: 50,
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
  },
  {
    name: "Business Consulting",
    courses: 80,
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop",
  },
  {
    name: "Digital Marketing",
    courses: 150,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
  },
  {
    name: "Photography & Videography",
    courses: 105,
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&h=300&fit=crop",
  },
  {
    name: "Language Learning",
    courses: 80,
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
  },
];

const anim = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5, delay },
});

export default function CategoriesSection() {
  return (
    <section className="bg-background py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <HeroText
          title="Explore Our Top Course Categories"
          description="Discover a wide range of learning paths—from design to development, business to personal growth."
          descriptionMaxWidth="max-w-lg"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              {...anim(0.1 + i * 0.08)}
              className="group cursor-pointer text-center"
            >
              <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/3]">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition flex items-center justify-center">
                  <span className="w-11 h-11 rounded-full bg-white/80 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition">
                    <ArrowUpRight className="w-5 h-5 text-foreground" />
                  </span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-foreground">{cat.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">
                {cat.courses} Courses
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
