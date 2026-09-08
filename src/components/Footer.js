export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-brand-col">
          <div className="brand-logo">
            <div className="logo-icon-wrap">
              <svg className="logo-svg" viewBox="0 0 32 32" fill="none">
                <rect x="2" y="2" width="28" height="28" rx="8" stroke="#ffffff" strokeWidth="2.5" />
                <circle cx="16" cy="16" r="6" stroke="#ff5530" strokeWidth="2.5" strokeDasharray="2 3" />
                <path d="M7 16H11M21 16H25M16 7V11M16 21V25" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                <circle cx="16" cy="16" r="2.5" fill="#ff5530" />
              </svg>
            </div>
            <span className="brand-name">
              NutriLens<span className="brand-ai">AI</span>
            </span>
          </div>
          <p className="footer-brand-desc">
            Empowering consumers with AI vision to transform obscure food labels, chemical additives, and allergens into simple, personalized health intelligence.
          </p>
          <div className="footer-badge-item">
            <span className="badge-dot-green"></span>
            <span>Vision Server Status: All Systems Operational</span>
          </div>
        </div>

        <div className="footer-links-col">
          <h4 className="footer-col-title">Product</h4>
          <ul className="footer-list">
            <li><a href="#how-it-works">6-Step Workflow</a></li>
            <li><a href="#demo-section">Interactive Scanner</a></li>
            <li><a href="#allergy-engine">Allergy Guardian</a></li>
            <li><a href="#history-preview">Food History Log</a></li>
            <li><a href="#features">Additive Radar</a></li>
          </ul>
        </div>

        <div className="footer-links-col">
          <h4 className="footer-col-title">Allergen Safety</h4>
          <ul className="footer-list">
            <li><a href="#allergy-engine">Celiac &amp; Gluten</a></li>
            <li><a href="#allergy-engine">Peanut &amp; Tree Nut</a></li>
            <li><a href="#allergy-engine">Dairy &amp; Casein</a></li>
            <li><a href="#features">Hidden Sugar Guide</a></li>
            <li><a href="#features">E-Number Directory</a></li>
          </ul>
        </div>

        <div className="footer-links-col">
          <h4 className="footer-col-title">Legal &amp; Medical</h4>
          <ul className="footer-list">
            <li><a href="#faq">Privacy Policy</a></li>
            <li><a href="#faq">Terms of Service</a></li>
            <li><a href="#faq">Medical Disclaimer</a></li>
            <li><a href="#faq">Security &amp; Encryption</a></li>
            <li><a href="#faq">Contact Support</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="container footer-bottom-content">
          <p className="disclaimer-text">
            <strong>Medical Notice:</strong> NutriLens AI is designed for informational and nutritional educational purposes. While our AI OCR achieves high accuracy, individuals with severe life-threatening allergies should always verify directly with food manufacturers or healthcare professionals.
          </p>
          <div className="copyright-row">
            <span>&copy; {new Date().getFullYear()} NutriLens AI Technologies, Inc. All rights reserved.</span>
            <span>Crafted for healthy living &amp; allergy safety.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
