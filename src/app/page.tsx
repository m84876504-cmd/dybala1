"use client";

import { useEffect, useState } from "react";

/* ================= EDIT YOUR DETAILS HERE ================= */
const ME = {
  name: "Abdul Mateen Khan",
  short: "Mateen",
  tagline: "IT • AI • 3D Modeling • Affiliate Marketing",
  about:
    "BS IT student at University of Sargodha, learning web development and AI. I build modern websites, explore AI tools, create 3D models, and grow income online through TikTok & Instagram affiliate marketing.",
  email: "your@email.com", // <- apni email yahan likhein
  linkedin: "https://linkedin.com/in/your-link", // <- apna LinkedIn link
  github: "https://github.com/your-link", // <- apna GitHub link
  location: "Sargodha, Pakistan",
};

type PageId = "home" | "about" | "services" | "projects" | "affiliate" | "contact";

const PAGES: { id: PageId; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "affiliate", label: "Affiliate" },
  { id: "contact", label: "Contact" },
];

const SKILLS = [
  { name: "HTML & CSS", level: 85, emoji: "🌐" },
  { name: "Next.js / React", level: 70, emoji: "⚛️" },
  { name: "Tailwind CSS", level: 75, emoji: "🎨" },
  { name: "AI Tools & Prompting", level: 80, emoji: "🤖" },
  { name: "3D Modeling", level: 65, emoji: "🧊" },
  { name: "MS Excel", level: 85, emoji: "📊" },
  { name: "Canva Design", level: 90, emoji: "🖌️" },
  { name: "Communication", level: 90, emoji: "💬" },
];

const BADGES = [
  "MS Excel", "Communication", "HTML", "CSS", "Next.js", "TypeScript", "Tailwind",
  "Canva", "ChatGPT", "Claude", "Prompt Engineering", "Blender", "3D Modeling",
  "TikTok Affiliate", "Instagram Affiliate", "Content Creation", "Video Editing",
];

const SERVICES = [
  { emoji: "💻", title: "IT & Web Development", text: "Responsive, fast websites and landing pages with Next.js, TypeScript and Tailwind CSS.", tags: ["Next.js", "Tailwind", "SEO"] },
  { emoji: "🤖", title: "AI Solutions", text: "AI-powered workflows, smart prompts, chatbots and automation to save time and money.", tags: ["Prompting", "Automation", "Chatbots"] },
  { emoji: "🧊", title: "3D Modeling", text: "Clean 3D models, product renders and simple animations for brands and creators.", tags: ["Blender", "Product Render", "Low-poly"] },
  { emoji: "🎵", title: "TikTok Affiliate", text: "Product research, short-video content and link strategy to turn views into commissions.", tags: ["Reels Hooks", "Niche Research", "Commission"] },
  { emoji: "📸", title: "Instagram Affiliate", text: "Reels, stories and bio-link funnels that promote the right products to the right audience.", tags: ["Reels", "Stories", "Link in Bio"] },
  { emoji: "🖌️", title: "Graphic Design", text: "Posters, thumbnails, logos and social media creatives designed in Canva.", tags: ["Canva", "Branding", "Thumbnails"] },
];

const PROJECTS = [
  { title: "arwa1", cat: "Web", emoji: "🚀", grad: "from-blue-500 to-cyan-400", text: "My first real web project, built with Next.js, TypeScript and Tailwind CSS.", tech: ["Next.js", "TypeScript", "Tailwind"] },
  { title: "AI Prompt Helper", cat: "AI", emoji: "🧠", grad: "from-violet-500 to-blue-500", text: "A concept tool that helps beginners write better prompts for AI assistants.", tech: ["AI", "Prompting", "UI"] },
  { title: "3D Product Showcase", cat: "3D", emoji: "🧊", grad: "from-sky-400 to-indigo-500", text: "A set of 3D product models and turntable renders for small online brands.", tech: ["Blender", "Rendering", "Design"] },
  { title: "TikTok Affiliate Channel", cat: "Affiliate", emoji: "🎵", grad: "from-pink-500 to-blue-500", text: "Short videos reviewing useful products with trackable affiliate links.", tech: ["TikTok", "Content", "Analytics"] },
  { title: "Instagram Reels Funnel", cat: "Affiliate", emoji: "📸", grad: "from-orange-400 to-pink-500", text: "Reels + link-in-bio funnel that sends followers to curated product pages.", tech: ["Instagram", "Reels", "Funnel"] },
  { title: "Excel Business Tracker", cat: "IT", emoji: "📊", grad: "from-emerald-400 to-blue-500", text: "Smart Excel sheets with formulas and charts for sales and expense tracking.", tech: ["MS Excel", "Formulas", "Charts"] },
];

const FILTERS = ["All", "Web", "AI", "3D", "Affiliate", "IT"];

const TIMELINE = [
  { year: "Now", title: "BS Information Technology", place: "University of Sargodha", text: "Studying IT while building real projects in web, AI and 3D." },
  { year: "2025–26", title: "Affiliate Marketing Journey", place: "TikTok & Instagram", text: "Learning content, product research and audience building." },
  { year: "2025", title: "Started Web Development", place: "Self-learning", text: "HTML, CSS, Next.js, TypeScript and Tailwind CSS." },
];

const STEPS = [
  { n: "01", title: "Niche & Product Research", text: "Find trending products with real demand and good commission." },
  { n: "02", title: "Create Short Content", text: "Hook-first videos and reels that show real value in seconds." },
  { n: "03", title: "Smart Link Strategy", text: "Bio links, pinned comments and tracked links for every post." },
  { n: "04", title: "Analyze & Scale", text: "Study views, clicks and sales, then double down on winners." },
];

const FAQ = [
  { q: "Do you work with clients?", a: "Yes. I take small web, design, AI and affiliate content projects." },
  { q: "Which tools do you use?", a: "Next.js, Tailwind, Canva, Blender, MS Excel and modern AI assistants." },
  { q: "How fast do you reply?", a: "Usually within 24 hours. Send a message from the Contact page." },
];

/* ================= SMALL COMPONENTS ================= */
function Typing({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  const [txt, setTxt] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[i % words.length];
    const t = setTimeout(
      () => {
        if (!del) {
          setTxt(w.slice(0, txt.length + 1));
          if (txt.length + 1 === w.length) setTimeout(() => setDel(true), 900);
        } else {
          setTxt(w.slice(0, txt.length - 1));
          if (txt.length - 1 === 0) {
            setDel(false);
            setI((p) => p + 1);
          }
        }
      },
      del ? 40 : 90
    );
    return () => clearTimeout(t);
  }, [txt, del, i, words]);
  return (
    <span className="text-blue-400">
      {txt}
      <span className="ml-0.5 animate-pulse">|</span>
    </span>
  );
}

function Cube() {
  const face =
    "absolute flex h-32 w-32 items-center justify-center rounded-xl border border-blue-400/60 bg-blue-500/20 text-3xl backdrop-blur-sm sm:h-40 sm:w-40 sm:text-4xl";
  return (
    <div className="flex h-56 w-full items-center justify-center sm:h-72" style={{ perspective: "700px" }}>
      <div className="relative h-32 w-32 sm:h-40 sm:w-40 cube-spin" style={{ transformStyle: "preserve-3d" }}>
        <div className={face} style={{ transform: "translateZ(64px)" }}>💻</div>
        <div className={face} style={{ transform: "rotateY(180deg) translateZ(64px)" }}>🤖</div>
        <div className={face} style={{ transform: "rotateY(90deg) translateZ(64px)" }}>🧊</div>
        <div className={face} style={{ transform: "rotateY(-90deg) translateZ(64px)" }}>🎵</div>
        <div className={face} style={{ transform: "rotateX(90deg) translateZ(64px)" }}>📸</div>
        <div className={face} style={{ transform: "rotateX(-90deg) translateZ(64px)" }}>📊</div>
      </div>
    </div>
  );
}

function Heading({ small, title }: { small: string; title: string }) {
  return (
    <div className="mb-10 text-center">
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">{small}</p>
      <h2 className="text-4xl font-extrabold text-white sm:text-5xl">{title}</h2>
      <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
    </div>
  );
}

const card =
  "rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-2 hover:border-blue-400/60 hover:shadow-blue-500/20";

/* ================= PAGE ================= */
export default function Page() {
  const [page, setPage] = useState<PageId>("home");
  const [menu, setMenu] = useState(false);
  const [filter, setFilter] = useState("All");
  const [faq, setFaq] = useState<number | null>(0);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const go = (p: PageId) => {
    setPage(p);
    setMenu(false);
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:${ME.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const shown = PROJECTS.filter((p) => filter === "All" || p.cat === filter);

  return (
    <div className="min-h-screen bg-[#050d24] text-slate-200 antialiased">
      <style>{`
        @keyframes spin3d { from { transform: rotateX(-20deg) rotateY(0deg);} to { transform: rotateX(-20deg) rotateY(360deg);} }
        .cube-spin { animation: spin3d 14s linear infinite; }
        @keyframes floaty { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
        .floaty { animation: floaty 5s ease-in-out infinite; }
        @keyframes fadeUp { from{opacity:0; transform:translateY(24px)} to{opacity:1; transform:translateY(0)} }
        .fade-up { animation: fadeUp .6s ease both; }
        html { scroll-behavior: smooth; }
      `}</style>

      {/* background glows */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl" />
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050d24]/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <button onClick={() => go("home")} className="text-xl font-extrabold text-white">
            {ME.short}<span className="text-blue-400">.dev</span>
          </button>
          <ul className="hidden items-center gap-1 md:flex">
            {PAGES.map((p) => (
              <li key={p.id}>
                <button
                  onClick={() => go(p.id)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    page === p.id ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30" : "text-slate-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {p.label}
                </button>
              </li>
            ))}
          </ul>
          <button onClick={() => setMenu(!menu)} className="rounded-lg border border-white/20 px-3 py-2 text-white md:hidden" aria-label="Menu">
            {menu ? "✕" : "☰"}
          </button>
        </nav>
        {menu && (
          <div className="border-t border-white/10 bg-[#050d24] px-5 pb-4 md:hidden">
            {PAGES.map((p) => (
              <button
                key={p.id}
                onClick={() => go(p.id)}
                className={`block w-full rounded-lg px-4 py-3 text-left font-medium ${page === p.id ? "bg-blue-500 text-white" : "text-slate-300"}`}
              >
                {p.label}
              </button>
            ))}
          </div>
        )}
      </header>

      <main key={page} className="relative z-10 fade-up">
        {/* ================= HOME ================= */}
        {page === "home" && (
          <>
            <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:py-24 md:grid-cols-2">
              <div>
                <span className="inline-block rounded-full border border-blue-400/40 bg-blue-500/10 px-4 py-1 text-sm text-blue-300">
                  👋 Welcome to my portfolio
                </span>
                <h1 className="mt-5 text-5xl font-extrabold leading-tight text-white sm:text-6xl">
                  Hi, I&apos;m <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">{ME.name}</span>
                </h1>
                <p className="mt-4 text-2xl font-bold sm:text-3xl">
                  <Typing words={["IT Student 🎓", "Web Developer 💻", "AI Explorer 🤖", "3D Artist 🧊", "Affiliate Marketer 🎵"]} />
                </p>
                <p className="mt-5 max-w-xl text-lg text-slate-400">{ME.tagline}. {ME.about}</p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <button onClick={() => go("projects")} className="rounded-full bg-blue-500 px-8 py-3 font-semibold text-white shadow-lg shadow-blue-500/40 transition hover:-translate-y-1 hover:bg-blue-400">
                    View My Work 🚀
                  </button>
                  <button onClick={() => go("contact")} className="rounded-full border border-blue-400/60 px-8 py-3 font-semibold text-blue-300 transition hover:-translate-y-1 hover:bg-blue-500/10">
                    Hire Me ✉️
                  </button>
                </div>
              </div>
              <div className="floaty">
                <Cube />
                <p className="text-center text-sm text-slate-500">Pure CSS 3D cube — IT • AI • 3D • Affiliate • Excel</p>
              </div>
            </section>

            {/* stats */}
            <section className="mx-auto max-w-6xl px-5 pb-16">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {[
                  { n: "5+", l: "Core Skills Areas", e: "🎯" },
                  { n: "6", l: "Projects & Concepts", e: "📁" },
                  { n: "2", l: "Affiliate Platforms", e: "📱" },
                  { n: "100%", l: "Passion to Learn", e: "🔥" },
                ].map((s) => (
                  <div key={s.l} className={`${card} text-center`}>
                    <div className="text-3xl">{s.e}</div>
                    <div className="mt-2 text-4xl font-extrabold text-blue-400">{s.n}</div>
                    <div className="mt-1 text-sm text-slate-400">{s.l}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* quick services */}
            <section className="mx-auto max-w-6xl px-5 pb-20">
              <Heading small="What I Do" title="My Focus Areas" />
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {SERVICES.slice(0, 3).map((s) => (
                  <div key={s.title} className={card}>
                    <div className="text-4xl">{s.emoji}</div>
                    <h3 className="mt-4 text-xl font-bold text-white">{s.title}</h3>
                    <p className="mt-2 text-slate-400">{s.text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <button onClick={() => go("services")} className="rounded-full border border-blue-400/60 px-6 py-2 text-blue-300 transition hover:bg-blue-500/10">
                  See all services →
                </button>
              </div>
            </section>
          </>
        )}

        {/* ================= ABOUT ================= */}
        {page === "about" && (
          <section className="mx-auto max-w-6xl px-5 py-16">
            <Heading small="Know Me" title="About Me" />
            <div className="grid items-start gap-8 md:grid-cols-3">
              <div className={`${card} text-center md:col-span-1`}>
                <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-7xl shadow-xl shadow-blue-500/30">
                  👨‍💻
                </div>
                <h3 className="mt-5 text-2xl font-bold text-white">{ME.name}</h3>
                <p className="text-blue-400">BS IT Student</p>
                <p className="mt-2 text-sm text-slate-400">📍 {ME.location}</p>
                <div className="mt-5 flex justify-center gap-3">
                  <a href={ME.github} target="_blank" rel="noreferrer" className="rounded-full bg-white/10 px-4 py-2 text-sm transition hover:bg-blue-500">GitHub</a>
                  <a href={ME.linkedin} target="_blank" rel="noreferrer" className="rounded-full bg-white/10 px-4 py-2 text-sm transition hover:bg-blue-500">LinkedIn</a>
                </div>
              </div>
              <div className="space-y-6 md:col-span-2">
                <div className={card}>
                  <h3 className="text-2xl font-bold text-white">Who am I? 🤔</h3>
                  <p className="mt-3 text-slate-400">{ME.about}</p>
                  <p className="mt-3 text-slate-400">
                    I love mixing technology with creativity — from coding clean interfaces and experimenting with AI, to making 3D models and creating short-form content that earns through affiliate marketing.
                  </p>
                </div>
                <div className={card}>
                  <h3 className="mb-5 text-2xl font-bold text-white">My Journey 🛣️</h3>
                  <div className="space-y-6 border-l-2 border-blue-500/40 pl-6">
                    {TIMELINE.map((t) => (
                      <div key={t.title} className="relative">
                        <span className="absolute -left-[33px] top-1 h-4 w-4 rounded-full border-4 border-[#050d24] bg-blue-500" />
                        <span className="text-sm font-semibold text-blue-400">{t.year}</span>
                        <h4 className="text-lg font-bold text-white">{t.title}</h4>
                        <p className="text-sm text-slate-500">{t.place}</p>
                        <p className="mt-1 text-slate-400">{t.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* skills */}
            <div className="mt-16">
              <Heading small="Expertise" title="My Skills" />
              <div className="grid gap-5 md:grid-cols-2">
                {SKILLS.map((s) => (
                  <div key={s.name} className={card}>
                    <div className="mb-2 flex justify-between font-semibold text-white">
                      <span>{s.emoji} {s.name}</span>
                      <span className="text-blue-400">{s.level}%</span>
                    </div>
                    <div className="h-3 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" style={{ width: `${s.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {BADGES.map((b) => (
                  <span key={b} className="rounded-full border border-blue-400/40 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-200 transition hover:-translate-y-1 hover:bg-blue-500 hover:text-white">
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ================= SERVICES ================= */}
        {page === "services" && (
          <section className="mx-auto max-w-6xl px-5 py-16">
            <Heading small="Services" title="What I Can Do For You" />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((s) => (
                <div key={s.title} className={card}>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 text-3xl shadow-lg shadow-blue-500/30">
                    {s.emoji}
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-white">{s.title}</h3>
                  <p className="mt-2 text-slate-400">{s.text}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span key={t} className="rounded-full bg-blue-500/15 px-3 py-1 text-xs text-blue-300">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16">
              <Heading small="3D World" title="3D Modeling Corner" />
              <div className={`${card} grid items-center gap-6 md:grid-cols-2`}>
                <Cube />
                <div>
                  <h3 className="text-2xl font-bold text-white">From idea to 3D 🧊</h3>
                  <p className="mt-3 text-slate-400">
                    I create low-poly objects, product mockups and simple scenes. 3D helps brands stand out — perfect for product ads, social content and creative portfolios.
                  </p>
                  <ul className="mt-4 space-y-2 text-slate-300">
                    <li>✅ Product & object modeling</li>
                    <li>✅ Materials, lighting & renders</li>
                    <li>✅ Turntable videos for social media</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <Heading small="FAQ" title="Common Questions" />
              <div className="mx-auto max-w-3xl space-y-3">
                {FAQ.map((f, i) => (
                  <div key={f.q} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                    <button onClick={() => setFaq(faq === i ? null : i)} className="flex w-full items-center justify-between px-6 py-4 text-left font-semibold text-white">
                      {f.q}
                      <span className="text-blue-400">{faq === i ? "−" : "+"}</span>
                    </button>
                    {faq === i && <p className="px-6 pb-5 text-slate-400">{f.a}</p>}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ================= PROJECTS ================= */}
        {page === "projects" && (
          <section className="mx-auto max-w-6xl px-5 py-16">
            <Heading small="Portfolio" title="My Projects" />
            <div className="mb-10 flex flex-wrap justify-center gap-3">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                    filter === f ? "bg-blue-500 text-white shadow-lg shadow-blue-500/40" : "border border-white/15 text-slate-300 hover:bg-white/10"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {shown.map((p) => (
                <article key={p.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-2 hover:border-blue-400/60 hover:shadow-blue-500/20">
                  <div className={`flex h-44 items-center justify-center bg-gradient-to-br ${p.grad} text-6xl transition duration-500 group-hover:scale-105`}>
                    {p.emoji}
                  </div>
                  <div className="p-6">
                    <span className="rounded-full bg-blue-500/15 px-3 py-1 text-xs font-semibold text-blue-300">{p.cat}</span>
                    <h3 className="mt-3 text-xl font-bold text-white">{p.title}</h3>
                    <p className="mt-2 text-slate-400">{p.text}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span key={t} className="rounded-md bg-white/10 px-2 py-1 text-xs text-slate-300">{t}</span>
                      ))}
                    </div>
                    <button onClick={() => go("contact")} className="mt-5 font-semibold text-blue-400 transition hover:text-cyan-300">
                      Discuss this project →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* ================= AFFILIATE ================= */}
        {page === "affiliate" && (
          <section className="mx-auto max-w-6xl px-5 py-16">
            <Heading small="Affiliate Marketing" title="TikTok & Instagram Affiliate" />
            <div className="grid gap-6 md:grid-cols-2">
              <div className={`${card} bg-gradient-to-br from-pink-500/10 to-blue-500/10`}>
                <div className="text-5xl">🎵</div>
                <h3 className="mt-3 text-2xl font-bold text-white">TikTok Affiliate</h3>
                <p className="mt-2 text-slate-400">Short videos that show products in action. I focus on trending niches, strong hooks and honest reviews that earn trust and commissions.</p>
                <ul className="mt-4 space-y-2 text-slate-300">
                  <li>🔥 Viral hook & script ideas</li>
                  <li>🛒 Product & niche research</li>
                  <li>📈 Tracking views, clicks & sales</li>
                </ul>
              </div>
              <div className={`${card} bg-gradient-to-br from-orange-400/10 to-pink-500/10`}>
                <div className="text-5xl">📸</div>
                <h3 className="mt-3 text-2xl font-bold text-white">Instagram Affiliate</h3>
                <p className="mt-2 text-slate-400">Reels, stories and link-in-bio funnels that guide followers from content to checkout in a clean, simple way.</p>
                <ul className="mt-4 space-y-2 text-slate-300">
                  <li>🎬 Reels & story content plans</li>
                  <li>🔗 Link-in-bio funnel setup</li>
                  <li>🤝 Collaboration & growth tips</li>
                </ul>
              </div>
            </div>

            <div className="mt-16">
              <Heading small="Process" title="How I Work" />
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {STEPS.map((s) => (
                  <div key={s.n} className={card}>
                    <div className="text-4xl font-extrabold text-blue-500/60">{s.n}</div>
                    <h4 className="mt-2 text-lg font-bold text-white">{s.title}</h4>
                    <p className="mt-2 text-sm text-slate-400">{s.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={`${card} mt-12 text-center`}>
              <h3 className="text-2xl font-bold text-white">Want to grow with affiliate marketing? 💸</h3>
              <p className="mx-auto mt-2 max-w-xl text-slate-400">Let&apos;s talk about content ideas, product picks or collaboration.</p>
              <button onClick={() => go("contact")} className="mt-5 rounded-full bg-blue-500 px-8 py-3 font-semibold text-white shadow-lg shadow-blue-500/40 transition hover:-translate-y-1 hover:bg-blue-400">
                Let&apos;s Talk
              </button>
            </div>
          </section>
        )}

        {/* ================= CONTACT ================= */}
        {page === "contact" && (
          <section className="mx-auto max-w-6xl px-5 py-16">
            <Heading small="Get In Touch" title="Contact Me" />
            <div className="grid gap-8 md:grid-cols-5">
              <div className="space-y-4 md:col-span-2">
                {[
                  { e: "✉️", t: "Email", v: ME.email, h: `mailto:${ME.email}` },
                  { e: "💼", t: "LinkedIn", v: "View profile", h: ME.linkedin },
                  { e: "🐙", t: "GitHub", v: "View repositories", h: ME.github },
                  { e: "📍", t: "Location", v: ME.location, h: "#" },
                ].map((c) => (
                  <a key={c.t} href={c.h} target={c.h.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className={`${card} flex items-center gap-4`}>
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20 text-2xl">{c.e}</span>
                    <span>
                      <span className="block font-bold text-white">{c.t}</span>
                      <span className="text-sm text-slate-400">{c.v}</span>
                    </span>
                  </a>
                ))}
              </div>

              <form onSubmit={submit} className={`${card} space-y-4 hover:translate-y-0 md:col-span-3`}>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/10 bg-[#0a1736] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30"
                />
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="Your email"
                  className="w-full rounded-xl border border-white/10 bg-[#0a1736] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30"
                />
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Your message..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-[#0a1736] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30"
                />
                <button type="submit" className="w-full rounded-xl bg-blue-500 py-3 font-semibold text-white shadow-lg shadow-blue-500/40 transition hover:-translate-y-1 hover:bg-blue-400">
                  Send Message 🚀
                </button>
                {sent && <p className="text-center text-sm text-emerald-400">✅ Opening your email app to send the message...</p>}
              </form>
            </div>
          </section>
        )}
      </main>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/10 bg-[#030a1c]">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 md:grid-cols-3">
          <div>
            <h4 className="text-xl font-extrabold text-white">{ME.short}<span className="text-blue-400">.dev</span></h4>
            <p className="mt-2 text-sm text-slate-400">{ME.tagline}</p>
          </div>
          <div>
            <h5 className="mb-3 font-bold text-white">Quick Links</h5>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {PAGES.map((p) => (
                <button key={p.id} onClick={() => go(p.id)} className="text-slate-400 transition hover:text-blue-400">{p.label}</button>
              ))}
            </div>
          </div>
          <div>
            <h5 className="mb-3 font-bold text-white">Connect</h5>
            <div className="flex gap-3 text-sm">
              <a href={ME.github} target="_blank" rel="noreferrer" className="rounded-full bg-white/10 px-4 py-2 transition hover:bg-blue-500">GitHub</a>
              <a href={ME.linkedin} target="_blank" rel="noreferrer" className="rounded-full bg-white/10 px-4 py-2 transition hover:bg-blue-500">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 py-4 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} {ME.name}. Built with Next.js & Tailwind CSS 💙
        </div>
      </footer>
    </div>
  );
}