'use client';

export default function Hero() {
  return (
    <section className="hero-split-section" id="hero">
      <div className="hero-split-container">
        {/* Left Column: Copy, Highlight, Call to Action, Trust Logos */}
        <div className="hero-left-column">
          {/* Platform chips (iOS & Android) */}
          <div className="platform-chips-row">
            <div className="platform-chip">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.98.6-2.61 1.34-.56.64-1.05 1.71-.92 2.74 1 .08 2.01-.5 2.61-1.23z"/>
              </svg>
              <span>iOS</span>
            </div>
            <div className="platform-chip">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="#3DDC84">
                <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-1.0002 0-.5516.4482-1.0002.9993-1.0002.5516 0 1.0002.4486 1.0002 1.0002 0 .5516-.4486 1.0002-1.0002 1.0002m-11.046 0c-.5516 0-1.0002-.4486-1.0002-1.0002 0-.5516.4486-1.0002 1.0002-1.0002.5516 0 1.0002.4486 1.0002 1.0002 0 .5516-.4486 1.0002-1.0002 1.0002m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5802 8.3976 13.8443 8.0838 12 8.0838c-1.8444 0-3.5803.3138-5.1368.866L4.8409 5.4468a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396"/>
              </svg>
              <span>Android</span>
            </div>
            <div className="platform-chip platform-chip-web">
              <span className="chip-dot-live"></span>
              <span>Web Scanner Available</span>
            </div>
          </div>

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

          <p className="hero-split-desc">
            NutriLens AI gives you the complete food intelligence engine, with label OCR, additive safety ratings, personalized allergy alerts, and automatic consumption tracking already built and ready to protect your health.
          </p>

          <p className="hero-split-subdesc">
            Point your camera at any food label to reveal hidden sugars, harmful preservatives, and allergen triggers tailored to your personal dietary profile.
          </p>

          {/* Clean Primary CTA Button */}
          <div className="hero-btn-row">
            <a href="#demo-section" className="btn-access">
              Get instant access
            </a>
          </div>

          <div className="hero-hairline-divider"></div>

          {/* Works with Section (Matching reference lower block) */}
          <div className="hero-works-with-section">
            <h4 className="works-with-heading">Works with the dietary standards you trust</h4>
            <p className="works-with-text">
              Cross-references ingredients against certified medical allergen databases, European Food Safety Authority indexes, and FDA compliance standards in under 400 milliseconds.
            </p>
            <p className="works-with-sub">
              <strong>Prefer clean eating?</strong> The AI automatically flags palm oil, synthetic emulsifiers, and artificial chemical food dyes.
            </p>

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
