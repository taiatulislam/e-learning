"use client";

import { motion, MotionProps } from "framer-motion";
import { Users, Globe, Accessibility } from "lucide-react";
import Image from "next/image";

import trustStudent1 from "@/public/assets/trust-student-1.png";
import trustStudent2 from "@/public/assets/trust-student-2.png";
import globalCommunity from "@/public/assets/global-community.png";

const TRUST_FEATURES = [
  {
    title: "Global Community",
    desc: "Connect, share, and grow with thousands of learners from around the world—exchange ideas and collaborate.",
    icon: Globe,
    delay: 0.15,
  },
  {
    title: "Flexible Learning Experience",
    desc: "Learn anytime, anywhere — at your own pace, on your own terms.",
    icon: Accessibility,
    delay: 0.2,
  },
  {
    title: "Expert Trainers",
    desc: "Learn from real industry professionals with years of experience and practical knowledge.",
    icon: Users,
    delay: 0.25,
  },
];

const anim = (delay = 0): MotionProps => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

const FeatureCard = ({
  icon: Icon,
  title,
  desc,
  delay,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
  delay: number;
}) => (
  <motion.div {...anim(delay)} className="bg-secondary rounded-3xl p-6">
    <div className="w-12 h-12 rounded-2xl icon-gradient flex items-center justify-center mb-5">
      <Icon className="w-6 h-6 text-white" />
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

export default function TrustSection() {
  return (
    <section className="bg-background py-20 px-6">
      <div className="max-w-7xl mx-auto">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* COLUMN 1 */}
          <div className="flex flex-col gap-5">
            <motion.div
              {...anim(0.1)}
              className="bg-secondary rounded-3xl overflow-hidden h-64"
            >
              <Image
                src={trustStudent1}
                alt="Learning"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <FeatureCard {...TRUST_FEATURES[1]} />
          </div>

          {/* COLUMN 2 */}
          <motion.div
            {...anim(0.1)}
            className="bg-secondary rounded-3xl flex flex-col overflow-hidden"
          >
            <div className="p-6 pb-0 flex-1 flex justify-center">
              <Image
                src={globalCommunity}
                alt="Community"
                className="w-64 h-64 object-cover"
              />
            </div>

            <div className="p-6 pt-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl icon-gradient flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">{TRUST_FEATURES[0].title}</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                {TRUST_FEATURES[0].desc}
              </p>
            </div>
          </motion.div>

          {/* COLUMN 3 */}
          <div className="flex flex-col gap-5">
            <FeatureCard {...TRUST_FEATURES[2]} />

            <motion.div
              {...anim(0.1)}
              className="bg-secondary rounded-3xl overflow-hidden h-64"
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
