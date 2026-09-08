'use client';

import { useState, useRef } from 'react';
import { PRODUCTS } from '@/data/mockData';

export default function LiveScannerDemo({ onSelectIngredient }) {
  const [productsData, setProductsData] = useState(PRODUCTS);
  const [currentId, setCurrentId] = useState('bar');
  const [isScanning, setIsScanning] = useState(false);
  const [scanStepText, setScanStepText] = useState('');
  const [isDragOver, setIsDragOver] = useState(false);

  const fileInputRef = useRef(null);

  // User saved allergy profile preferences
  const [allergies, setAllergies] = useState({
    peanuts: true,
    dairy: true,
    gluten: false,
    soy: false,
    palmoil: true,
    additives: false,
    vegan: false,
  });

  const currentProduct = productsData[currentId];

  // Play synthetic audio feedback
  const playBeep = (type = 'success') => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === 'success') {
        osc.frequency.setValueAtTime(587.33, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.12);
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
        osc.start();
        osc.stop(ctx.currentTime + 0.25);
      } else {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(440, ctx.currentTime);
        osc.frequency.setValueAtTime(320, ctx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.12, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
        osc.start();
        osc.stop(ctx.currentTime + 0.35);
      }
    } catch {
      // Audio restricted or unprompted
    }
  };

  // Allergy evaluation
  const evaluateAllergens = (product) => {
    const flagged = [];
    if (allergies.peanuts && product.allergenTags.includes('peanuts')) {
      flagged.push('Contains Tree Nuts (Hazelnuts) — Risk of severe allergic reaction.');
    }
    if (allergies.dairy && product.allergenTags.includes('dairy')) {
      flagged.push('Contains Dairy Derivative (Skimmed Milk Powder / Casein).');
    }
    if (allergies.soy && product.allergenTags.includes('soy')) {
      flagged.push('Contains Soy Derivative (Soy Lecithin E322).');
    }
    if (allergies.palmoil && product.hasPalmOil) {
      flagged.push('Contains 32% Refined Palm Oil (High Palmitic Saturated Fat).');
    }
    if (allergies.additives && product.hasAdditives) {
      flagged.push('Contains synthetic additives & chemical preservatives.');
    }
    if (allergies.vegan && !product.isVegan) {
      flagged.push('Non-Vegan Product: Contains dairy or animal-derived ingredients.');
    }
    if (allergies.gluten && product.allergenTags.includes('gluten')) {
      flagged.push('Contains Gluten / Wheat derivative.');
    }
    return flagged;
  };

  const flaggedAllergens = evaluateAllergens(currentProduct);
  const hasHazard = flaggedAllergens.length > 0;

  // Trigger simulated scan sequence
  const runScan = (targetId, customData = null) => {
    setIsScanning(true);
    setScanStepText('Decoupling packaging geometry & perspective...');

    const steps = [
      'Extracting microscopic 4pt typography strings...',
      'Decompiling chemical names against 12,000+ records...',
      'Cross-referencing your medical allergy preferences...',
      'Calculating comprehensive 0–100 Nutri-Score...',
    ];

    let idx = 0;
    const interval = setInterval(() => {
      if (idx < steps.length) {
        setScanStepText(steps[idx]);
        idx++;
      }
    }, 280);

    setTimeout(() => {
      clearInterval(interval);
      setIsScanning(false);

      if (customData) {
        setProductsData((prev) => ({ ...prev, [targetId]: customData }));
      }
      setCurrentId(targetId);

      const prod = customData || productsData[targetId];
      const hazards = evaluateAllergens(prod);
      if (hazards.length > 0) {
        playBeep('warning');
      } else {
        playBeep('success');
      }
    }, 1250);
  };

  // Toggle handlers
  const handleToggle = (key) => {
    setAllergies((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const resetToggles = () => {
    setAllergies({
      peanuts: true,
      dairy: true,
      gluten: false,
      soy: false,
      palmoil: true,
      additives: false,
      vegan: false,
    });
  };

  // Handle custom file upload
  const handleFileUpload = (file) => {
    if (!file) return;
    const cleanName = file.name.replace(/\.[^/.]+$/, '');
    const customProduct = {
      id: 'custom',
      name: `User Scanned: ${cleanName.length > 20 ? cleanName.substring(0, 20) + '...' : cleanName}`,
      brand: 'Uploaded Label Photo • Auto-detected serving',
      category: 'Custom Uploaded Label',
      score: 78,
      grade: 'Grade B • Generally Healthy',
      scoreColor: '#34D399',
      nutrition: {
        cal: '180 kcal',
        calTag: 'Moderate',
        calType: 'good',
        sugar: '4g',
        sugarTag: 'Low',
        sugarType: 'good',
        fat: '5g (Sat 1.2g)',
        fatTag: 'Balanced',
        fatType: 'good',
        sodium: '110mg',
        sodiumTag: 'Moderate',
        sodiumType: 'good',
        protein: '12g',
        proteinTag: 'Good Source',
        proteinType: 'good',
      },
      ingredients: [
        { name: 'Whole Grain Rolled Oats', type: 'clean', id: 'quinoa' },
        { name: 'Roasted Almond Butter', type: 'allergen', allergenKey: 'peanuts', id: 'hazelnuts' },
        { name: 'Organic Raw Honey', type: 'clean', id: 'sugar' },
        { name: 'Fine Sea Salt', type: 'clean', id: 'water' },
        { name: 'Non-GMO Sunflower Lecithin', type: 'clean', id: 'vanilla' },
      ],
      additives: {
        title: 'Zero Chemical Additives Extracted',
        desc: 'OCR parsed 5 wholesome whole-food ingredients from your photo. No artificial dyes or synthetic preservatives found.',
        icon: '✨',
      },
      allergenTags: ['peanuts'],
      isVegan: false,
      hasPalmOil: false,
      hasAdditives: false,
      swap: null,
    };

    runScan('custom', customProduct);
  };

  // Health score circle dashoffset
  const circumference = 314.16;
  const offset = circumference - (currentProduct.score / 100) * circumference;

  return (
    <section className="demo-section" id="demo-section">
      <div className="container">
        <div className="section-header text-center">
          <div className="pill-badge">Live Interactive Simulator</div>
          <h2 className="section-title">Test the AI Scanner Right Now</h2>
          <p className="section-subtitle">
            Select a sample food product below or upload your own label to see how our AI extracts fine print, generates health scores, and flags allergens tailored to your personal settings.
          </p>
        </div>

        {/* Personal Dietary & Allergy Settings Bar */}
        <div className="allergy-profile-bar glass-panel">
          <div className="profile-header">
            <div className="profile-title">
              <span className="profile-icon">🛡️</span>
              <div>
                <strong>Simulate Your Personal Allergy &amp; Diet Profile:</strong>
                <p>Toggle your conditions to watch the AI instantly trigger tailored alerts.</p>
              </div>
            </div>
            <button className="reset-toggles-btn" onClick={resetToggles}>
              Reset Defaults
            </button>
          </div>

          <div className="allergy-chips-grid">
            <label className="allergy-chip">
              <input
                type="checkbox"
                checked={allergies.peanuts}
                onChange={() => handleToggle('peanuts')}
              />
              <span className="chip-content">
                <span className="chip-icon">🥜</span>
                <span className="chip-name">Peanuts &amp; Tree Nuts</span>
              </span>
            </label>

            <label className="allergy-chip">
              <input
                type="checkbox"
                checked={allergies.dairy}
                onChange={() => handleToggle('dairy')}
              />
              <span className="chip-content">
                <span className="chip-icon">🥛</span>
                <span className="chip-name">Dairy &amp; Lactose</span>
              </span>
            </label>

            <label className="allergy-chip">
              <input
                type="checkbox"
                checked={allergies.gluten}
                onChange={() => handleToggle('gluten')}
              />
              <span className="chip-content">
                <span className="chip-icon">🌾</span>
                <span className="chip-name">Gluten / Celiac</span>
              </span>
            </label>

            <label className="allergy-chip">
              <input
                type="checkbox"
                checked={allergies.soy}
                onChange={() => handleToggle('soy')}
              />
              <span className="chip-content">
                <span className="chip-icon">🫘</span>
                <span className="chip-name">Soy &amp; Soy Lecithin</span>
              </span>
            </label>

            <label className="allergy-chip">
              <input
                type="checkbox"
                checked={allergies.palmoil}
                onChange={() => handleToggle('palmoil')}
              />
              <span className="chip-content">
                <span className="chip-icon">🌴</span>
                <span className="chip-name">Avoid Palm Oil</span>
              </span>
            </label>

            <label className="allergy-chip">
              <input
                type="checkbox"
                checked={allergies.additives}
                onChange={() => handleToggle('additives')}
              />
              <span className="chip-content">
                <span className="chip-icon">🧪</span>
                <span className="chip-name">No Artificial Additives</span>
              </span>
            </label>

            <label className="allergy-chip">
              <input
                type="checkbox"
                checked={allergies.vegan}
                onChange={() => handleToggle('vegan')}
              />
              <span className="chip-content">
                <span className="chip-icon">🌱</span>
                <span className="chip-name">Strict Vegan</span>
              </span>
            </label>
          </div>
        </div>

        {/* Interactive Scanner Workspace */}
        <div className="scanner-workspace">
          {/* Left Column: Product Selector & Upload */}
          <div className="scanner-input-col glass-panel">
            <div className="panel-section-title">
              <span>1. Choose a Food Label to Scan</span>
            </div>

            <div className="sample-products-list">
              {/* Item 1 */}
              <button
                className={`sample-product-card ${currentId === 'bar' ? 'active' : ''}`}
                onClick={() => runScan('bar')}
              >
                <div className="product-thumb thumb-green">
                  <span>🥣</span>
                </div>
                <div className="sample-info">
                  <div className="sample-title-row">
                    <span className="sample-name">Organic SuperGreen Bowl</span>
                    <span className="mini-score score-high">92</span>
                  </div>
                  <span className="sample-desc">Pea Protein, Spirulina, Organic Chia, Quinoa</span>
                  <span className="sample-tag tag-healthy">Clean Label • High Protein</span>
                </div>
              </button>

              {/* Item 2 */}
              <button
                className={`sample-product-card ${currentId === 'spread' ? 'active' : ''}`}
                onClick={() => runScan('spread')}
              >
                <div className="product-thumb thumb-red">
                  <span>🍫</span>
                </div>
                <div className="sample-info">
                  <div className="sample-title-row">
                    <span className="sample-name">Choco-Hazelnut Breakfast Spread</span>
                    <span className="mini-score score-low">34</span>
                  </div>
                  <span className="sample-desc">56% Sugar, Palm Oil, Whey, Soy Lecithin, Vanillin</span>
                  <span className="sample-tag tag-hazard">Ultra-Processed • High Hazard</span>
                </div>
              </button>

              {/* Item 3 */}
              <button
                className={`sample-product-card ${currentId === 'salad' ? 'active' : ''}`}
                onClick={() => runScan('salad')}
              >
                <div className="product-thumb thumb-amber">
                  <span>🥗</span>
                </div>
                <div className="sample-info">
                  <div className="sample-title-row">
                    <span className="sample-name">Artisan Caesar Salad Dressing</span>
                    <span className="mini-score score-mid">56</span>
                  </div>
                  <span className="sample-desc">Canola Oil, Anchovy Paste, Egg, Potassium Sorbate E202</span>
                  <span className="sample-tag tag-caution">Moderate • Hidden Fish/Egg</span>
                </div>
              </button>
            </div>

            {/* Upload Custom File Dropzone */}
            <div
              className={`upload-dropzone ${isDragOver ? 'dragover' : ''}`}
              onClick={() => fileInputRef.current?.click()}
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragOver(true);
              }}
              onDragLeave={() => setIsDragOver(false)}
              onDrop={(e) => {
                e.preventDefault();
                setIsDragOver(false);
                if (e.dataTransfer.files?.[0]) {
                  handleFileUpload(e.dataTransfer.files[0]);
                }
              }}
            >
              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                capture="environment"
                className="file-input-hidden"
                onChange={(e) => {
                  if (e.target.files?.[0]) {
                    handleFileUpload(e.target.files[0]);
                  }
                }}
              />
              <div className="dropzone-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="17 8 12 3 7 8"></polyline>
                  <line x1="12" y1="3" x2="12" y2="15"></line>
                </svg>
              </div>
              <span className="dropzone-text">Or drag &amp; drop your own label photo</span>
              <span className="dropzone-sub">Supports JPG, PNG, WebP • Auto camera crop</span>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  fileInputRef.current?.click();
                }}
              >
                Browse File
              </button>
            </div>

            <div className="sim-scan-btn-wrap">
              <button className="btn btn-primary btn-full" onClick={() => runScan(currentId)}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                  <circle cx="12" cy="13" r="4"></circle>
                </svg>
                Re-Scan Current Label with AI
              </button>
            </div>
          </div>

          {/* Right Column: AI Extraction & Health Score Result */}
          <div className="scanner-result-col glass-panel" id="scanner-result-col">
            {/* Scanning Loader Overlay */}
            {isScanning && (
              <div className="scanning-loader-overlay">
                <div className="loader-scanner-box">
                  <div className="scan-laser-line"></div>
                  <div className="loader-spinner"></div>
                  <h3 className="loader-title">AI OCR Decompiling Label...</h3>
                  <p className="loader-step">{scanStepText}</p>
                </div>
              </div>
            )}

            {/* Dynamic Result Content */}
            <div className="result-content-wrap">
              {/* Result Header */}
              <div className="result-header">
                <div>
                  <div className="result-tag-row">
                    <span className="category-badge">{currentProduct.category}</span>
                    <span className="verified-scan-badge">✓ AI Vision Verified</span>
                  </div>
                  <h3 className="result-product-name">{currentProduct.name}</h3>
                  <p className="result-brand">{currentProduct.brand}</p>
                </div>

                {/* Health Score Radial Meter */}
                <div className="health-score-container">
                  <div className="score-circle-wrap">
                    <svg className="score-svg" viewBox="0 0 120 120">
                      <circle className="score-track" cx="60" cy="60" r="50" />
                      <circle
                        className="score-fill"
                        cx="60"
                        cy="60"
                        r="50"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        style={{ stroke: currentProduct.scoreColor }}
                      />
                    </svg>
                    <div className="score-value-box">
                      <span className="score-num">{currentProduct.score}</span>
                      <span className="score-max">/100</span>
                    </div>
                  </div>
                  <div
                    className="score-rating"
                    style={{ color: currentProduct.scoreColor }}
                  >
                    {currentProduct.grade}
                  </div>
                </div>
              </div>

              {/* Allergy Alert Banner */}
              <div className="allergy-alert-box">
                {hasHazard ? (
                  <div className="alert-danger-banner">
                    <div className="alert-danger-icon">!</div>
                    <div className="alert-text-group">
                      <strong className="alert-title-text">🚨 PERSONAL ALLERGY ALERT DETECTED</strong>
                      <p className="alert-details-text">{flaggedAllergens.join(' • ')}</p>
                    </div>
                  </div>
                ) : (
                  <div className="alert-safe-banner">
                    <div className="alert-safe-icon">✓</div>
                    <div className="alert-safe-text">
                      <strong>100% Compatible with Your Profile</strong>
                      <p>Zero allergen matches or restricted additives based on your saved diet preferences.</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Nutrition Facts Fast-Grid */}
              <div className="nutrition-fast-grid">
                <div className="nutrition-cell">
                  <span className="nutri-label">Calories</span>
                  <strong className="nutri-val">{currentProduct.nutrition.cal}</strong>
                  <span className={`nutri-indicator indicator-${currentProduct.nutrition.calType}`}>
                    {currentProduct.nutrition.calTag}
                  </span>
                </div>
                <div className="nutrition-cell">
                  <span className="nutri-label">Sugars</span>
                  <strong className="nutri-val">{currentProduct.nutrition.sugar}</strong>
                  <span className={`nutri-indicator indicator-${currentProduct.nutrition.sugarType}`}>
                    {currentProduct.nutrition.sugarTag}
                  </span>
                </div>
                <div className="nutrition-cell">
                  <span className="nutri-label">Total Fat</span>
                  <strong className="nutri-val">{currentProduct.nutrition.fat}</strong>
                  <span className={`nutri-indicator indicator-${currentProduct.nutrition.fatType}`}>
                    {currentProduct.nutrition.fatTag}
                  </span>
                </div>
                <div className="nutrition-cell">
                  <span className="nutri-label">Sodium</span>
                  <strong className="nutri-val">{currentProduct.nutrition.sodium}</strong>
                  <span className={`nutri-indicator indicator-${currentProduct.nutrition.sodiumType}`}>
                    {currentProduct.nutrition.sodiumTag}
                  </span>
                </div>
                <div className="nutrition-cell">
                  <span className="nutri-label">Protein</span>
                  <strong className="nutri-val">{currentProduct.nutrition.protein}</strong>
                  <span className={`nutri-indicator indicator-${currentProduct.nutrition.proteinType}`}>
                    {currentProduct.nutrition.proteinTag}
                  </span>
                </div>
              </div>

              {/* Ingredient Breakdown & Jargon Buster */}
              <div className="ingredients-analysis-box">
                <div className="box-title-row">
                  <h4>Extracted Ingredients Analysis</h4>
                  <span className="click-hint">Click any ingredient for plain-English explanation</span>
                </div>

                <div className="ingredient-chips-container">
                  {currentProduct.ingredients.map((ing) => {
                    let isFlagged = false;
                    if (ing.allergenKey && allergies[ing.allergenKey]) isFlagged = true;
                    if (ing.id === 'palmoil' && allergies.palmoil) isFlagged = true;
                    if (
                      (ing.id === 'vanillin' ||
                        ing.id === 'potassium-sorbate' ||
                        ing.id === 'sodium-benzoate') &&
                      allergies.additives
                    ) {
                      isFlagged = true;
                    }

                    return (
                      <button
                        key={ing.id}
                        type="button"
                        className={`ing-chip ${
                          isFlagged
                            ? 'ing-allergen-flagged'
                            : ing.type === 'caution'
                            ? 'ing-caution'
                            : 'ing-clean'
                        }`}
                        onClick={() => onSelectIngredient(ing.id)}
                      >
                        <span>{isFlagged ? '⚠️' : ing.type === 'caution' ? '⚡' : '🌿'}</span>
                        <span>{ing.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Additives & Preservative Verdict */}
              <div className="additives-summary-card">
                <div className="additive-status-icon">{currentProduct.additives.icon}</div>
                <div className="additive-status-text">
                  <strong>{currentProduct.additives.title}</strong>
                  <p>{currentProduct.additives.desc}</p>
                </div>
              </div>

              {/* Swap Recommendation Box */}
              {currentProduct.swap && (
                <div className="swap-recommendation-box">
                  <div className="swap-header">
                    <span className="swap-badge">💡 AI Recommended Healthier Swap</span>
                    <span className="swap-delta text-emerald">{currentProduct.swap.delta}</span>
                  </div>
                  <div className="swap-body">
                    <div className="swap-product-thumb">🌰</div>
                    <div className="swap-details">
                      <strong>{currentProduct.swap.title}</strong>
                      <p>{currentProduct.swap.desc}</p>
                    </div>
                    <button
                      className="btn btn-sm btn-secondary"
                      onClick={() => alert('Viewing swap details: Available in 3 local stores near you!')}
                    >
                      View Product
                    </button>
                  </div>
                </div>
              )}

              {/* Food History Auto-Save Action */}
              <div className="history-save-banner">
                <div className="history-save-info">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2">
                    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                    <polyline points="17 21 17 13 7 13 7 21"></polyline>
                    <polyline points="7 3 7 8 15 8"></polyline>
                  </svg>
                  <span>
                    Auto-saved to your <strong>Personal Food History</strong>
                  </span>
                </div>
                <a href="#history-preview" className="history-save-link">
                  View Nutrition Diary &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
