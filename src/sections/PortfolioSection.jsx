import './PortfolioSection.css';

export default function PortfolioSection({ theme, isDarkTheme }) {
  const projects = [
    { title: 'Enterprise Component Library — EY', tag: 'React · TypeScript · Storybook', result: '40% less duplicate code · 3 weeks faster per release · 5+ product squads', color: '#D4A843', bg: isDarkTheme ? '#1A150A' : '#FFF8E1' },
    { title: '120K LOC TypeScript Migration — Virtusa', tag: 'React · TypeScript · Cypress', result: '87% E2E coverage · 0 critical regressions · Production-stable', color: '#1E5FAD', bg: isDarkTheme ? '#0A1422' : '#E3F2FD' },
    { title: 'Core Web Vitals Optimisation — Virtusa', tag: 'Performance · Profiling · Lazy-load', result: '52% faster load · C → A CWV · 500K+ MAU platform', color: '#2ECC71', bg: isDarkTheme ? '#0A1A10' : '#E8F5E9' },
    { title: 'API Integration Platform — TechChefs', tag: 'REST APIs · Microservices · Redux', result: '6 microservices unified · 70% fewer API failures · Sub-100ms render', color: '#8A5AAD', bg: isDarkTheme ? '#130D1C' : '#F3E5F5' },
  ];

  return (
    <section id="portfolio" className="portfolio-section" style={{ background: isDarkTheme ? 'rgba(255,255,255,0.012)' : 'rgba(46,125,50,0.03)' }}>
      <div className="portfolio-wrap">
        <div className="section-heading">
          <div className="section-label" style={{ color: theme.accent }}>04</div>
          <h2 style={{ color: theme.primary }}>Project Highlights</h2>
        </div>
        <div className="portfolio-grid">
          {projects.map(project => (
            <article key={project.title} className="project-card" style={{ background: project.bg, borderColor: `${project.color}33` }}>
              <div className="project-tag" style={{ color: project.color }}>{project.tag}</div>
              <h3 style={{ color: theme.primary }}>{project.title}</h3>
              <p style={{ color: theme.text }}>{project.result}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
