import { useState, useEffect } from "react";
import AboutSection from "./sections/AboutSection";
import ServicesSection from "./sections/ServicesSection";
import ExperienceSection from "./sections/ExperienceSection";
import SkillsSection from "./sections/SkillsSection";
import PortfolioSection from "./sections/PortfolioSection";
import ContactSection from "./sections/ContactSection";
import FooterSection from "./sections/FooterSection";

// Dark Theme (Original)
const DARK_THEME = {
  bg: "#0A1628",
  bgAlt: "#0F2040",
  primary: "#F5F0E8",
  secondary: "#8A9BB5",
  accent: "#D4A843",
  accentLight: "#E8C068",
  accentDim: "rgba(212,168,67,0.15)",
  accentCard: "rgba(212,168,67,0.12)",
  accentBorder: "rgba(212,168,67,0.18)",
  muted: "#6A7D95",
  card: "rgba(255,255,255,0.04)",
  cardBorder: "rgba(255,255,255,0.05)",
  text: "#7A8FA5",
  textMuted: "#5A6A80",
  highlight: "#1E5FAD",
  gradientTop: "rgba(30,95,173,0.12)",
};

// Light Theme (Professional + Creative)
const LIGHT_THEME = {
  bg: "#F8F6F1",
  bgAlt: "#FFFFFF",
  primary: "#1A1A1A",
  secondary: "#5A5A5A",
  accent: "#2E7D32",
  accentLight: "#4CAF50",
  accentDim: "rgba(46,125,50,0.08)",
  accentCard: "rgba(46,125,50,0.08)",
  accentBorder: "rgba(46,125,50,0.15)",
  muted: "#7A7A7A",
  card: "rgba(46,125,50,0.03)",
  cardBorder: "rgba(46,125,50,0.12)",
  text: "#555555",
  textMuted: "#888888",
  highlight: "#1565C0",
  gradientTop: "rgba(21,101,192,0.08)",
};

const NAV_LINKS = ["About", "Services", "Experience", "Skills", "Portfolio", "Contact"];

const SERVICES = [
  { icon: "⚛", title: "React Web Applications", desc: "Enterprise-grade SPAs & micro-frontends built with React, TypeScript, Redux. Performance-tuned, scalable, production-ready.", tags: ["React", "TypeScript", "Redux", "Micro-FE"], price: "Starting ₹25,000" },
  { icon: "🎨", title: "Digital Logo Design", desc: "Modern, memorable brand identities — wordmarks, icon marks, monograms — delivered in all formats (SVG, PNG, PDF).", tags: ["Branding", "SVG", "Identity", "Vector"], price: "Starting ₹3,500" },
  { icon: "📱", title: "Social Media Posts", desc: "Scroll-stopping visual content for LinkedIn, Instagram & Twitter. Product launches, announcements, carousels & more.", tags: ["LinkedIn", "Instagram", "Carousel", "Content"], price: "Starting ₹1,500/post" },
  { icon: "🚀", title: "Full-Stack Development", desc: "End-to-end web solutions with Node.js/Express backend, REST APIs, and seamless front-end integration.", tags: ["Node.js", "Express", "REST API", "MongoDB"], price: "Starting ₹45,000" },
  { icon: "⚡", title: "Performance Audits", desc: "Deep-dive Core Web Vitals audits and optimisation. 52% faster load times, C→A CWV improvements on record.", tags: ["CWV", "Lighthouse", "Profiling", "LCP"], price: "Starting ₹8,000" },
  { icon: "🧩", title: "Component Libraries", desc: "Reusable, documented design systems with Storybook. Reduced duplicate UI code by 40% for 5+ product teams at EY.", tags: ["Storybook", "Design System", "Tokens", "a11y"], price: "Starting ₹20,000" },
];

const EXPERIENCES = [
  { company: "EY (Ernst & Young)", role: "Senior Consultant – Full-Stack & Front-End", period: "July 2025 – Present", location: "Bengaluru, India", color: "#D4A843", bullets: ["Architected React/TypeScript component libraries for 5+ squads — 40% less duplicate code", "Product Owner for enterprise Software & License UI — 60% fewer runtime type errors", "Reduced Time-to-Interactive by 35% across distributed micro-frontends", "28% fewer defect escapes via Storybook + Sentry across 4 engineering teams"] },
  { company: "Virtusa Consulting Services", role: "Lead Front-End Developer", period: "Jan 2020 – July 2025", location: "Bengaluru, India", color: "#1E5FAD", bullets: ["Led 8-engineer team — 12 major releases, 45% velocity increase", "52% faster page loads, Core Web Vitals C→A via profiling & lazy-loading", "Migrated 120K LOC to TypeScript — 87% Cypress E2E coverage", "Cut onboarding from 6 to 3 weeks through mentoring & pair programming"] },
  { company: "Testoutlook Solutions", role: "Senior Web Developer", period: "Dec 2015 – Dec 2019", location: "Aurangabad, India", color: "#8A5AAD", bullets: ["Front-end platform for 30,000+ users at 99.5% uptime", "Modernized jQuery → ES6+ React, 45% less page weight", "14 product features delivered, bug backlog reduced 40%"] },
  { company: "Wenetis Enterprises", role: "Web Developer", period: "July 2014 – Oct 2015", location: "Aurangabad, India", color: "#2A8A5E", bullets: ["React/Redux components serving 500K+ monthly active users", "REST API integration from 6 microservices — 70% fewer API failures", "Jest coverage 34% → 82% + Storybook-driven development"] },
];

const SKILLS = [
  { name: "React JS", level: 97, cat: "Frontend" },
  { name: "TypeScript", level: 93, cat: "Frontend" },
  { name: "Redux", level: 92, cat: "Frontend" },
  { name: "JavaScript ES6+", level: 96, cat: "Frontend" },
  { name: "HTML5 / CSS3", level: 95, cat: "Frontend" },
  { name: "Node.js", level: 80, cat: "Backend" },
  { name: "Express.js", level: 78, cat: "Backend" },
  { name: "REST APIs", level: 90, cat: "Backend" },
  { name: "Jest", level: 88, cat: "Testing" },
  { name: "Cypress", level: 85, cat: "Testing" },
  { name: "Docker / K8s", level: 70, cat: "DevOps" },
  { name: "CI/CD", level: 75, cat: "DevOps" },
];

const STATS = [
  { num: "11+", label: "Years Experience" },
  { num: "7+", label: "Years React JS" },
  { num: "500K+", label: "Users Served" },
  { num: "120K", label: "LOC Migrated" },
];


export default function Portfolio() {
  const [activeNav, setActiveNav] = useState("About");
  const [contactForm, setContactForm] = useState({ name: "", email: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [skillFilter, setSkillFilter] = useState("All");
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  
  const theme = isDarkTheme ? DARK_THEME : LIGHT_THEME;

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY + 120;
      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_LINKS[i].toLowerCase());
        if (el && el.offsetTop <= scrollY) { setActiveNav(NAV_LINKS[i]); break; }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };
  const cats = ["All", ...Array.from(new Set(SKILLS.map(s => s.cat)))];
  const filteredSkills = skillFilter === "All" ? SKILLS : SKILLS.filter(s => s.cat === skillFilter);

  return (
    <div style={{ background: theme.bg, minHeight: "100vh", fontFamily: "'DM Sans', 'Segoe UI', sans-serif", color: theme.primary, overflowX: "hidden", transition: "background 0.3s, color 0.3s" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');
        @keyframes fadeUp { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        html { scroll-behavior: smooth; }
        * { box-sizing: border-box; }
        input, textarea, select { color-scheme: ${isDarkTheme ? 'dark' : 'light'}; }
        input::placeholder, textarea::placeholder { color: ${isDarkTheme ? '#4A5A70' : '#A0A0A0'}; }
        .nav-btn:hover { color: ${theme.accent} !important; }
        .service-card:hover { border-color: ${theme.accent} !important; transform: translateY(-5px) !important; }
        .btn-ghost:hover { background: ${theme.accentDim} !important; }
        @media (max-width: 768px) {
          body { font-size: 14px; }
          #root { padding: 0; }
        }
      `}</style>

      {/* Background grid */}
      <div style={{ position: "fixed", inset: 0, backgroundImage: `linear-gradient(${isDarkTheme ? 'rgba(212,168,67,0.025)' : 'rgba(46,125,50,0.02)'} 1px,transparent 1px),linear-gradient(90deg,${isDarkTheme ? 'rgba(212,168,67,0.025)' : 'rgba(46,125,50,0.02)'} 1px,transparent 1px)`, backgroundSize: "64px 64px", pointerEvents: "none", zIndex: 0 }} />
      {/* Ambient glow top-right */}
      <div style={{ position: "fixed", top: -200, right: -200, width: 600, height: 600, borderRadius: "50%", background: `radial-gradient(circle, ${theme.gradientTop} 0%, transparent 70%)`, pointerEvents: "none", zIndex: 0 }} />

      {/* ── NAV ── */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: isDarkTheme ? "rgba(10,22,40,0.94)" : "rgba(248,246,241,0.94)", backdropFilter: "blur(20px)", borderBottom: `1px solid ${theme.accentBorder}`, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 24px", height: 62, flexWrap: "wrap" }}>
        <div onClick={() => scrollTo("about")} style={{ fontFamily: "Georgia, serif", fontSize: "clamp(20px, 5vw, 24px)", fontWeight: 700, cursor: "pointer", color: theme.primary }}>
          AD<span style={{ color: theme.accent }}>.</span>
        </div>
        <div style={{ display: "flex", gap: "clamp(12px, 3vw, 28px)", alignItems: "center", flexWrap: "wrap" }}>
          {NAV_LINKS.map(n => (
            <button key={n} className="nav-btn" onClick={() => scrollTo(n)} style={{ background: "none", border: "none", borderBottom: activeNav === n ? `1px solid ${theme.accent}` : "1px solid transparent", cursor: "pointer", fontSize: "clamp(8px, 2vw, 11px)", fontWeight: 600, letterSpacing: 1.8, textTransform: "uppercase", color: activeNav === n ? theme.accent : theme.muted, padding: "4px 0", transition: "all 0.2s" }}>{n}</button>
          ))}
          <button onClick={() => setIsDarkTheme(!isDarkTheme)} style={{ background: theme.accentDim, border: `1px solid ${theme.accent}`, borderRadius: 2, padding: "6px 12px", fontSize: "clamp(8px, 2vw, 10px)", fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", color: theme.accent, cursor: "pointer", transition: "all 0.2s" }}>
            {isDarkTheme ? "☀ Light" : "🌙 Dark"}
          </button>
          <button onClick={() => scrollTo("contact")} style={{ background: theme.accent, border: "none", borderRadius: 2, padding: "9px 22px", fontSize: "clamp(8px, 2vw, 11px)", fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: isDarkTheme ? "#0A1628" : "#F8F6F1", cursor: "pointer" }}>Hire Me</button>
        </div>
      </nav>

      <AboutSection theme={theme} stats={STATS} scrollTo={scrollTo} isDarkTheme={isDarkTheme} />
      <ServicesSection theme={theme} services={SERVICES} />
      <ExperienceSection theme={theme} experiences={EXPERIENCES} />
      <SkillsSection theme={theme} skills={SKILLS} cats={cats} skillFilter={skillFilter} setSkillFilter={setSkillFilter} filteredSkills={filteredSkills} />
      <PortfolioSection theme={theme} isDarkTheme={isDarkTheme} />
      <ContactSection theme={theme} contactForm={contactForm} setContactForm={setContactForm} submitted={submitted} setSubmitted={setSubmitted} handleSubmit={handleSubmit} services={SERVICES} isDarkTheme={isDarkTheme} />
      <FooterSection theme={theme} />
    </div>
  );
}
