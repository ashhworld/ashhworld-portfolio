import './AboutSection.css';

export default function AboutSection({ theme, scrollTo, stats, isDarkTheme }) {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="about-copy">
          <div className="availability-pill">
            <span />
            <span>Available for Work · Pune, India</span>
          </div>
          <h1 style={{ color: theme.primary }}>
            Ashlesh<br />
            <strong style={{ color: isDarkTheme ? theme.primary : "#17311D" }}>Dhanvalkar</strong>
          </h1>
          <div className="hero-tagline">Senior React JS Engineer · Full-Stack Dev · Digital Creative</div>
          <p>
            I build enterprise-scale web applications, component libraries, and digital brand assets. 11+ years crafting high-performance React experiences — from EY to 500K-user platforms.
          </p>
          <div className="hero-actions">
            <button onClick={() => scrollTo('contact')} style={{ background: theme.accent, color: isDarkTheme ? '#0A1628' : '#F8F6F1' }}>Get In Touch</button>
            <button className="btn-ghost" onClick={() => scrollTo('services')} style={{ borderColor: theme.accent, color: theme.primary }}>View Services</button>
          </div>
        </div>

        <div className="about-panel" style={{ background: theme.bgAlt, borderColor: theme.accentBorder }}>
          <div className="panel-label" style={{ color: theme.accent }}>By The Numbers</div>
          <div className="panel-stats">
            {stats.map(s => (
              <div key={s.label} className="panel-stat">
                <div style={{ color: theme.primary }}>{s.num}</div>
                <div style={{ color: theme.muted }}>{s.label}</div>
              </div>
            ))}
          </div>
          <div className="panel-meta">
            <div className="panel-meta-title">Currently at</div>
            <div className="panel-meta-company" style={{ color: theme.primary }}>EY (Ernst & Young)</div>
            <div className="panel-meta-role" style={{ color: theme.accent }}>Senior Consultant — Front-End Eng</div>
          </div>
          <div className="panel-contact" style={{ color: theme.muted }}>
            📍 Pune, Maharashtra, India<br />
            ✉ dhanvalkarashu20@gmail.com
          </div>
        </div>
      </div>
    </section>
  );
}
