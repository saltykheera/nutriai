'use client';

import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="site-header" id="site-header">
      <div className="container header-container">
        <a href="#" className="brand-logo" aria-label="NutriLens AI Home">
          <div className="logo-icon-wrap">
            <svg className="logo-svg" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="28" height="28" rx="8" stroke="#0a0a0a" strokeWidth="2.5" />
              <circle cx="16" cy="16" r="6" stroke="#ff5530" strokeWidth="2.5" strokeDasharray="2 3" />
              <path d="M7 16H11M21 16H25M16 7V11M16 21V25" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" />
              <circle cx="16" cy="16" r="2.5" fill="#ff5530" />
            </svg>
          </div>
          <span className="brand-name">
            NutriLens<span className="brand-ai">AI</span>
          </span>
        </a>

        <nav className={`main-nav ${mobileMenuOpen ? 'mobile-active' : ''}`} id="main-nav">
          <a href="#how-it-works" className="nav-link" onClick={closeMenu}>
            How It Works
          </a>
          <a href="#demo-section" className="nav-link" onClick={closeMenu}>
            Interactive Scanner
          </a>
          <a href="#allergy-engine" className="nav-link" onClick={closeMenu}>
            Allergy Guardian
          </a>
          <a href="#history-preview" className="nav-link" onClick={closeMenu}>
            Food History
          </a>
          <a href="#features" className="nav-link" onClick={closeMenu}>
            Features
          </a>
          <a href="#faq" className="nav-link" onClick={closeMenu}>
            FAQ
          </a>
        </nav>

        <div className="header-actions">
          <a href="#demo-section" className="btn btn-secondary nav-btn-compact">
            Test Live Demo
          </a>
          <a href="#demo-section" className="btn btn-primary nav-cta">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
              <circle cx="12" cy="13" r="4"></circle>
            </svg>
            Scan Food Label
          </a>
          <button
            className="mobile-toggle"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
