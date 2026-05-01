"use client";

import { motion, Variants } from "framer-motion";
import { Search, ArrowUpRight, Star, GraduationCap } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ctaStudentImg from "@/public/assets/hero-student.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Instructors", href: "/instructors" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/contact" },
];

const avatars = [
  "https://i.pravatar.cc/50?img=52",
  "https://i.pravatar.cc/50?img=5",
  "https://i.pravatar.cc/50?img=8",
  "https://i.pravatar.cc/50?img=12",
];

function anim(delay = 0): Variants {
  return {
    initial: { opacity: 0, y: 28 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };
}

function animScale(delay = 0): Variants {
  return {
    initial: { opacity: 0, scale: 0.9 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };
}

const SparkleIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2L13.09 8.26L19 7L14.74 11.26L21 12L14.74 12.74L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.74L3 12L9.26 11.26L5 7L10.91 8.26L12 2Z" />
  </svg>
);

const round = (num: number) => +num.toFixed(4);

const SunBurstIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 45 45" fill="currentColor" className={className}>
    <circle cx="15" cy="15" r="5" />
    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => {
      const rad = (angle * Math.PI) / 180;
      const x1 = round(15 + 10 * Math.cos(rad));
      const y1 = round(15 + 10 * Math.sin(rad));
      const x2 = round(15 + 15 * Math.cos(rad));
      const y2 = round(15 + 15 * Math.sin(rad));
      return (
        <line
          key={angle}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
        />
      );
    })}
  </svg>
);

export default function HeroSection() {
  return (
    <section className="hero-gradient min-h-screen overflow-hidden relative px-6">
      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-20 flex items-center justify-between py-5 max-w-7xl mx-auto"
      >
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-star flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-black" />
          </div>
          <span className="text-xl font-bold text-white tracking-tight">
            E-Learning
          </span>
        </div>

        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium text-white/90 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <Button variant="pill">
          Registration
          <ArrowUpRight className="w-7 h-7 icon-gradient rounded-full text-primary p-1" />
        </Button>
      </motion.nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 pt-14 pb-0">
        <motion.div
          {...anim(0.1)}
          className="flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 text-white text-sm font-medium px-5 py-2 rounded-full mb-8"
        >
          <GraduationCap className="w-4 h-4 text-accent" />
          Learn From the Top Experts
        </motion.div>

        <motion.h1
          {...anim(0.2)}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight"
        >
          Learn Anywhere, Anytime
          <span className="block">Empower Your Future</span>
        </motion.h1>

        <motion.p
          {...anim(0.35)}
          className="text-muted text-base max-w-125 mt-5 leading-relaxed"
        >
          Join thousands of learners gaining new skills, advancing careers and
          shaping a better tomorrow—one lesson at a time.
        </motion.p>

        <motion.div {...anim(0.5)} className="relative mt-8 w-full max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search your Course..."
            className="w-full pl-12 pr-6 py-2.5 rounded-full bg-white text-foreground placeholder:text-muted-foreground text-sm font-medium outline-none shadow-xl focus:ring-2 focus:ring-primary/30 transition"
          />
        </motion.div>
      </div>

      {/* Bottom Cards & Hero Image */}
      <div className="relative z-10 px-6 mt-10 flex justify-center max-w-7xl mx-auto">
        <motion.div
          {...animScale(0.7)}
          className="bg-white rounded-2xl p-5 w-52 shadow-2xl self-end mb-12 hidden md:block absolute left-0 bottom-0"
        >
          <p className="text-3xl font-bold text-foreground">4.8</p>
          <div className="flex gap-0.5 mt-1">
            {[1, 2, 3, 4].map((i) => (
              <Star key={i} className="w-4 h-4 fill-current text-star" />
            ))}
            <Star className="w-4 h-4 fill-current/40 text-star" />
          </div>
          <p className="text-muted-foreground text-xs mt-2 leading-snug">
            By students worldwide for quality learning and support.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-6 shrink-0"
        >
          <section className="relative flex flex-col items-center">
            {/* Concentric arc rings */}
            <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
              {[730, 630, 500].map((size, i) => (
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

            {/* Student image */}
            <div className="relative z-10 mt-10 flex justify-center">
              <Image
                src={ctaStudentImg}
                alt="Student ready to learn"
                className="w-64 md:w-80 lg:w-120 object-contain drop-shadow-xl"
              />
            </div>
          </section>
        </motion.div>

        <motion.div
          {...animScale(0.8)}
          className="bg-white rounded-2xl p-5 w-56 shadow-2xl self-end mb-12 hidden md:block absolute right-0 top-15"
        >
          <div className="flex -space-x-2 mb-3">
            {avatars.map((src, i) => (
              <Image
                key={i}
                src={src}
                alt="learner"
                width={40}
                height={40}
                className="rounded-full border-2 border-white object-cover"
              />
            ))}
          </div>
          <p className="text-3xl font-bold text-foreground">60k+</p>
          <p className="text-muted-foreground text-xs mt-1 leading-snug">
            Learners growing with expert guidance from trusted mentors.
          </p>
        </motion.div>
      </div>

      {/* Floating decorative elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute top-[45%] right-[15%] hidden lg:block"
      >
        <SparkleIcon className="w-10 h-10 text-star" />
      </motion.div>

      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[52%] left-[8%] hidden lg:block"
      >
        <SunBurstIcon className="w-14 h-14 text-star" />
      </motion.div>

      <motion.div
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[23%] hidden lg:block"
      >
        <svg viewBox="0 0 80 60" className="w-20 h-14 text-star" fill="none">
          <path
            d="M10 50 C20 10, 40 5, 50 20"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M45 18 L55 15 L52 25"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </section>
  );
}
