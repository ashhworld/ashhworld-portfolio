import './ServicesSection.css';

export default function ServicesSection({ theme, services }) {
  return (
    <section id="services" className="services-section">
      <div className="services-wrap">
        <div className="section-heading">
          <div className="section-label" style={{ color: theme.accent }}>01</div>
          <h2 style={{ color: theme.primary }}>Services & Offerings</h2>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <article key={service.title} className="service-card" style={{ borderColor: theme.accentBorder, background: theme.bgAlt }}>
              <div className="service-icon">{service.icon}</div>
              <h3 style={{ color: theme.primary }}>{service.title}</h3>
              <p style={{ color: theme.text }}>{service.desc}</p>
              <div className="service-tags">
                {service.tags.map(tag => <span key={tag} style={{ color: theme.accent, background: theme.accentCard }}>{tag}</span>)}
              </div>
              <div className="service-price" style={{ color: theme.accent }}>{service.price}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
