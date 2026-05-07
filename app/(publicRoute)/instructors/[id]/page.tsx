"use client";

import { useState } from "react";
import { Award, BookOpen, BriefcaseBusiness, Globe, Star } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import CourseCard, { Course } from "@/components/CourseCard";

type TabType = "about" | "courses" | "reviews";

export default function InstructorProfile() {
  const [activeTab, setActiveTab] = useState<TabType>("about");

  const skills = [
    "Machine Learning",
    "Deep Learning",
    "LLMs & GPT",
    "Python",
    "PyTorch",
    "TensorFlow",
    "MLOps",
    "Computer Vision",
    "NLP",
    "Data Engineering",
    "Kubernetes",
    "AWS SageMaker",
  ];

  const courses: (Course & { category: string })[] = [
    {
      id: "1",
      title: "Learn Figma from Basic",
      instructor: "purepearl studio",
      lessons: 17,
      duration: "2h 16m",
      students: "850+",
      price: "$50.00",
      badge: "Beginner",
      badgeColor: "bg-primary/10 text-primary",
      rating: 4.5,
      category: "UI/UX Design",
      image:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400",
    },
    {
      id: "2",
      title: "Web Development Bootcamp",
      instructor: "devhub",
      lessons: 28,
      duration: "4h 10m",
      students: "2.1k+",
      price: "$75.00",
      badge: "All Levels",
      badgeColor: "bg-primary text-primary-foreground",
      rating: 4.5,
      category: "Development",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400",
    },
    {
      id: "3",
      title: "Digital Marketing Essentials",
      instructor: "market360",
      lessons: 18,
      duration: "3h 05m",
      students: "900+",
      price: "$55.00",
      badge: "Popular",
      badgeColor: "bg-destructive/10 text-destructive",
      rating: 4.5,
      category: "Digital Marketing",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400",
    },
    {
      id: "4",
      title: "English for Daily Conversations",
      instructor: "languageflow",
      lessons: 15,
      duration: "2h 00m",
      students: "700+",
      price: "$40.00",
      badge: "Intermediate",
      badgeColor: "bg-primary/10 text-primary",
      rating: 4.5,
      category: "Language Learning",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400",
    },
    {
      id: "5",
      title: "Digital Marketing Essentials",
      instructor: "market360",
      lessons: 18,
      duration: "3h 05m",
      students: "900+",
      price: "$55.00",
      badge: "All Levels",
      badgeColor: "bg-destructive/10 text-destructive",
      rating: 4.5,
      category: "Digital Marketing",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=240&fit=crop",
    },
    {
      id: "6",
      title: "English for Daily Conversations",
      instructor: "languageflow",
      lessons: 15,
      duration: "2h 00m",
      students: "700+",
      price: "$40.00",
      badge: "Intermediate",
      badgeColor: "bg-primary/10 text-primary",
      rating: 4.5,
      category: "Language Learning",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=240&fit=crop",
    },
    {
      id: "7",
      title: "Business Strategy Masterclass",
      instructor: "bizcoach",
      lessons: 22,
      duration: "5h 00m",
      students: "1.2k+",
      price: "$85.00",
      badge: "All Levels",
      badgeColor: "bg-primary text-primary-foreground",
      rating: 4.5,
      category: "Business Consulting",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=240&fit=crop",
    },
  ];

  const reviews = [
    {
      name: "Michael Chen",
      review:
        "One of the best AI instructors online. The explanations are practical and easy to follow.",
      rating: 5,
    },
    {
      name: "Sarah Williams",
      review: "Loved the hands-on projects and real-world production insights.",
      rating: 5,
    },
    {
      name: "David Kim",
      review:
        "Excellent teaching style. Helped me land my first ML engineering role.",
      rating: 4,
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f2ee] text-[#1b1b1b]">
      {/* HERO */}
      <section className="bg-linear-to-r from-[#071827] via-[#0b2236] to-[#10263b]">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-center">
            {/* Avatar */}
            <div className="relative flex items-center justify-center">
              <div className="flex h-28 w-28 items-center justify-center rounded-full border-2 border-yellow-400 bg-[#13293f]">
                <span className="text-4xl font-bold text-yellow-400">SR</span>
              </div>

              <div className="absolute bottom-1 right-1 h-5 w-5 rounded-full border-2 border-[#0b2236] bg-yellow-400" />
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="mb-2 inline-flex rounded-full bg-yellow-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-yellow-300">
                🏆 Top Instructor · 2024
              </div>

              <h1 className="text-4xl font-bold text-white">Sarah R. Nguyen</h1>

              <p className="mt-2 text-sm text-slate-300">
                Senior ML Engineer · Google Brain Alumni · Stanford PhD
              </p>

              {/* Stats */}
              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <StatCard value="94.2K" label="Students" />
                <StatCard value="12" label="Courses" />
                <StatCard value="4.9" label="Rating" />
                <StatCard value="8 yrs" label="Experience" />
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-8 flex gap-3 border-b border-white/10 pb-4">
            <Tab
              active={activeTab === "about"}
              onClick={() => setActiveTab("about")}
            >
              About
            </Tab>

            <Tab
              active={activeTab === "courses"}
              onClick={() => setActiveTab("courses")}
            >
              Courses (12)
            </Tab>

            <Tab
              active={activeTab === "reviews"}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews
            </Tab>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[1fr_350px]">
        {/* LEFT CONTENT */}
        <div>
          {/* ABOUT TAB */}
          {activeTab === "about" && (
            <>
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900">
                  About Sarah
                </h2>

                <div className="mt-5 space-y-4 text-[15px] leading-7 text-slate-600">
                  <p>
                    I&apos;m a machine learning engineer with 8+ years building
                    production-grade AI systems at Google, Meta, and startups.
                  </p>

                  <p>
                    My work spans large language models, real-time computer
                    vision pipelines, and scalable MLOps infrastructure.
                  </p>

                  <p>
                    I focus on teaching practical AI skills that students can
                    apply immediately in real-world projects.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-4">
                  <MiniStat
                    value="94K+"
                    label="Students"
                    color="text-yellow-500"
                  />

                  <MiniStat
                    value="98%"
                    label="Completion"
                    color="text-emerald-500"
                  />

                  <MiniStat
                    value="4.9★"
                    label="Avg Rating"
                    color="text-orange-500"
                  />
                </div>
              </div>

              {/* Expertise */}
              <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900">
                  Areas of Expertise
                </h2>

                <div className="mt-6 flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-yellow-200 bg-yellow-50 px-4 py-2 text-sm font-medium text-yellow-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* COURSES TAB */}
          {activeTab === "courses" && (
            <div className="grid grid-cols-2 gap-5">
              {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          )}

          {/* REVIEWS TAB */}
          {activeTab === "reviews" && (
            <div className="grid grid-cols-2 gap-5">
              {reviews.map((review, index) => (
                <div key={index} className="rounded-2xl bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-slate-900">
                      {review.name}
                    </h3>

                    <div className="flex text-yellow-500">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-500" />
                      ))}
                    </div>
                  </div>

                  <p className="mt-4 leading-7 text-slate-600">
                    {review.review}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="space-y-6">
          {/* Contact */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <button className="w-full rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white">
              Message Sarah
            </button>

            <button className="mt-3 w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-medium text-slate-700">
              Browse All Courses
            </button>

            <div className="mt-5 flex justify-center gap-4 text-slate-500">
              <SocialButton>
                <FaTwitter className="h-4 w-4" />
              </SocialButton>

              <SocialButton>
                <FaInstagram className="h-4 w-4" />
              </SocialButton>

              <SocialButton>
                <FaFacebook className="h-4 w-4" />
              </SocialButton>

              <SocialButton>
                <FaLinkedin className="h-4 w-4" />
              </SocialButton>

              <SocialButton>
                <Globe className="h-4 w-4" />
              </SocialButton>
            </div>
          </div>

          {/* Rating */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              Instructor Rating
            </p>

            <div className="mt-4 flex items-end gap-3">
              <span className="text-5xl font-bold text-primary">4.9</span>

              <div className="pb-2">
                <div className="flex text-yellow-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-500" />
                  ))}
                </div>

                <p className="mt-1 text-xs text-slate-500">
                  37,400 total ratings
                </p>
              </div>
            </div>
          </div>

          {/* Credentials */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              Credentials
            </h3>

            <div className="mt-5 space-y-4">
              <Credential
                icon={<Award className="h-5 w-5 text-yellow-500" />}
                title="PhD (AI)"
                subtitle="Stanford University · 2018"
              />

              <Credential
                icon={<BriefcaseBusiness className="h-5 w-5 text-blue-500" />}
                title="Google Brain Residency"
                subtitle="Google Research · 2019-2020"
              />

              <Credential
                icon={<BookOpen className="h-5 w-5 text-emerald-500" />}
                title="TensorFlow Developer Certificate"
                subtitle="Google Developers · 2021"
              />
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}

/* COMPONENTS */

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
      <div className="text-2xl font-bold text-white">{value}</div>

      <div className="mt-1 text-xs uppercase tracking-wide text-slate-400">
        {label}
      </div>
    </div>
  );
}

function Tab({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-5 py-2 text-sm font-medium transition ${
        active
          ? "bg-white text-slate-900"
          : "text-slate-300 hover:bg-white/10 hover:text-white"
      }`}
    >
      {children}
    </button>
  );
}

function MiniStat({
  value,
  label,
  color,
}: {
  value: string;
  label: string;
  color: string;
}) {
  return (
    <div className="rounded-2xl bg-[#0c2032] p-5 text-center">
      <div className={`text-2xl font-bold ${color}`}>{value}</div>

      <div className="mt-1 text-xs uppercase tracking-wide text-slate-400">
        {label}
      </div>
    </div>
  );
}

function SocialButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="rounded-full border border-slate-200 p-2 hover:bg-slate-100">
      {children}
    </button>
  );
}

function Credential({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex gap-4 rounded-xl border border-slate-100 p-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50">
        {icon}
      </div>

      <div>
        <h4 className="font-semibold text-slate-900">{title}</h4>
        <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
      </div>
    </div>
  );
}
