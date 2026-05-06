"use client";

import Image from "next/image";
import { IconType } from "react-icons";
import {
  SlSocialFacebook,
  SlSocialTwitter,
  SlSocialLinkedin,
} from "react-icons/sl";

interface TeamMember {
  initials: string;
  name: string;
  role: string;
  bgClass: string;
  image: string;
  links: { icon: IconType; href: string; label: string }[];
}

interface TimelineItem {
  year: string;
  event: string;
  detail: string;
  filled: boolean;
}

interface ValueItem {
  icon: string;
  name: string;
  desc: string;
  colorClass: string;
}

interface ReachItem {
  icon: string;
  title: string;
  text: string;
}

const STATS = [
  { val: "2.4M+", lbl: "Active learners" },
  { val: "180+", lbl: "Countries reached" },
  { val: "6,800", lbl: "Expert courses" },
  { val: "94%", lbl: "Completion rate" },
];

const VALUES: ValueItem[] = [
  {
    icon: "🌐",
    name: "Radical accessibility",
    desc: "Every learner deserves a seat at the table. We build for slow connections, small screens, and tight budgets.",
    colorClass: "green",
  },
  {
    icon: "⭐",
    name: "Uncompromising quality",
    desc: "We partner only with instructors who have shipped real products and can teach from genuine experience.",
    colorClass: "gold",
  },
  {
    icon: "👥",
    name: "Community over content",
    desc: "The relationships formed in our cohorts outlast any course. We invest in the human layer as much as the curriculum.",
    colorClass: "blue",
  },
  {
    icon: "📈",
    name: "Outcome obsession",
    desc: "We track job placements, salary lifts, and project launches — not just video completions.",
    colorClass: "purple",
  },
  {
    icon: "🔄",
    name: "Always be learning",
    desc: "Our team is expected to take courses quarterly. We eat our own cooking and stay students ourselves.",
    colorClass: "teal",
  },
  {
    icon: "❤️",
    name: "Genuine care",
    desc: "Every support ticket, every forum post gets a real human response from someone who cares.",
    colorClass: "red",
  },
];

const TIMELINE: TimelineItem[] = [
  {
    year: "2017",
    event: "Founded in a Bangalore apartment",
    detail:
      "Priya and Marcus launched learn.io with 8 courses. The first cohort had 40 learners.",
    filled: true,
  },
  {
    year: "2019",
    event: "Reached 100,000 learners & Series A",
    detail:
      "We closed a $6M Series A led by Benchmark, built our first mobile app, and expanded to 12 languages.",
    filled: true,
  },
  {
    year: "2021",
    event: "Launched the Scholarship Fund",
    detail:
      "Partnered with 14 NGOs to offer fully-funded access to learners in 30 underserved regions.",
    filled: true,
  },
  {
    year: "2023",
    event: "1 million active learners milestone",
    detail:
      "We crossed 1M enrolled learners across 130 countries and launched live cohort programs.",
    filled: true,
  },
  {
    year: "2025 →",
    event: "AI-powered personalized learning paths",
    detail:
      "We're shipping adaptive curricula that respond to each learner's pace, style, and goals.",
    filled: false,
  },
];

const TEAM: TeamMember[] = [
  {
    initials: "PS",
    name: "Priya Sharma",
    role: "Co-founder & CEO",
    bgClass: "bg-[#1E3A5F]",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
    links: [
      { icon: SlSocialFacebook, href: "#", label: "LinkedIn" },
      { icon: SlSocialLinkedin, href: "#", label: "LinkedIn" },
      { icon: SlSocialTwitter, href: "#", label: "Twitter" },
    ],
  },
  {
    initials: "MC",
    name: "Marcus Chen",
    role: "Co-founder & CTO",
    bgClass: "bg-[#1A3D2B]",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80",
    links: [
      { icon: SlSocialFacebook, href: "#", label: "LinkedIn" },
      { icon: SlSocialLinkedin, href: "#", label: "LinkedIn" },
      { icon: SlSocialTwitter, href: "#", label: "Twitter" },
    ],
  },
  {
    initials: "AO",
    name: "Amara Osei",
    role: "Chief Learning Officer",
    bgClass: "bg-[#3D1A1A]",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
    links: [
      { icon: SlSocialFacebook, href: "#", label: "LinkedIn" },
      { icon: SlSocialLinkedin, href: "#", label: "LinkedIn" },
      { icon: SlSocialTwitter, href: "#", label: "Twitter" },
    ],
  },
  {
    initials: "RV",
    name: "Rafael Vargas",
    role: "VP of Engineering",
    bgClass: "bg-[#2A1A3D]",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=200&q=80",
    links: [
      { icon: SlSocialFacebook, href: "#", label: "LinkedIn" },
      { icon: SlSocialLinkedin, href: "#", label: "LinkedIn" },
      { icon: SlSocialTwitter, href: "#", label: "Twitter" },
    ],
  },
  {
    initials: "LN",
    name: "Lena Nordström",
    role: "Head of Product Design",
    bgClass: "bg-[#1A2E3D]",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
    links: [
      { icon: SlSocialFacebook, href: "#", label: "LinkedIn" },
      { icon: SlSocialLinkedin, href: "#", label: "LinkedIn" },
      { icon: SlSocialTwitter, href: "#", label: "Twitter" },
    ],
  },
  {
    initials: "JA",
    name: "James Adeyemi",
    role: "Director of Partnerships",
    bgClass: "bg-[#3D2A1A]",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    links: [
      { icon: SlSocialFacebook, href: "#", label: "LinkedIn" },
      { icon: SlSocialLinkedin, href: "#", label: "LinkedIn" },
      { icon: SlSocialTwitter, href: "#", label: "Twitter" },
    ],
  },
];

const REACH: ReachItem[] = [
  {
    icon: "📍",
    title: "180+ countries",
    text: "From São Paulo to Nairobi to Jakarta, learners in every corner of the world access our platform daily.",
  },
  {
    icon: "🌍",
    title: "28 languages",
    text: "Our top 500 courses are fully translated and localized, not just subtitled, for genuine comprehension.",
  },
  {
    icon: "📱",
    title: "Works on any device",
    text: "68% of our learners study primarily on mobile. We design mobile-first and test on low-end Android devices.",
  },
  {
    icon: "📶",
    title: "Full offline mode",
    text: "Download any course for offline study. Perfect for commuters, rural learners, and inconsistent connectivity.",
  },
];

const PARTNERS = [
  "Google",
  "Stripe",
  "Airbnb",
  "Shopify",
  "Figma",
  "Netflix",
  "Spotify",
];

const SectionLabel: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <p className="text-[11.5px] font-semibold tracking-[2px] uppercase text-primary mb-3">
    {children}
  </p>
);

const SectionTitle: React.FC<{
  children: React.ReactNode;
  light?: boolean;
}> = ({ children, light }) => (
  <h2
    className={`font-serif text-[34px] leading-[1.15] mb-5 ${
      light ? "text-white" : "text-gray-900"
    }`}
  >
    {children}
  </h2>
);

const valueColorMap: Record<string, string> = {
  green: "bg-green-50 text-green-700",
  gold: "bg-amber-50 text-amber-700",
  blue: "bg-blue-50 text-blue-700",
  purple: "bg-purple-50 text-purple-700",
  teal: "bg-teal-50 text-teal-700",
  red: "bg-red-50 text-red-700",
};

const ValueCard: React.FC<{ item: ValueItem }> = ({ item }) => (
  <div className="bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-md transition-shadow duration-200">
    <div
      className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4 ${
        valueColorMap[item.colorClass]
      }`}
    >
      {item.icon}
    </div>
    <h3 className="text-[15px] font-semibold text-gray-900 mb-2">
      {item.name}
    </h3>
    <p className="text-[13.5px] text-gray-500 leading-relaxed font-light">
      {item.desc}
    </p>
  </div>
);

const TeamCard: React.FC<{ member: TeamMember }> = ({ member }) => (
  <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:-translate-y-1 transition-transform duration-200">
    <div className={`h-32 flex items-center justify-center ${member.bgClass}`}>
      <Image
        src={member.image}
        alt={member.name}
        width={80}
        height={80}
        className="rounded-full h-20 w-20 border-2 border-white shadow-md object-cover"
        unoptimized
      />
    </div>
    <div className="p-4">
      <p className="font-semibold text-gray-900">{member.name}</p>
      <p className="text-xs text-gray-400 mt-0.5 font-light">{member.role}</p>
      <div className="flex gap-2 mt-3">
        {member.links.map((link, i) => (
          <a
            key={i}
            href="#"
            className="w-6.5 h-6.5 rounded-full bg-blue-400 flex items-center justify-center hover:opacity-80 transition-opacity"
          >
            <link.icon className="w-3 h-3 text-white" />
          </a>
        ))}
      </div>
    </div>
  </div>
);

const ReachCard: React.FC<{ item: ReachItem }> = ({ item }) => (
  <div className="bg-white rounded-xl p-6 border border-gray-100 flex gap-4 items-start">
    <span className="text-2xl text-primary mt-0.5 shrink-0">{item.icon}</span>
    <div>
      <p className="text-[14.5px] font-semibold text-gray-900 mb-1">
        {item.title}
      </p>
      <p className="text-[13px] text-gray-400 leading-relaxed font-light">
        {item.text}
      </p>
    </div>
  </div>
);

const AboutUs: React.FC = () => {
  const scrollToTeam = () => {
    document
      .getElementById("team-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="text-gray-900 min-h-screen mb-15">
      {/* ── HERO ── */}
      <section className="px-8 pt-20 pb-16 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-7 h-px bg-primary opacity-50" />
            <p className="text-primary text-[12px] font-semibold tracking-[1.5px] uppercase">
              Our Story
            </p>
            <span className="w-7 h-px bg-primary opacity-50" />
          </div>

          <h1 className="text-black text-[clamp(32px,6vw,52px)] leading-[1.1] max-w-2xl mx-auto mb-5">
            Education that{" "}
            <em
              className="text-primary not-italic"
              style={{ fontStyle: "italic" }}
            >
              opens doors
            </em>{" "}
            for everyone
          </h1>

          <p className="text-gray text-[15px] max-w-md mx-auto mb-10 leading-relaxed font-light">
            We started with a simple belief — that world-class learning
            shouldn&apos;t be locked behind tuition fees or zip codes. Seven
            years later, we&apos;re still building on that belief.
          </p>

          <div className="flex gap-3 justify-center flex-wrap">
            <a
              href="#"
              className="bg-primary text-white text-[14px] font-medium px-7 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Start learning free →
            </a>
            <button
              onClick={scrollToTeam}
              className="border border-white/20 text-white/75 text-[14px] px-7 py-3 rounded-lg hover:border-white/50 hover:text-white transition-colors font-light"
            >
              Meet the team
            </button>
          </div>
        </div>
      </section>

      {/* ── IMPACT STRIP ── */}
      <section className="bg-primary py-10 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-0">
          {STATS.map((s, i) => (
            <div
              key={s.lbl}
              className={`text-center py-4 px-4 ${
                i < 3 ? "border-r border-white/20" : ""
              } max-md:${i % 2 === 0 ? "border-r" : "border-r-0"} max-md:border-b border-white/20`}
            >
              <p className="text-white text-[38px] leading-none">{s.val}</p>
              <p className="text-white/65 text-[11px] tracking-wide uppercase mt-1.5">
                {s.lbl}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-0 py-16 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <SectionLabel>Our Mission</SectionLabel>
          <SectionTitle>
            Learning should be a right, not a privilege
          </SectionTitle>
          <p className="text-[15px] text-gray-600 leading-relaxed font-light mb-4">
            We built learn.io because we kept watching talented people hit walls
            — not because they lacked potential, but because they lacked access.
            Access to mentors, to structured curricula, to communities that push
            you forward.
          </p>
          <p className="text-[15px] text-gray-600 leading-relaxed font-light">
            Every feature we ship, every instructor we partner with, every
            scholarship we grant is in service of one idea: the next brilliant
            engineer, designer, or entrepreneur shouldn&apos;t have to wait for
            the right school to accept them.
          </p>
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 flex flex-col gap-5">
          <p className="text-white text-[22px] leading-snug italic">
            &ldquo;The best investment you can make is in your own abilities.
            And the return is extraordinary.&rdquo;
          </p>
          <p className="text-white/40 text-[13px]">
            — Priya Sharma, Co-founder
          </p>
          <hr className="border-white/10" />
          <p className="text-white/40 text-[12.5px] font-light">
            What we stand for
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Open access",
              "Expert-led",
              "Community first",
              "Outcome-driven",
              "Always improving",
            ].map((pill) => (
              <span
                key={pill}
                className="bg-primary/10 text-primary border border-primary/20 text-[12px] font-medium px-3 py-1 rounded-full"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="bg-[#F5F2ED] py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <SectionLabel>What We Believe</SectionLabel>
          <SectionTitle>
            Six principles that guide everything we do
          </SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {VALUES.map((v) => (
              <ValueCard key={v.name} item={v} />
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-0 py-16">
        <SectionLabel>Our Journey</SectionLabel>
        <SectionTitle>Seven years of building in public</SectionTitle>
        <div className="relative pl-7 mt-8">
          <div className="absolute left-1.75 top-1.5 bottom-1.5 w-0.5 bg-gray-100" />
          {TIMELINE.map((item) => (
            <div key={item.year} className="relative pl-7 pb-10 last:pb-0">
              <div
                className={`absolute -left-7 top-1 w-4 h-4 rounded-full border-2 border-primary ${
                  item.filled ? "bg-primary" : "bg-white"
                }`}
              />
              <p className="text-[12px] font-semibold tracking-wide text-primary mb-1 uppercase">
                {item.year}
              </p>
              <p className="text-[15px] font-semibold text-gray-900 mb-1">
                {item.event}
              </p>
              <p className="text-[13.5px] text-gray-400 leading-relaxed font-light">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TEAM ── */}
      <section id="team-section" className="bg-[#F5F2ED] py-16 px-6 lg:px-0">
        <div className="max-w-7xl mx-auto">
          <SectionLabel>The Team</SectionLabel>
          <SectionTitle>
            Built by people who were once students here
          </SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
            {TEAM.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="#"
              className="inline-block bg-primary text-white text-[13.5px] font-medium px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              We are hiring — see open roles →
            </a>
          </div>
        </div>
      </section>

      {/* ── GLOBAL REACH ── */}
      <section className="bg-[#F5F2ED] border-t border-gray-100 py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <SectionLabel>Global Reach</SectionLabel>
          <SectionTitle>Learning knows no borders</SectionTitle>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            {REACH.map((item) => (
              <ReachCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNERS ── */}
      <section className="bg-gray-900 py-12 px-8 text-center">
        <p className="text-white/30 text-[12px] tracking-[2px] uppercase mb-8">
          Trusted by learners at the world&apos;s leading companies
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 max-w-7xl mx-auto">
          {PARTNERS.map((p) => (
            <span
              key={p}
              className="text-white/30 hover:text-white/70 transition-colors cursor-default text-[18px] font-bold"
            >
              {p}
            </span>
          ))}
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="bg-gray-900 border-t border-white/5 py-20 px-8 text-center">
        <h2 className="text-white text-[clamp(28px,5vw,38px)] mb-4 leading-[1.15]">
          Your next chapter{" "}
          <em className="text-primary" style={{ fontStyle: "italic" }}>
            starts here
          </em>
        </h2>
        <p className="text-white/45 text-[15px] mb-8 font-light max-w-md mx-auto leading-relaxed">
          Join 2.4 million learners who didn&apos;t wait for the perfect moment.
          The best time to start was yesterday. The second best is now.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <a
            href="#"
            className="bg-primary text-white text-[14px] font-medium px-7 py-3 rounded-lg hover:bg-blue-900 transition-colors"
          >
            Find your first course →
          </a>
          <a
            href="#"
            className="border border-white/20 text-white/75 text-[14px] px-7 py-3 rounded-lg hover:border-white/50 hover:text-white transition-colors font-light"
          >
            Become an instructor
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
