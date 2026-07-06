import './SkillsSection.css';

export default function SkillsSection({ theme, skills, cats, skillFilter, setSkillFilter, filteredSkills }) {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-wrap">
        <div className="section-heading">
          <div className="section-label" style={{ color: theme.accent }}>03</div>
          <h2 style={{ color: theme.primary }}>Technical Skills</h2>
        </div>
        <div className="skill-tabs">
          {cats.map(cat => (
            <button
              key={cat}
              onClick={() => setSkillFilter(cat)}
              className={cat === skillFilter ? 'skill-tab active' : 'skill-tab'}
              style={{ color: cat === skillFilter ? (theme.bg === '#0A1628' ? '#0A1628' : '#F8F6F1') : theme.muted, borderColor: cat === skillFilter ? theme.accent : theme.accentBorder, background: cat === skillFilter ? theme.accent : 'transparent' }}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div className="skill-row" key={skill.name}>
              <div className="skill-label" style={{ color: theme.primary }}>{skill.name}</div>
              <div className="skill-percent" style={{ color: theme.accent }}>{skill.level}%</div>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: `${skill.level}%`, background: `linear-gradient(90deg, ${theme.accent}, ${theme.accentLight})` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="also-proficient" style={{ background: theme.bgAlt, borderColor: theme.accentBorder }}>
          <div className="proficient-title" style={{ color: theme.accent }}>Also Proficient In</div>
          <div className="proficient-list">
            {['Storybook', 'Webpack', 'Babel', 'Docker', 'Kubernetes', 'CI/CD', 'Sentry', 'Agile/Scrum', 'System Design', 'Micro-Frontends', 'AJAX', 'jQuery', 'PHP', 'Java', 'MySQL', 'Git'].map(tool => (
              <span key={tool} style={{ color: theme.text, borderColor: theme.cardBorder, background: theme.card }}>{tool}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
