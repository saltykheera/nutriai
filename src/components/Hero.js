export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="container">
        {/* Centered Hero Band (hero-band-marketing) */}
        <div className="hero-center-content">
          <div className="hero-badge-row">
            <span className="badge-new">NEW</span>
            <span>Intelligent Nutrition &amp; Allergen Vision</span>
          </div>

          <h1 className="hero-title">
            Decode Any Food Label. <br />
            Eat With Total Confidence.
          </h1>

          <p className="hero-subtitle">
            Point or drop any food packaging. Our AI decompiles fine-print ingredients, exposes hidden chemical additives, scores overall health quality, and immediately warns you of dangerous allergens.
          </p>

          <div className="hero-cta-group">
            <a href="#demo-section" className="btn btn-primary btn-large" id="hero-primary-cta">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 7V4h3M20 7V4h-3M4 17v3h3M20 17v3h-3M7 12h10M12 7v10" />
              </svg>
              Try Interactive Scanner Free
            </a>
            <a href="#how-it-works" className="btn btn-secondary btn-large">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
              Watch 6-Step Workflow
            </a>
          </div>
        </div>

        {/* Stats Strip (testimonial-stat-row from DESIGN.md) */}
        <div className="hero-stat-strip">
          <div className="stat-cell">
            <span className="stat-number">450k+</span>
            <span className="stat-label">Labels Analyzed</span>
          </div>
          <div className="stat-cell">
            <span className="stat-number">99.4%</span>
            <span className="stat-label">OCR Precision</span>
          </div>
          <div className="stat-cell">
            <span className="stat-number">12,000+</span>
            <span className="stat-label">Additives Indexed</span>
          </div>
          <div className="stat-cell">
            <span className="stat-number">4.9 / 5</span>
            <span className="stat-label">Dietitian Rating</span>
          </div>
        </div>

        {/* Hero Visual Showcase Frame (32px rounded.hero) */}
        <div className="hero-showcase-frame">
          <div className="hero-showcase-bar">
            <div className="showcase-dots">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <div className="showcase-tab-title">
              <span className="pulse-circle"></span>
              AI Vision OCR • Real-Time Label Extraction
            </div>
            <span className="badge-beta">v3.0 Model</span>
          </div>

          <div className="hero-scanner-stage">
            <img
              src="/assets/hero-food-scan.jpg"
              alt="AI scanning food package label with laser beam"
              className="hero-scan-img"
            />

            {/* Dynamic laser scanning ray */}
            <div className="scan-laser-beam" id="hero-laser"></div>

            {/* Floating Insight Badges */}
            <div className="floating-insight insight-health">
              <div className="insight-score-badge">92</div>
              <div className="insight-text">
                <strong>Health Score: 92/100</strong>
                <span>Grade A • Nutrient Dense</span>
              </div>
            </div>

            <div className="floating-insight insight-allergen">
              <div className="safe-icon">✓</div>
              <div className="insight-text">
                <strong>100% Safe For You</strong>
                <span>Zero saved allergens detected</span>
              </div>
            </div>

            <div className="floating-insight insight-additive">
              <div className="additive-icon">🌿</div>
              <div className="insight-text">
                <strong>Clean Ingredients</strong>
                <span>0 Ultra-processed additives</span>
              </div>
            </div>
          </div>

          <div className="hero-showcase-footer">
            <div>
              <span>Latency: <strong>0.38s</strong></span>
            </div>
            <div>
              <span>Extracted: <strong>18 Chemical Compounds</strong></span>
            </div>
            <div>
              <span>Status: <strong>Auto-Logged to History ✓</strong></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
