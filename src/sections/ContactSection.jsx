import './ContactSection.css';

export default function ContactSection({ theme, contactForm, setContactForm, submitted, setSubmitted, handleSubmit, services, isDarkTheme }) {
  return (
    <section id="contact" className="contact-section" style={{ background: theme.bgAlt, borderColor: theme.cardBorder }}>
      <div className="contact-wrap">
        <div>
          <div className="section-label" style={{ color: theme.accent }}>05</div>
          <h2 style={{ color: theme.primary }}>Let&apos;s build something together</h2>
          <p style={{ color: theme.text }}>Whether it's a React application, brand refresh, or end-to-end web solution, I'm ready to help create the next great product.</p>
        </div>
        <div className="contact-panel" style={{ background: theme.bgAlt, borderColor: theme.accentBorder }}>
          {submitted ? (
            <div className="contact-success" style={{ color: theme.text }}>
              <div className="contact-success-icon">✅</div>
              <h3 style={{ color: theme.primary }}>Message Sent!</h3>
              <p>Thanks {contactForm.name}! I&apos;ll reply within 24 hours at {contactForm.email}.</p>
              <button type="button" onClick={() => setSubmitted(false)} style={{ background: theme.accent, color: isDarkTheme ? '#0A1628' : '#F8F6F1' }}>Send Another</button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <label htmlFor="name">Your Name</label>
                <input id="name" required type="text" placeholder="Madhuri Mane" value={contactForm.name} onChange={e => setContactForm(p => ({ ...p, name: e.target.value }))} style={{ background: theme.card, borderColor: theme.cardBorder, color: theme.primary }} />
              </div>
              <div className="contact-form-row">
                <label htmlFor="email">Email Address</label>
                <input id="email" required type="email" placeholder="madhuri@synechron.com" value={contactForm.email} onChange={e => setContactForm(p => ({ ...p, email: e.target.value }))} style={{ background: theme.card, borderColor: theme.cardBorder, color: theme.primary }} />
              </div>
              <div className="contact-form-row">
                <label htmlFor="service">Service Needed</label>
                <select id="service" required value={contactForm.service} onChange={e => setContactForm(p => ({ ...p, service: e.target.value }))} style={{ background: isDarkTheme ? '#0A1628' : '#FAFAF8', borderColor: theme.cardBorder, color: contactForm.service ? theme.primary : theme.muted }}>
                  <option value="">Select a service…</option>
                  {services.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
                </select>
              </div>
              <div className="contact-form-row">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" required rows={4} placeholder="Tell me about your project, timeline, and budget…" value={contactForm.message} onChange={e => setContactForm(p => ({ ...p, message: e.target.value }))} style={{ background: theme.card, borderColor: theme.cardBorder, color: theme.primary }} />
              </div>
              <button type="submit" className="contact-button" style={{ background: theme.accent, color: isDarkTheme ? '#0A1628' : '#F8F6F1' }}>Send Message →</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
