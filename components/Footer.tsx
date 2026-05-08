"use client";

import { motion, MotionProps } from "framer-motion";
import { ArrowUpRight, GraduationCap } from "lucide-react";
import {
  SlSocialFacebook,
  SlSocialTwitter,
  SlSocialLinkedin,
} from "react-icons/sl";

import { Button } from "@/components/ui/button";

const quickLinks: string[] = [
  "Home",
  "About Us",
  "Courses",
  "Instructors",
  "Testimonials",
  "FAQ",
];

const categories: string[] = [
  "UI/UX Design",
  "Web Development",
  "Digital Marketing",
  "Business Consulting",
  "Language Learning",
];

function anim(delay: number = 0): MotionProps {
  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, margin: "-40px" },
    transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
  };
}

const socialIcons = [SlSocialFacebook, SlSocialTwitter, SlSocialLinkedin];

export default function Footer() {
  return (
    <footer style={{ background: "var(--color-footer-bg)" }}>
      <div className="max-w-7xl mx-auto  px-6 pt-16 pb-10">
        {/* Top banner */}
        <motion.div
          {...anim(0)}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10"
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-medium mb-2 text-footer-heading">
              Let&apos;s Connect with us
            </h2>
            <p className="text-sm leading-relaxed max-w-md text-footer-foreground">
              We&apos;re here to support your learning journey every step of the
              way.
              <br />
              Let&apos;s build your future, one lesson at a time.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="rounded-full border-footer-border text-footer-heading bg-transparent hover:bg-white/10"
            >
              Contact Us
            </Button>

            <button className="flex items-center gap-2 bg-white text-primary font-semibold text-sm p-1 pl-5 rounded-full hover:bg-white/90 transition-all shadow-lg">
              Start Free Trial
              <ArrowUpRight className="w-7 h-7 icon-gradient rounded-full p-1.5 text-white" />
            </button>
          </div>
        </motion.div>

        <div className="border-t mb-10 border-footer-border" />

        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 mb-14">
          {/* Brand */}
          <motion.div {...anim(0.05)} className="col-span-3 max-w-sm">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-6 h-6 text-white" />
              <h3 className="text-xl font-bold text-footer-heading">
                E-Learning
              </h3>
            </div>

            <p className="text-xs mb-5 text-footer-foreground">
              Subscribe our newsletter for Update
            </p>

            <div className="flex rounded-full overflow-hidden border border-footer-border">
              <input
                type="email"
                placeholder="Enter your email..."
                className="flex-1 bg-transparent px-4 py-2.5 text-sm outline-none text-footer-heading"
              />
              <button className="m-1 flex items-center gap-2 icon-gradient font-semibold text-xs px-3 rounded-full text-white/90 transition-all shadow-lg">
                Subscribe Now
              </button>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div {...anim(0.1)}>
            <h4 className="font-bold text-sm mb-4 text-footer-heading">
              Quick Link
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link: string) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-xs hover:underline transition-colors text-footer-foreground"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Categories */}
          <motion.div {...anim(0.15)}>
            <h4 className="font-bold text-sm mb-4 text-footer-heading">
              Popular Categories
            </h4>
            <ul className="space-y-2.5">
              {categories.map((cat: string) => (
                <li key={cat}>
                  <a
                    href="#"
                    className="text-xs hover:underline transition-colors text-footer-foreground"
                  >
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div {...anim(0.2)}>
            <h4 className="font-bold text-sm mb-4 text-footer-heading">
              Contact Information
            </h4>
            <div className="space-y-3 text-xs text-footer-foreground">
              <p>Phone: +123 456 7890</p>
              <p>
                Email:
                <br />
                support@e-learning.com
              </p>
              <p>
                Address:
                <br />
                1901 Thornridge Cir.
                <br />
                Shiloh, Hawaii 81063
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-footer-border">
          <p className="text-xs text-footer-foreground">
            © 2026 E-Learning | Privacy Policy | Terms &amp; Conditions |
            Accessibility
          </p>

          <div className="flex items-center gap-3">
            {socialIcons.map((Icon, i: number) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full bg-blue-400 flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <Icon className="w-4 h-4 text-white" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
