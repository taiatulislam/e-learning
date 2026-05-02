"use client";

import { motion, MotionProps } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

import ctaStudentImg from "@/public/assets/trial-student.png";

function anim(delay: number = 0): MotionProps {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  };
}

export default function Trial() {
  return (
    <section className="relative bg-background overflow-hidden pt-20 flex flex-col items-center">
      {/* Concentric arc rings */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none overflow-hidden">
        {[1100, 920, 760, 620, 500].map((size: number, i: number) => (
          <div
            key={i}
            className="absolute rounded-full border"
            style={{
              width: size,
              height: size,
              bottom: -size / 2,
              left: "50%",
              transform: "translateX(-50%)",
              background: `hsl(214 85% ${92 - i * 4}% / ${0.35 + i * 0.1})`,
              border: `1px solid hsl(214 85% 70% / 0.2)`,
            }}
          />
        ))}
      </div>

      {/* Text content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl">
        <motion.h2
          {...anim(0.1)}
          className="text-4xl md:text-5xl font-medium text-foreground leading-tight mb-4"
        >
          Ready to Start Learning?
        </motion.h2>

        <motion.p
          {...anim(0.25)}
          className="text-muted-foreground text-base max-w-md leading-relaxed mb-8"
        >
          Join thousands of learners gaining real skills and accelerating their
          careers — one lesson at a time.
        </motion.p>

        <motion.div {...anim(0.4)}>
          <button className="flex items-center gap-3 bg-blue-400 text-white font-semibold text-sm pl-6 p-1 rounded-full transition-all shadow-lg group">
            14-days free trial
            <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center group-hover:bg-primary-foreground/30 transition-colors">
              <ArrowUpRight className="w-4 h-4 text-black" />
            </span>
          </button>
        </motion.div>
      </div>

      {/* Student image */}
      <motion.div
        initial={{ opacity: 0, y: 48 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mt-10 flex justify-center"
      >
        <Image
          src={ctaStudentImg}
          alt="Student ready to learn"
          width={320}
          height={320}
          className="w-64 md:w-80 lg:w-96 object-contain drop-shadow-xl"
          priority
        />
      </motion.div>
    </section>
  );
}
