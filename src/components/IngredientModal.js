'use client';

import { useEffect } from 'react';
import { JARGON_DICTIONARY } from '@/data/mockData';

export default function IngredientModal({ ingredientId, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!ingredientId) return null;

  const data = JARGON_DICTIONARY[ingredientId] || {
    title: ingredientId.replace(/-/g, ' ').toUpperCase(),
    cat: 'Ingredient Compound',
    safety: 'Analyzed Safe',
    safetyClass: 'safety-good',
    plain: 'A natural or culinary substance commonly included in packaged foods.',
    why: 'Added for taste, texture preservation, or nutritional profile balance.',
    impact: 'Approved for safe consumption in standard dietary quantities.',
    alt: 'Clean whole-food equivalent.',
  };

  return (
    <div className="ingredient-modal active" role="dialog" aria-modal="true">
      <div className="modal-backdrop" onClick={onClose}></div>
      <div className="modal-card glass-panel">
        <button className="modal-close-btn" onClick={onClose} aria-label="Close dialog">
          &times;
        </button>

        <div className="modal-header">
          <span className="modal-category-tag">{data.cat}</span>
          <h3 className="modal-ingredient-name">{data.title}</h3>
          <div className={`modal-safety-pill ${data.safetyClass}`}>Safety: {data.safety}</div>
        </div>

        <div className="modal-body">
          <div className="modal-info-block">
            <label className="modal-label">What is it in plain English?</label>
            <p className="modal-text">{data.plain}</p>
          </div>

          <div className="modal-info-block">
            <label className="modal-label">Why manufacturers add it:</label>
            <p className="modal-text">{data.why}</p>
          </div>

          <div className="modal-info-block">
            <label className="modal-label">Potential Health &amp; Allergy Impact:</label>
            <p className="modal-text">{data.impact}</p>
          </div>

          <div className="modal-info-block">
            <label className="modal-label">Healthier Clean Alternatives:</label>
            <p className="modal-text">{data.alt}</p>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn btn-primary btn-full" onClick={onClose}>
            Got It
          </button>
        </div>
      </div>
    </div>
  );
}
