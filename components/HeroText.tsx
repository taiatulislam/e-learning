"use client";

import { motion } from "framer-motion";

type HeroTextProps = {
  title: string;
  description: string;
  descriptionMaxWidth?: string;
};

export function HeroText({
  title,
  description,
  descriptionMaxWidth = "max-w-[500px]",
}: HeroTextProps) {
  const anim = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
  });

  return (
    <motion.div {...anim(0)} className="text-center mb-14">
      {/* Title */}
      <motion.h1
        {...anim(0.2)}
        className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight mb-4 text-center"
      >
        {title}
      </motion.h1>

      {/* Description */}
      <motion.p
        {...anim(0.35)}
        className={`text-muted-foreground text-base mx-auto leading-relaxed text-center ${descriptionMaxWidth}`}
      >
        {description}
      </motion.p>
    </motion.div>
  );
}
