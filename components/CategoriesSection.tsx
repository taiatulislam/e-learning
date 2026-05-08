"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { HeroText } from "./HeroText";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { ICategory } from "@/type/categoryType";
import { fetchCategories } from "@/utils/helpers";

const anim = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, margin: "-50px" },
  transition: { duration: 0.5, delay },
});

export default function CategoriesSection() {
  const router = useRouter();

  const { data: categories = [] } = useQuery<ICategory[]>({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const handleCategoryClick = (catName: string) => {
    router.push(`/courses?category=${encodeURIComponent(catName)}`);
  };

  return (
    <section className="bg-background py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <HeroText
          title="Explore Our Top Course Categories"
          description="Discover a wide range of learning paths—from design to development, business to personal growth."
          descriptionMaxWidth="max-w-lg"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.slice(0, 6).map((cat, i) => (
            <motion.div
              key={cat.name}
              {...anim(0.1 + i * 0.08)}
              className="group cursor-pointer text-center"
              onClick={() => handleCategoryClick(cat.name)}
            >
              <div className="relative overflow-hidden rounded-2xl mb-4 aspect-4/3">
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
