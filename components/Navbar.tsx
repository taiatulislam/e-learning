"use client";

import { ArrowUpRight, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerDescription,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";
import Login from "./Login";
import { IoMdClose } from "react-icons/io";
import { cn } from "@/lib/utils";
import Image from "next/image";

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
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar({ from }: NavbarProps) {
  const user = {
    firstName: "Taiatul",
    lastName: "Islam",
    role: "student",
    image:
      "https://i.ibb.co.com/DHxsnRkM/Chat-GPT-Image-May-4-2026-11-46-35-AM.png",
  };

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
              <Link
                href={link.href}
                className="text-sm font-medium text-white/90 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {user ? (
          <Link
            href={user?.role === "student" ? "/dashboard" : "/admin/dashboard"}
            className="flex items-center gap-3 p-2 pr-4 rounded-full bg-primary hover:bg-blue-900 transition-all duration-200 text-white shadow-sm border border-white"
          >
            <div className="w-6.25 h-6.25 rounded-full overflow-hidden">
              <Image
                src={user?.image || "/default-avatar.png"}
                alt="User"
                width={25}
                height={25}
                className="w-full h-full object-cover"
              />
            </div>

            <span className="font-semibold text-sm whitespace-nowrap">
              {user?.firstName} {user?.lastName}
            </span>
          </Link>
        ) : (
          <Drawer direction="right">
            <DrawerTrigger asChild>
              <Button variant="pill">
                Login
                <ArrowUpRight className="w-7 h-7 icon-gradient rounded-full text-white p-1" />
              </Button>
            </DrawerTrigger>

            <DrawerContent
              className={cn(
                "fixed inset-y-0 right-0 w-full bg-background shadow-xl",
                "flex flex-col",
              )}
            >
              <div className="flex items-center justify-between px-6 py-4 border-b">
                <DrawerTitle className="uppercase text-[20px] font-bold text-primary">
                  Start Learn With <span>E-</span>
                  <span className="text-primary">Learning</span>
                </DrawerTitle>

                <DrawerDescription className="text-sm text-muted-foreground sr-only">
                  Browse courses and start improving your skills today.
                </DrawerDescription>

                <DrawerClose className="text-gray-700 p-2 rounded-full hover:bg-gray-100 transition cursor-pointer">
                  <IoMdClose className="text-xl" />
                </DrawerClose>
              </div>

              {/* Drawer Body */}
              <div className="h-full">
                <Login />
              </div>
            </DrawerContent>
          </Drawer>
        )}
      </nav>
    </div>
  );
}
