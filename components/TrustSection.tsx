"use client";

import { motion } from "framer-motion";
import { Users, Globe, Accessibility } from "lucide-react";
import Image from "next/image";

import trustStudent1 from "@/public/assets/trust-student-1.png";
import trustStudent2 from "@/public/assets/trust-student-2.png";
import globalCommunity from "@/public/assets/global-community.png";

export default function TrustSection() {
  const animation = (delay: number = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, delay },
  });

  return (
    <section className="bg-background py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Why Thousands of Learners Trust Us
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Join a growing community of learners gaining real skills through
            expert-led, high-quality courses.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {/* Left Column */}
          <div className="flex flex-col gap-5">
            <motion.div
              {...animation(0.1)}
              className="h-64 rounded-3xl overflow-hidden bg-secondary"
            >
              <Image
                src={trustStudent1}
                alt="Learning"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              {...animation(0.2)}
              className="bg-secondary p-6 rounded-3xl"
            >
              <Accessibility className="w-6 h-6 mb-4 text-primary" />
              <h3 className="font-bold text-xl mb-2">Flexible Learning</h3>
              <p className="text-sm text-muted-foreground">
                Learn anytime, anywhere at your own pace.
              </p>
            </motion.div>
          </div>

          {/* Middle Column */}
          <motion.div
            {...animation(0.15)}
            className="bg-secondary rounded-3xl flex flex-col"
          >
            <div className="flex-1 flex items-center justify-center p-6">
              <Image
                src={globalCommunity}
                alt="Community"
                className="w-56 h-56 object-cover"
              />
            </div>

            <div className="p-6">
              <Globe className="w-6 h-6 mb-4 text-primary" />
              <h3 className="font-bold text-xl mb-2">Global Community</h3>
              <p className="text-sm text-muted-foreground">
                Connect with learners worldwide and grow together.
              </p>
            </div>
          </motion.div>

          {/* Right Column */}
          <div className="flex flex-col gap-5">
            <motion.div
              {...animation(0.25)}
              className="bg-secondary p-6 rounded-3xl"
            >
              <Users className="w-6 h-6 mb-4 text-primary" />
              <h3 className="font-bold text-xl mb-2">Expert Trainers</h3>
              <p className="text-sm text-muted-foreground">
                Learn from industry professionals with real experience.
              </p>
            </motion.div>

            <motion.div
              {...animation(0.1)}
              className="h-64 rounded-3xl overflow-hidden bg-secondary"
            >
              <Image
                src={trustStudent2}
                alt="Expertise"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
