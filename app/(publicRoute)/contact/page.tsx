"use client";

import React, { useState, useRef } from "react";

interface ContactChannel {
  icon: string;
  label: string;
  value: string;
  sub: string;
  href: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface FormState {
  name: string;
  email: string;
  subject: string;
  category: string;
  message: string;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

const CHANNELS: ContactChannel[] = [
  {
    icon: "💬",
    label: "Live chat",
    value: "Available 24/7",
    sub: "Avg. response in under 2 min",
    href: "#",
  },
  {
    icon: "✉️",
    label: "Email us",
    value: "hello@learn.io",
    sub: "We reply within 24 hours",
    href: "mailto:hello@learn.io",
  },
  {
    icon: "📞",
    label: "Call us",
    value: "+1 (415) 800-9200",
    sub: "Mon – Fri, 9 am – 6 pm PST",
    href: "tel:+14158009200",
  },
  {
    icon: "🏢",
    label: "Visit us",
    value: "San Francisco, CA",
    sub: "548 Market St, Suite 19000",
    href: "#",
  },
];

const CATEGORIES = [
  "General enquiry",
  "Course support",
  "Billing & payments",
  "Instructor partnership",
  "Enterprise & teams",
  "Press & media",
  "Technical issue",
  "Other",
];

const FAQS: FAQ[] = [
  {
    question: "How do I reset my password?",
    answer:
      "Head to the login page and click 'Forgot password'. Enter your email and we'll send you a reset link within a few minutes. Check your spam folder if you don't see it.",
  },
  {
    question: "Can I get a refund on a course?",
    answer:
      "Yes — we offer a 30-day money-back guarantee on all purchases, no questions asked. Simply contact our support team with your order number and we'll process the refund within 3–5 business days.",
  },
  {
    question: "How do I become an instructor?",
    answer:
      "Apply through our Teach on learn.io page. Our team reviews every application within 5 business days and will reach out with next steps if your profile is a good fit.",
  },
  {
    question: "Do you offer team or enterprise plans?",
    answer:
      "Absolutely. We have tailored plans for teams of 5 or more, including dedicated onboarding, custom learning paths, and a dedicated account manager. Use the contact form and select 'Enterprise & teams' to get a quote.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes — you can audit the first module of any course for free. No credit card required. Full course access begins when you enroll.",
  },
];

const SOCIAL = [
  { label: "Twitter", icon: "𝕏", href: "#" },
  { label: "LinkedIn", icon: "in", href: "#" },
  { label: "YouTube", icon: "▶", href: "#" },
  { label: "Instagram", icon: "◻", href: "#" },
];

const ChannelCard = ({ channel }: { channel: ContactChannel }) => (
  <a
    href={channel.href}
    className="group flex items-start gap-4 bg-white border border-gray-100 rounded-2xl p-5 hover:border-blue-200 hover:shadow-md transition-all duration-200"
  >
    <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center text-xl shrink-0 group-hover:bg-blue-100">
      {channel.icon}
    </div>
    <div>
      <p className="text-[11.5px] font-semibold text-blue-600 uppercase tracking-[1.2px] mb-0.5">
        {channel.label}
      </p>
      <p className="text-[14.5px] font-semibold text-gray-900 mb-0.5">
        {channel.value}
      </p>
      <p className="text-[12.5px] text-gray-400 font-light">{channel.sub}</p>
    </div>
  </a>
);

const FaqItem: React.FC<{ faq: FAQ; index: number }> = ({ faq, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 bg-white hover:bg-gray-50 transition-colors duration-150 text-left cursor-pointer border-none"
        aria-expanded={open}
      >
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-semibold text-primary tabular-nums w-5 shrink-0">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-[14px] font-medium text-gray-900">
            {faq.question}
          </span>
        </div>
        <span
          className="text-gray-400 text-[18px] shrink-0 transition-transform duration-200 inline-block"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </button>
      {open && (
        <div className="px-5 pb-5 pt-1 bg-white border-t border-gray-50">
          <p className="text-[13.5px] text-gray-500 leading-relaxed font-light pl-8">
            {faq.answer}
          </p>
        </div>
      )}
    </div>
  );
};

// ─── Main Component ────────────────────────────────────────────────────────────

const Contact = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const formRef = useRef<HTMLFormElement>(null);

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Enter a valid email";
    if (!form.category) newErrors.category = "Please select a category";
    if (!form.message.trim()) newErrors.message = "Message is required";
    else if (form.message.trim().length < 20)
      newErrors.message = "Message must be at least 20 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitStatus("loading");
    // Simulate API call — replace with your actual endpoint
    await new Promise((res) => setTimeout(res, 1800));
    setSubmitStatus("success");
    setForm({ name: "", email: "", subject: "", category: "", message: "" });
  };

  const inputBase =
    "w-full bg-white border rounded-lg px-4 py-3 text-[14px] text-gray-900 placeholder-gray-300 outline-none transition-colors duration-150 font-light";
  const inputNormal = "border-gray-200 focus:border-primary";
  const inputError = "border-red-300 focus:border-red-400";

  return (
    <div className="bg-[#FAFAF8] text-gray-900 min-h-screen">
      {/* ── HERO ── */}
      <section className="px-8 pt-20 pb-16 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-7 h-px bg-primary opacity-50" />
            <p className="text-primary text-[12px] font-semibold tracking-[1.5px] uppercase">
              Get in touch
            </p>
            <span className="w-7 h-px bg-primary opacity-50" />
          </div>

          <h1 className="text-black text-[clamp(32px,6vw,52px)] leading-[1.1] max-w-2xl mx-auto mb-5">
            We&apos;d love to{" "}
            <em
              className="text-primary not-italic"
              style={{ fontStyle: "italic" }}
            >
              hear from you
            </em>
          </h1>

          <p className="text-gray text-[15px] max-w-md mx-auto mb-10 leading-relaxed font-light">
            Whether you have a question, a bug report, or a big idea — our team
            is here and ready to help.
          </p>
        </div>
      </section>

      {/* ── CHANNEL CARDS ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CHANNELS.map((ch) => (
            <ChannelCard key={ch.label} channel={ch} />
          ))}
        </div>
      </section>

      {/* ── FORM SECTION (FULL WIDTH) ── */}
      <section className="bg-[#F5F2ED] w-full py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[11.5px] font-semibold tracking-[2px] uppercase text-primary mb-3">
            Send a message
          </p>

          <h2 className="text-gray-900 text-[28px] leading-snug mb-8">
            Tell us what&apos;s on your mind
          </h2>

          {/* FORM CARD */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm">
            {submitStatus === "success" ? (
              <div className="text-center">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  ✓
                </div>
                <h3 className="text-[20px] font-medium text-gray-900 mb-2">
                  Message sent!
                </h3>
                <p className="text-[14px] text-gray-500 font-light mb-6">
                  Thanks for reaching out. We&apos;ll reply within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitStatus("idle")}
                  className="bg-gray-900 text-white px-6 py-2.5 rounded-lg hover:bg-gray-800"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col gap-5"
              >
                {/* Row: Name + Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[12.5px] font-medium text-gray-600 mb-1.5">
                      Full name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Sarah Nguyen"
                      className={`${inputBase} ${errors.name ? inputError : inputNormal}`}
                    />
                    {errors.name && (
                      <p className="text-[11.5px] text-red-500 mt-1">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-[12.5px] font-medium text-gray-600 mb-1.5">
                      Email address <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="sarah@example.com"
                      className={`${inputBase} ${errors.email ? inputError : inputNormal}`}
                    />
                    {errors.email && (
                      <p className="text-[11.5px] text-red-500 mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Row: Category + Subject */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[12.5px] font-medium text-gray-600 mb-1.5">
                      Category <span className="text-primary">*</span>
                    </label>
                    <select
                      name="category"
                      value={form.category}
                      onChange={handleChange}
                      className={`${inputBase} ${errors.category ? inputError : inputNormal} cursor-pointer`}
                    >
                      <option value="">Select a category…</option>
                      {CATEGORIES.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                    {errors.category && (
                      <p className="text-[11.5px] text-red-500 mt-1">
                        {errors.category}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-[12.5px] font-medium text-gray-600 mb-1.5">
                      Subject{" "}
                      <span className="text-gray-300 text-[11px] font-light">
                        (optional)
                      </span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Brief summary of your query"
                      className={`${inputBase} ${inputNormal}`}
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[12.5px] font-medium text-gray-600 mb-1.5">
                    Message <span className="text-primary">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Describe your question or issue in as much detail as you can…"
                    className={`${inputBase} ${errors.message ? inputError : inputNormal} resize-none!`}
                  />
                  <div className="flex justify-between mt-1">
                    {errors.message ? (
                      <p className="text-[11.5px] text-red-500">
                        {errors.message}
                      </p>
                    ) : (
                      <span />
                    )}
                    <p className="text-[11.5px] text-gray-300">
                      {form.message.length} / 1000
                    </p>
                  </div>
                </div>

                {/* Privacy note */}
                <p className="text-[12px] text-gray-400 font-light leading-relaxed">
                  By submitting this form, you agree to our{" "}
                  <a
                    href="#"
                    className="text-primary hover:underline"
                    style={{ textDecoration: "none" }}
                  >
                    Privacy Policy
                  </a>
                  . We never sell your data, ever.
                </p>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitStatus === "loading"}
                  className="self-start w-fit flex items-center gap-2 bg-primary text-white text-[14px] font-medium px-8 py-2 rounded-xl hover:bg-blue-900 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 border-none cursor-pointer"
                >
                  {submitStatus === "loading" ? (
                    <>
                      <span
                        className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        style={{ animation: "spin 0.8s linear infinite" }}
                      />
                      Sending…
                    </>
                  ) : (
                    "Send message →"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── SIDEBAR SECTION ── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <aside className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Response time card */}
            <div className="bg-gray-900 rounded-2xl p-6 text-white">
              <p className="text-[11px] font-semibold tracking-[1.5px] uppercase text-primary mb-4">
                Response times
              </p>
              <div className="flex flex-col gap-3">
                {[
                  { channel: "Live chat", time: "~2 min", dot: "bg-primary" },
                  { channel: "Email", time: "~24 hrs", dot: "bg-amber-400" },
                  { channel: "Phone", time: "Immediate", dot: "bg-primary" },
                  {
                    channel: "Enterprise",
                    time: "~4 hrs",
                    dot: "bg-primary",
                  },
                ].map((r) => (
                  <div
                    key={r.channel}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${r.dot}`} />
                      <span className="text-[13px] text-white/60 font-light">
                        {r.channel}
                      </span>
                    </div>
                    <span className="text-[13px] font-medium text-white">
                      {r.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Office hours */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <p className="text-[11px] font-semibold tracking-[1.5px] uppercase text-primary mb-4">
                Office hours
              </p>
              <div className="flex flex-col gap-2">
                {[
                  { day: "Monday – Friday", hours: "9 am – 6 pm PST" },
                  { day: "Saturday", hours: "10 am – 2 pm PST" },
                  { day: "Sunday", hours: "Closed" },
                ].map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between items-center py-1.5 border-b border-gray-50 last:border-b-0"
                  >
                    <span className="text-[13px] text-gray-500 font-light">
                      {h.day}
                    </span>
                    <span
                      className={`text-[13px] font-medium ${
                        h.hours === "Closed" ? "text-gray-300" : "text-gray-900"
                      }`}
                    >
                      {h.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Maps */}
            <div
              className="rounded-2xl overflow-hidden border border-white/10 relative"
              style={{ height: "220px" }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, #1a2e42 0%, #0d1b2a 50%, #162a1e 100%)",
                }}
              />
              {/* Decorative grid */}
              <svg
                className="absolute inset-0 w-full h-full opacity-10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="map-grid"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 40 0 L 0 0 0 40"
                      fill="none"
                      stroke="#60A5FA"
                      strokeWidth="0.5"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#map-grid)" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <div
                  className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white text-xl"
                  style={{ boxShadow: "0 0 0 8px rgba(59,130,246,0.12)" }}
                >
                  📍
                </div>
                <p className="text-white text-[13px] font-medium">
                  548 Market St
                </p>
                <p className="text-white/40 text-[12px]">San Francisco, CA</p>
              </div>
            </div>

            {/* Help centre CTA */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 flex gap-3 items-start">
              <span className="text-2xl mt-0.5">📖</span>
              <div>
                <p className="text-[13.5px] font-semibold text-primary mb-1">
                  Check our Help Centre
                </p>
                <p className="text-[12.5px] text-primary font-light leading-relaxed mb-3">
                  Hundreds of step-by-step guides for the most common questions.
                </p>
                <a
                  href="#"
                  className="text-[12.5px] font-semibold text-primary hover:text-blue-900"
                  style={{ textDecoration: "none" }}
                >
                  Browse articles →
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 px-6 lg:px-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-[260px_1fr] gap-12 items-start">
            <div>
              <p className="text-[11.5px] font-semibold tracking-[2px] uppercase text-primary mb-3">
                FAQ
              </p>
              <h2 className="text-gray-900 text-[28px] leading-snug mb-4">
                Common questions, answered
              </h2>
              <p className="text-[14px] text-gray-400 font-light leading-relaxed mb-6">
                Can&apos;t find what you&apos;re looking for? Use the form above
                or reach out via live chat.
              </p>
              <a
                href="#"
                className="inline-block text-[13px] font-semibold text-primary bg-blue-100 px-4 py-2 rounded-lg hover:bg-primary transition-colors mb-3"
                style={{ textDecoration: "none" }}
              >
                Visit Help Centre →
              </a>
            </div>

            <div className="flex flex-col gap-3">
              {FAQS.map((faq, i) => (
                <FaqItem key={faq.question} faq={faq} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
