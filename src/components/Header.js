'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="site-header site-header-dark" id="site-header">
      <div className="container header-container">
        <a href="#" className="brand-logo" aria-label="NutriLens AI Home" onClick={closeMenu}>
          <div className="starter-phone-icon">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="5" y="2" width="14" height="20" rx="3" />
              <path d="M12 18h.01" />
            </svg>
          </div>
          <span className="brand-name">
            NutriLens AI
          </span>
        </a>

        {/* Desktop & Mobile Nav Drawer */}
        <nav className={`main-nav main-nav-dark ${mobileMenuOpen ? 'mobile-active' : ''}`} id="main-nav">
          <a href="#hero" className="nav-link" onClick={closeMenu}>
            Home
          </a>
          <a href="#demo-section" className="nav-link" onClick={closeMenu}>
            Scanner
          </a>
          <a href="#how-it-works" className="nav-link" onClick={closeMenu}>
            How It Works
          </a>
          <a href="#allergy-engine" className="nav-link" onClick={closeMenu}>
            Allergy Engine
          </a>
          <a href="#history-preview" className="nav-link" onClick={closeMenu}>
            History
          </a>
          <a href="#pricing" className="nav-link" onClick={closeMenu}>
            Pricing
          </a>
          <a href="#faq" className="nav-link" onClick={closeMenu}>
            Docs
          </a>
        </nav>

        <div className="header-actions">
          <a href="#qr-modal" className="btn-install-badge" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('open-qr-modal')); }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            <span>Install</span>
          </a>

          <a href="#demo-section" className="btn btn-primary nav-cta" onClick={closeMenu}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
              <circle cx="12" cy="13" r="4"></circle>
            </svg>
            <span>Scan Label</span>
          </a>

          <button
            className="mobile-toggle mobile-toggle-dark"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
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
