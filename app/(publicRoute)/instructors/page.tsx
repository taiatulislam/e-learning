"use client";

import React, { useState, useMemo } from "react";
import {
  SlSocialFacebook,
  SlSocialTwitter,
  SlSocialLinkedin,
} from "react-icons/sl";

interface Instructor {
  id: number;
  initials: string;
  name: string;
  title: string;
  category: string;
  rating: number;
  reviews: number;
  students: number;
  courses: number;
  skills: string[];
  bio: string;
  badge?: string;
  avatarGrad: string;
  featured?: boolean;
  social: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    website?: string;
  };
}

type SortKey = "rating" | "students" | "courses" | "reviews";
type Category =
  | "All"
  | "Machine Learning"
  | "Design"
  | "Web Dev"
  | "Business"
  | "Data Science"
  | "Cybersecurity";

const INSTRUCTORS: Instructor[] = [
  {
    id: 1,
    initials: "SR",
    name: "Sarah R. Nguyen",
    title: "Senior ML Engineer · Google Brain Alumni",
    category: "Machine Learning",
    rating: 4.9,
    reviews: 18200,
    students: 94200,
    courses: 12,
    skills: ["Machine Learning", "PyTorch", "LLMs"],
    bio: "8+ years building production AI systems at Google and Meta. Stanford PhD candidate specialising in large language models.",
    badge: "Top Instructor",
    avatarGrad: "linear-gradient(135deg, #1E3A5F 0%, #2d5f9e 100%)",
    featured: true,
    social: { linkedin: "#", twitter: "#", facebook: "#" },
  },
  {
    id: 2,
    initials: "MC",
    name: "Marcus Chen",
    title: "Full-Stack Architect · Ex-Stripe",
    category: "Web Dev",
    rating: 4.8,
    reviews: 12400,
    students: 67500,
    courses: 9,
    skills: ["React", "Node.js", "System Design"],
    bio: "Former principal engineer at Stripe. Obsessed with scalable systems and teaching engineers to think in distributed architectures.",
    badge: "Best Seller",
    avatarGrad: "linear-gradient(135deg, #1A3D2B 0%, #2d7a4f 100%)",
    featured: true,
    social: { linkedin: "#", facebook: "#",},
  },
  {
    id: 3,
    initials: "AO",
    name: "Amara Osei",
    title: "Product Design Lead · Figma Advocate",
    category: "Design",
    rating: 4.9,
    reviews: 9800,
    students: 52000,
    courses: 7,
    skills: ["Figma", "UX Research", "Design Systems"],
    bio: "Award-winning product designer with 10+ years crafting interfaces for startups and Fortune 500 companies alike.",
    badge: "Top Rated",
    avatarGrad: "linear-gradient(135deg, #3D1A1A 0%, #8b3535 100%)",
    featured: false,
    social: { linkedin: "#", twitter: "#" },
  },
  {
    id: 4,
    initials: "RV",
    name: "Rafael Vargas",
    title: "Data Scientist · Kaggle Grandmaster",
    category: "Data Science",
    rating: 4.7,
    reviews: 7600,
    students: 41200,
    courses: 6,
    skills: ["Python", "Pandas", "Statistics"],
    bio: "Kaggle Grandmaster and data science consultant. I translate complex statistical concepts into practical, real-world solutions.",
    avatarGrad: "linear-gradient(135deg, #2A1A3D 0%, #6d3d9e 100%)",
    featured: false,
    social: { linkedin: "#", facebook: "#" },
  },
  {
    id: 5,
    initials: "LN",
    name: "Lena Nordström",
    title: "Business Strategist · Harvard MBA",
    category: "Business",
    rating: 4.8,
    reviews: 11300,
    students: 58900,
    courses: 8,
    skills: ["Strategy", "Finance", "Leadership"],
    bio: "Harvard MBA and former McKinsey consultant. I help founders and leaders build businesses that last decades, not just quarters.",
    badge: "Best Seller",
    avatarGrad: "linear-gradient(135deg, #1A2E3D 0%, #2d5f7a 100%)",
    featured: true,
    social: { linkedin: "#", twitter: "#" },
  },
  {
    id: 6,
    initials: "JA",
    name: "James Adeyemi",
    title: "Cybersecurity Expert · CISSP",
    category: "Cybersecurity",
    rating: 4.9,
    reviews: 6200,
    students: 33400,
    courses: 5,
    skills: ["Ethical Hacking", "Network Security", "CTF"],
    bio: "CISSP-certified security engineer with a decade in penetration testing and red team operations across finance and government.",
    badge: "New",
    avatarGrad: "linear-gradient(135deg, #3D2A1A 0%, #9e6d2d 100%)",
    featured: false,
    social: { linkedin: "#", facebook: "#" },
  },
  {
    id: 7,
    initials: "PK",
    name: "Priya Kapoor",
    title: "iOS & Android Developer · Apple Scholar",
    category: "Web Dev",
    rating: 4.8,
    reviews: 8100,
    students: 45600,
    courses: 7,
    skills: ["Swift", "Kotlin", "Flutter"],
    bio: "Apple Scholar and senior mobile engineer. I've shipped apps with 10M+ downloads and love teaching the craft of mobile excellence.",
    avatarGrad: "linear-gradient(135deg, #1A3A3D 0%, #2d7a7e 100%)",
    featured: false,
    social: { linkedin: "#", twitter: "#", facebook: "#" },
  },
  {
    id: 8,
    initials: "TS",
    name: "Thomas Schulz",
    title: "Deep Learning Researcher · NeurIPS Author",
    category: "Machine Learning",
    rating: 4.6,
    reviews: 4900,
    students: 28700,
    courses: 4,
    skills: ["TensorFlow", "Computer Vision", "Research"],
    bio: "Published researcher at NeurIPS and ICML. I bridge the gap between cutting-edge academic research and practical engineering.",
    avatarGrad: "linear-gradient(135deg, #1A1A3D 0%, #35358b 100%)",
    featured: false,
    social: { linkedin: "#", facebook: "#" },
  },
  {
    id: 9,
    initials: "FM",
    name: "Fatima Malik",
    title: "UX Strategist · Google Design Alumni",
    category: "Design",
    rating: 4.9,
    reviews: 7400,
    students: 39800,
    courses: 6,
    skills: ["User Research", "Prototyping", "Accessibility"],
    bio: "Former Google Design team member. I specialise in user research-driven design that balances business goals with human needs.",
    badge: "Top Rated",
    avatarGrad: "linear-gradient(135deg, #3D1A2E 0%, #8b3579 100%)",
    featured: false,
    social: { linkedin: "#", twitter: "#" },
  },
];

const CATEGORIES: Category[] = [
  "All",
  "Machine Learning",
  "Design",
  "Web Dev",
  "Business",
  "Data Science",
  "Cybersecurity",
];

const SORT_OPTIONS: { label: string; value: SortKey }[] = [
  { label: "Highest rated", value: "rating" },
  { label: "Most students", value: "students" },
  { label: "Most courses", value: "courses" },
  { label: "Most reviews", value: "reviews" },
];

const fmt = (n: number): string =>
  n >= 1000 ? `${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}K` : String(n);

const Stars: React.FC<{ rating: number }> = ({ rating }) => {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <span className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className="text-[13px]"
          style={{
            color:
              i < full ? "#D97706" : i === full && half ? "#D97706" : "#E5E7EB",
            opacity: i === full && half ? 0.6 : 1,
          }}
        >
          ★
        </span>
      ))}
    </span>
  );
};

const InstructorCard: React.FC<{ instructor: Instructor }> = ({
  instructor: ins,
}) => {
  return (
    <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Header */}
      <div
        className="relative h-40 flex items-center justify-center"
        style={{ background: ins.avatarGrad }}
      >
        {/* Avatar */}
        <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border-4 border-white/20 flex items-center justify-center text-white text-2xl font-bold">
          {ins.initials}
        </div>

        {/* Badge */}
        {ins.badge && (
          <span className="absolute top-3 left-3 text-xs font-semibold px-2 py-1 rounded-full bg-black/70 text-white backdrop-blur">
            {ins.badge}
          </span>
        )}

        {/* Category */}
        <span className="absolute top-3 right-3 text-xs px-2 py-1 rounded-full bg-black/30 text-white">
          {ins.category}
        </span>

        {/* Hover overlay (desktop only) */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
          <a
            href={`/instructors/${ins.id}`}
            className="text-sm font-semibold text-white border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-gray-900 transition"
          >
            View Profile
          </a>
        </div>
      </div>

      {/* Body */}
      <div className="p-4 flex flex-col gap-3 flex-1">
        {/* Name */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900">{ins.name}</h3>
          <p className="text-xs text-gray-400">{ins.title}</p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 text-sm">
          <span className="font-semibold text-amber-600">{ins.rating}</span>
          <Stars rating={ins.rating} />
          <span className="text-gray-400 text-xs">({fmt(ins.reviews)})</span>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 text-center border-y py-2 text-xs">
          <div>
            <p className="font-semibold text-gray-900">{fmt(ins.students)}</p>
            <p className="text-gray-400">Students</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900">{ins.courses}</p>
            <p className="text-gray-400">Courses</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900">{fmt(ins.reviews)}</p>
            <p className="text-gray-400">Reviews</p>
          </div>
        </div>

        {/* Bio */}
        <p className="text-xs text-gray-500 line-clamp-2">{ins.bio}</p>

        {/* Skills */}
        <div className="flex flex-wrap gap-1 mt-auto">
          {ins.skills.slice(0, 4).map((skill) => (
            <span
              key={skill}
              className="text-[10px] px-2 py-1 bg-blue-50 border rounded-full text-gray-500"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t">
          {/* Social */}
          <div className="flex gap-2">
            {ins.social.linkedin && (
              <a
                href={ins.social.linkedin}
                className="w-7 h-7 rounded-full bg-blue-400 flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <SlSocialLinkedin className="w-3 h-3 text-white" />
              </a>
            )}
            {ins.social.twitter && (
              <a
                href={ins.social.twitter}
                className="w-7 h-7 rounded-full bg-blue-400 flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <SlSocialTwitter className="w-3 h-3 text-white" />
              </a>
            )}
            {ins.social.facebook && (
              <a
                href={ins.social.facebook}
                className="w-7 h-7 rounded-full bg-blue-400 flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <SlSocialFacebook className="w-3 h-3 text-white" />
              </a>
            )}
          </div>

          {/* CTA */}
          <a
            href={`/instructors/${ins.id}`}
            className="text-xs font-semibold text-primary hover:text-blue-900"
          >
            Courses →
          </a>
        </div>
      </div>
    </div>
  );
};

const FeaturedStrip: React.FC<{ instructors: Instructor[] }> = ({
  instructors,
}) => {
  const featured = instructors.filter((i) => i.featured).slice(0, 3);
  return (
    <div className="bg-gray-900 py-14 px-8 mb-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-[11px] font-semibold tracking-[2px] uppercase text-primary mb-2">
              Handpicked
            </p>
            <h2 className="text-white text-[28px] leading-snug">
              Featured instructors this month
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featured.map((ins) => (
            <a
              key={ins.id}
              href={`/instructors/${ins.id}`}
              className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 hover:border-white/25 hover:bg-white/5 transition-all duration-200 group"
              style={{ textDecoration: "none" }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-white text-xl font-bold shrink-0"
                style={{
                  background: ins.avatarGrad,
                }}
              >
                {ins.initials}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[14px] font-semibold text-white leading-snug truncate">
                  {ins.name}
                </p>
                <p className="text-[11.5px] text-white/45 font-light truncate">
                  {ins.category}
                </p>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="text-amber-400 text-[12px]">
                    ★ {ins.rating}
                  </span>
                  <span className="text-white/30 text-[11px]">
                    · {fmt(ins.students)} students
                  </span>
                </div>
              </div>
              <span className="text-white/30 group-hover:text-white/70 text-[18px] transition-colors shrink-0">
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const Instructors = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [sortKey, setSortKey] = useState<SortKey>("rating");

  const filtered = useMemo(() => {
    let list = [...INSTRUCTORS];
    if (activeCategory !== "All")
      list = list.filter((i) => i.category === activeCategory);
    if (search.trim())
      list = list.filter(
        (i) =>
          i.name.toLowerCase().includes(search.toLowerCase()) ||
          i.title.toLowerCase().includes(search.toLowerCase()) ||
          i.skills.some((s) => s.toLowerCase().includes(search.toLowerCase())),
      );
    list.sort((a, b) => b[sortKey] - a[sortKey]);
    return list;
  }, [search, activeCategory, sortKey]);

  return (
    <div className="bg-[#FAFAF8] text-gray-900 min-h-screen mb-10">
      {/* ── HERO ── */}
      <section className="px-8 pt-20 pb-16 text-center relative overflow-hidden z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-7 h-px bg-primary opacity-50" />
            <p className="text-primary text-[12px] font-semibold tracking-[1.5px] uppercase">
              World-class educators
            </p>
            <span className="w-7 h-px bg-primary opacity-50" />
          </div>

          <h1 className="text-black text-[clamp(32px,6vw,52px)] leading-[1.1] max-w-2xl mx-auto mb-5">
            Learn from the{" "}
            <em
              className="text-primary not-italic"
              style={{ fontStyle: "italic" }}
            >
              best minds
            </em>{" "}
            in the field
          </h1>

          <p className="text-gray text-[15px] max-w-md mx-auto mb-10 leading-relaxed font-light">
            Every instructor is a practitioner first — engineers, designers, and
            founders who build for a living and teach from experience.
          </p>

          {/* Hero stats */}
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {[
              { val: "1,200+", lbl: "Expert instructors" },
              { val: "4.8★", lbl: "Avg. instructor rating" },
              { val: "6,800+", lbl: "Courses published" },
            ].map((s) => (
              <div key={s.lbl} className="text-center">
                <p className="text-primary text-[22px] font-semibold leading-none">
                  {s.val}
                </p>
                <p className="text-primary/80 text-[11.5px] mt-1.5 uppercase tracking-wide">
                  {s.lbl}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED STRIP ── */}
      <FeaturedStrip instructors={INSTRUCTORS} />

      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8">
          {/* ── LEFT: FILTER SIDEBAR ── */}
          <aside className="lg:sticky lg:top-20 h-fit space-y-6">
            {/* Search */}
            <div>
              <p className="text-xs font-semibold text-gray-400 mb-2 uppercase">
                Search
              </p>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 text-sm">
                  🔍
                </span>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search instructors..."
                  className="w-full pl-9 pr-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-none focus:border-blue-400 focus:bg-white"
                />
              </div>
            </div>

            {/* Categories */}
            <div>
              <p className="text-xs font-semibold text-gray-400 mb-2 uppercase">
                Categories
              </p>
              <div className="flex flex-col gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-left px-3 py-2 rounded-lg text-sm transition ${
                      activeCategory === cat
                        ? "bg-gray-900 text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Clear */}
            {search && (
              <button
                onClick={() => setSearch("")}
                className="text-sm text-primary hover:text-blue-900"
              >
                Clear search ✕
              </button>
            )}
          </aside>

          {/* ── RIGHT: RESULTS ── */}
          <div>
            {/* Result count */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-gray-500">
                Showing{" "}
                <span className="font-semibold text-gray-800">
                  {filtered.length}
                </span>{" "}
                instructors
                {activeCategory !== "All" && (
                  <>
                    {" "}
                    in{" "}
                    <span className="font-semibold text-gray-800">
                      {activeCategory}
                    </span>
                  </>
                )}
              </p>

              {/* Sort */}
              <div>
                <p className="text-xs font-semibold text-gray-400 mb-2 uppercase">
                  Sort by
                </p>
                <select
                  value={sortKey}
                  onChange={(e) => setSortKey(e.target.value as SortKey)}
                  className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 bg-white outline-none focus:border-blue-400"
                >
                  {SORT_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-5xl mb-4">🔍</p>
                <p className="text-lg font-medium text-gray-700">
                  No instructors found
                </p>
                <p className="text-sm text-gray-400">
                  Try adjusting your search or filters
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filtered.map((ins, idx) => (
                  <div
                    key={ins.id}
                    className="fade-up"
                    style={{ animationDelay: `${idx * 60}ms` }}
                  >
                    <InstructorCard instructor={ins} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── BECOME AN INSTRUCTOR CTA ── */}
      <section className="bg-gray-900 py-16 px-8 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 80% at 50% 100%, rgba(59,130,246,0.12) 0%, transparent 65%)",
          }}
        />
        <div className="relative z-10 max-w-xl mx-auto">
          <p className="text-primary text-[11px] font-semibold tracking-[2px] uppercase mb-3">
            Teach on E-Learning
          </p>
          <h2 className="text-white text-[clamp(24px,4vw,34px)] mb-4 leading-snug">
            Share your expertise with{" "}
            <em className="text-primary" style={{ fontStyle: "italic" }}>
              2.4 million learners
            </em>
          </h2>
          <p className="text-white/45 text-[14px] font-light leading-relaxed mb-8">
            Join over 1,200 instructors earning revenue while helping people
            build real skills. Apply today — we review every application within
            5 business days.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a
              href="#"
              className="bg-primary text-white text-[14px] font-medium px-7 py-3 rounded-lg hover:bg-blue-900 transition-colors"
              style={{ textDecoration: "none" }}
            >
              Apply to teach →
            </a>
            <a
              href="#"
              className="border border-white/20 text-white/75 text-[14px] px-7 py-3 rounded-lg hover:border-white/50 hover:text-white transition-colors font-light"
              style={{ textDecoration: "none" }}
            >
              Learn more
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Instructors;
