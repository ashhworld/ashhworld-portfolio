import './ExperienceSection.css';

export default function ExperienceSection({ theme, experiences }) {
  return (
    <section id="experience" className="experience-section" style={{ background: theme.bgAlt === '#FFFFFF' ? 'rgba(46,125,50,0.03)' : 'rgba(255,255,255,0.012)' }}>
      <div className="experience-wrap">
        <div className="experience-header">
          <div className="section-label" style={{ color: theme.accent }}>02</div>
          <h2 style={{ color: theme.primary }}>Career Highlights</h2>
          <p style={{ color: theme.text }}>A creative portfolio-style timeline showing the most impactful career achievements and modern delivery highlights.</p>
        </div>
        <div className="experience-grid">
          {experiences.map((exp) => (
            <article key={exp.company} className="experience-card" style={{ borderColor: exp.color, background: theme.bgAlt }}>
              <div className="experience-badge" style={{ background: exp.color }} aria-hidden="true" />
              <div className="experience-top">
                <div className="experience-company" style={{ color: theme.primary }}>{exp.company}</div>
                <div className="experience-period" style={{ color: theme.muted }}>{exp.period}</div>
              </div>
              <div className="experience-role" style={{ color: exp.color }}>{exp.role}</div>
              <div className="experience-location" style={{ color: theme.muted }}>{exp.location}</div>
              <ul>
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx} style={{ color: theme.text }}><span>›</span>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
