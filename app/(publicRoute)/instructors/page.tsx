"use client";

import { ICategory } from "@/type/categoryType";
import { IInstructor } from "@/type/instructorType";
import { fetchCategories, fetchInstructors } from "@/utils/helpers";
import { useQuery } from "@tanstack/react-query";
import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  SlSocialFacebook,
  SlSocialTwitter,
  SlSocialLinkedin,
} from "react-icons/sl";

type SortKey = "rating" | "students" | "courses" | "reviews";

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

const InstructorCard: React.FC<{ instructor: IInstructor }> = ({
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
          {ins.name
            ?.split(" ")
            .map((word: string) => word[0])
            .join("")
            .toUpperCase()}
        </div>

        {/* Badge */}
        {ins.badge && (
          <span className="absolute top-3 left-3 text-xs font-semibold px-2 py-1 rounded-full bg-black/70 text-white backdrop-blur">
            {ins.badge}
          </span>
        )}

        {/* Category */}
        <div className="absolute top-3 right-3 flex flex-wrap gap-2">
          <span className="text-xs px-2 py-1 rounded-full bg-black/30 text-white">
            {ins.categories[0]}
          </span>
        </div>

        {/* Hover overlay (desktop only) */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
          <Link
            href={`/instructors/${ins.id}`}
            className="text-sm font-semibold text-white border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-gray-900 transition"
          >
            View Profile
          </Link>
        </div>
      </div>

      {/* Body */}
      <div className="p-4 flex flex-col gap-3 flex-1">
        {/* Name */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900">{ins.name}</h3>
          <p className="text-xs text-gray-400">{ins.name}</p>
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

        {/* expertise */}
        <div className="flex flex-wrap gap-1 mt-auto">
          {ins.expertise.slice(0, 4).map((expert) => (
            <span
              key={expert}
              className="text-[10px] px-2 py-1 bg-blue-50 border rounded-full text-gray-500"
            >
              {expert}
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
          <Link
            href={`/instructors/${ins.id}`}
            className="text-xs font-semibold text-primary hover:text-blue-900"
          >
            Courses →
          </Link>
        </div>
      </div>
    </div>
  );
};

const FeaturedStrip: React.FC<{ instructors: IInstructor[] }> = ({
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
            <Link
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
                {ins.name
                  ?.split(" ")
                  .map((word: string) => word[0])
                  .join("")
                  .toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[14px] font-semibold text-white leading-snug truncate">
                  {ins.name}
                </p>

                {ins.categories?.map((category: string, index: number) => (
                  <p
                    key={index}
                    className="text-[11.5px] text-white/45 font-light truncate"
                  >
                    {category}
                  </p>
                ))}

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
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const Instructors = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [sortKey, setSortKey] = useState<SortKey>("rating");

  const { data: instructors = [], isLoading } = useQuery<IInstructor[]>({
    queryKey: ["instructors"],
    queryFn: fetchInstructors,
  });

  const { data: fetchedCategories = [] } = useQuery<ICategory[]>({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const categories: ICategory[] = [
    { id: "all", name: "All", image: "", courses: 0 },
    ...fetchedCategories,
  ];

  // safe number conversion
  const toNumber = (val: unknown) =>
    typeof val === "number"
      ? val
      : Number(String(val ?? "").replace(/\D/g, "")) || 0;

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();

    return instructors
      .filter((i) =>
        activeCategory === "All"
          ? true
          : (i.categories ?? []).includes(activeCategory),
      )
      .filter((i) =>
        q
          ? i.name?.toLowerCase().includes(q) ||
            i.designation?.toLowerCase().includes(q) ||
            (i.categories ?? []).some((e) => e.toLowerCase().includes(q))
          : true,
      )
      .sort((a, b) => toNumber(b[sortKey]) - toNumber(a[sortKey]));
  }, [instructors, search, activeCategory, sortKey]);

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
      <FeaturedStrip instructors={instructors} />

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
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.name)}
                    className={`text-left px-3 py-2 rounded-lg text-sm transition ${
                      activeCategory === cat.name
                        ? "bg-primary text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {cat.name}
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
            {isLoading && instructors.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-3xl mb-4 animate-pulse">⏳</p>
                <p className="text-lg font-medium text-gray-700">
                  Loading instructors...
                </p>
              </div>
            ) : filtered.length === 0 ? (
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
