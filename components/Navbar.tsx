"use client";

import { ArrowUpRight, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

type NavLink = {
  label: string;
  href: string;
};

type NavbarProps = {
  from?: string;
};

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Instructors", href: "/instructors" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar({ from }: NavbarProps) {
  return (
    <div className={`${from === "home"} ? "transparent" : bg-[#52a8ff]`}>
      <nav
        className={`relative z-20 flex items-center justify-between py-5 max-w-7xl mx-auto ${
          from === "home" ? "px-0" : "px-6"
        }`}
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
          <ArrowUpRight className="w-7 h-7 icon-gradient rounded-full text-white p-1" />
        </Button>
      </nav>
    </div>
  );
}
