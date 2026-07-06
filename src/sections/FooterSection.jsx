import './FooterSection.css';

export default function FooterSection({ theme }) {
  return (
    <footer className="footer-section" style={{ borderColor: theme.accentBorder }}>
      <div className="footer-logo" style={{ color: theme.primary }}>
        AD<span style={{ color: theme.accent }}>.</span>
      </div>
      <div className="footer-copy" style={{ color: theme.textMuted }}>
        © 2026 Ashlesh Dhanvalkar · Senior React JS Engineer · Pune, India
      </div>
      <div className="footer-links">
        {[
          ["LinkedIn", "https://linkedin.com/in/ashlesh-dhanvalkar"],
          ["Email", "mailto:dhanvalkarashu20@gmail.com"],
        ].map(([label, href]) => (
          <a key={label} href={href} target="_blank" rel="noreferrer" style={{ color: theme.textMuted }}>
            {label}
          </a>
        ))}
      </div>
    </footer>
  );
}
