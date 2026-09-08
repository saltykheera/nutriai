export default function FinalCta({ onOpenQr }) {
  return (
    <section className="final-cta-section">
      <div className="container">
        <div className="cta-banner-card">
          <div className="cta-content">
            <span className="badge-new">Get Started Free</span>
            <h2 className="cta-heading">Ready to Stop Squinting at Food Labels?</h2>
            <p className="cta-sub">
              Join over 450,000 health-conscious shoppers, allergy parents, and fitness enthusiasts who scan with clarity every day.
            </p>
            <div className="cta-action-row">
              <a href="#demo-section" className="btn btn-primary btn-large">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                  <circle cx="12" cy="13" r="4"></circle>
                </svg>
                Launch Free Web Scanner
              </a>
              <button className="btn btn-outline btn-large" onClick={onOpenQr}>
                <span>📱 Scan with Mobile</span>
              </button>
            </div>
            <div className="cta-perks">
              <span>✓ No credit card required</span>
              <span>✓ Instant browser access</span>
              <span>✓ Certified medical allergen mapping</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
