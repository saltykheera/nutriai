'use client';

export default function Hero() {
  return (
    <section className="hero-split-section" id="hero">
      <div className="hero-split-container">
        {/* Left Column: Copy, Highlight, Call to Action, Trust Logos */}
        <div className="hero-left-column">
          <p className="hero-eyebrow">
            Go from confusing fine print to <strong>instant dietary clarity</strong>.
          </p>

          {/* Neon Yellow Highlight Tag (Matching reference image) */}
          <div className="neon-highlight-badge">
            No nutrition degree required.
          </div>

          {/* Big Bold Hero Headline */}
          <h1 className="hero-split-title">
            Decode your food in seconds with AI, not guesswork.
          </h1>

          {/* Minimized Clean One-Liner */}
          <p className="hero-split-desc">
            Point your camera at any food label to instantly reveal hidden additives, verify personal allergens, and log nutrition in seconds.
          </p>

          {/* Clean Primary CTA Button */}
          <div className="hero-btn-row">
            <a href="#demo-section" className="btn-access">
              Get instant access
            </a>
          </div>

          <div className="hero-hairline-divider"></div>

          {/* Works with Section Formatted as a Clean List */}
          <div className="hero-works-with-section">
            <h4 className="works-with-heading">Works with the dietary standards you trust</h4>
            
            <ul className="hero-standards-list">
              <li>
                <span className="list-check-icon">✓</span>
                <span>Cross-references certified medical allergen databases, EFSA indexes, and FDA compliance in &lt;400ms.</span>
              </li>
              <li>
                <span className="list-check-icon">✓</span>
                <span><strong>Clean Eating Guard:</strong> Auto-flags palm oil, synthetic emulsifiers, and artificial chemical food dyes.</span>
              </li>
            </ul>

            {/* Standard / Technology Badges */}
            <div className="trust-logos-row">
              <div className="trust-logo-item">
                <span className="logo-badge-icon">🔬</span>
                <span>FDA Allergen-9</span>
              </div>
              <div className="trust-logo-item">
                <span className="logo-badge-icon">🌿</span>
                <span>USDA Organic</span>
              </div>
              <div className="trust-logo-item">
                <span className="logo-badge-icon">📊</span>
                <span>Nutri-Score A-E</span>
              </div>
              <div className="trust-logo-item">
                <span className="logo-badge-icon">🌾</span>
                <span>Celiac Certified</span>
              </div>
              <div className="trust-logo-item">
                <span className="logo-badge-icon">🧬</span>
                <span>Non-GMO Project</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Dotted Canvas Background with Pixel-Perfect iPhone Mockup */}
        <div className="hero-right-column">
          <div className="dotted-canvas-bg"></div>

          {/* Sleek iPhone Hardware Mockup (Matching reference image) */}
          <div className="iphone-device-frame">
            <div className="iphone-inner-border">
              {/* Dynamic Island Notch */}
              <div className="dynamic-island">
                <div className="island-camera"></div>
                <div className="island-sensor"></div>
              </div>

              {/* Status Bar */}
              <div className="phone-status-bar">
                <span className="phone-clock">9:41</span>
                <div className="phone-status-icons">
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="currentColor">
                    <rect x="0" y="7" width="2" height="3" rx="0.5"/>
                    <rect x="3" y="5" width="2" height="5" rx="0.5"/>
                    <rect x="6" y="3" width="2" height="7" rx="0.5"/>
                    <rect x="9" y="1" width="2" height="9" rx="0.5"/>
                    <rect x="12" y="0" width="2" height="10" rx="0.5"/>
                  </svg>
                  <svg width="14" height="10" viewBox="0 0 16 12" fill="currentColor">
                    <path d="M8 9.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM1.5 4.5A9.2 9.2 0 0114.5 4.5M3.8 7a6 6 0 018.4 0"/>
                  </svg>
                  <div className="battery-icon">
                    <div className="battery-level"></div>
                  </div>
                </div>
              </div>

              {/* Phone App Content */}
              <div className="phone-app-body">
                {/* Date & Title Row */}
                <div className="phone-header-row">
                  <div>
                    <span className="phone-eyebrow">TUESDAY, MAR 12</span>
                    <h2 className="phone-screen-title">Today</h2>
                  </div>
                  <div className="phone-streak-badge">
                    <span>🔥</span>
                    <strong>12</strong>
                  </div>
                </div>

                {/* Circular Calorie & Macro Card (Matching reference) */}
                <div className="phone-macro-card">
                  {/* Circular Calorie Gauge */}
                  <div className="macro-circle-container">
                    <svg className="macro-circle-svg" viewBox="0 0 100 100">
                      <circle className="macro-circle-bg" cx="50" cy="50" r="40" />
                      <circle
                        className="macro-circle-fill"
                        cx="50"
                        cy="50"
                        r="40"
                        strokeDasharray="251.2"
                        strokeDashoffset="80"
                      />
                    </svg>
                    <div className="macro-circle-center">
                      <strong className="macro-calorie-val">1,284</strong>
                      <span className="macro-calorie-max">of 2,000 kcal</span>
                    </div>
                  </div>

                  {/* Horizontal Macro Bars */}
                  <div className="macro-bars-col">
                    <div className="macro-bar-item">
                      <div className="macro-meta-row">
                        <span className="macro-label">Protein</span>
                        <span className="macro-nums">96/140g</span>
                      </div>
                      <div className="macro-track">
                        <div className="macro-fill fill-protein" style={{ width: '68%' }}></div>
                      </div>
                    </div>

                    <div className="macro-bar-item">
                      <div className="macro-meta-row">
                        <span className="macro-label">Carbs</span>
                        <span className="macro-nums">152/220g</span>
                      </div>
                      <div className="macro-track">
                        <div className="macro-fill fill-carbs" style={{ width: '69%' }}></div>
                      </div>
                    </div>

                    <div className="macro-bar-item">
                      <div className="macro-meta-row">
                        <span className="macro-label">Fat</span>
                        <span className="macro-nums">43/70g</span>
                      </div>
                      <div className="macro-track">
                        <div className="macro-fill fill-fat" style={{ width: '61%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* This Week Activity Strip (Matching reference) */}
                <div className="phone-week-card">
                  <div className="week-header-row">
                    <span className="week-title">This week</span>
                    <span className="week-status">On track</span>
                  </div>
                  <div className="week-bars-row">
                    <div className="week-bar-col"><div className="w-bar bar-past"></div></div>
                    <div className="week-bar-col"><div className="w-bar bar-past"></div></div>
                    <div className="week-bar-col"><div className="w-bar bar-past"></div></div>
                    <div className="week-bar-col"><div className="w-bar bar-active"></div></div>
                    <div className="week-bar-col"><div className="w-bar bar-future"></div></div>
                    <div className="week-bar-col"><div className="w-bar bar-future"></div></div>
                    <div className="week-bar-col"><div className="w-bar bar-future"></div></div>
                  </div>
                </div>

                {/* AI Nutritional Insight Pill (Matching reference) */}
                <div className="phone-ai-insight-box">
                  <div className="ai-green-badge">AI</div>
                  <p className="ai-insight-text">
                    You're <strong>44g short on protein</strong>. Grilled salmon tonight would close the gap without flagged additives.
                  </p>
                </div>

                {/* MEALS Section */}
                <div className="phone-meals-section">
                  <span className="meals-section-heading">MEALS</span>
                  <div className="meal-item-card">
                    <div className="meal-dot dot-green"></div>
                    <div className="meal-info">
                      <strong className="meal-name">Breakfast</strong>
                      <span className="meal-desc">Oats, berries &amp; yogurt</span>
                    </div>
                    <span className="meal-kcal">324 kcal</span>
                  </div>

                  <div className="meal-item-card">
                    <div className="meal-dot dot-green"></div>
                    <div className="meal-info">
                      <strong className="meal-name">Lunch</strong>
                      <span className="meal-desc">Chicken burrito bowl</span>
                    </div>
                    <span className="meal-kcal">548 kcal</span>
                  </div>

                  <div className="meal-item-card">
                    <div className="meal-dot dot-green"></div>
                    <div className="meal-info">
                      <strong className="meal-name">Snack</strong>
                      <span className="meal-desc">Protein shake</span>
                    </div>
                    <span className="meal-kcal">188 kcal</span>
                  </div>
                </div>
              </div>

              {/* Bottom Phone Tab Bar */}
              <div className="phone-tab-bar">
                <div className="tab-item active">
                  <span className="tab-active-dot"></span>
                  <span>Today</span>
                </div>
                <div className="tab-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                    <circle cx="12" cy="13" r="4"/>
                  </svg>
                  <span>Scan</span>
                </div>
                <div className="tab-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 16v-4M12 8h.01"/>
                  </svg>
                  <span>Coach</span>
                </div>
                <div className="tab-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                  <span>Profile</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
