'use client';

import { useState } from 'react';
import { INITIAL_HISTORY_ITEMS } from '@/data/mockData';

export default function HistoryDashboard() {
  const [filter, setFilter] = useState('all');

  const filteredItems = INITIAL_HISTORY_ITEMS.filter((item) => {
    if (filter === 'all') return true;
    return item.type === filter;
  });

  return (
    <section className="history-preview-section" id="history-preview">
      <div className="container">
        <div className="section-header text-center">
          <div className="pill-badge">Personal Food Diary</div>
          <h2 className="section-title">Track What Enters Your Body Over Time</h2>
          <p className="section-subtitle">
            Every scan builds your personal food consumption log. Track your weekly nutrition score, detect additive exposure patterns, and maintain your allergen-safe streak.
          </p>
        </div>

        {/* Interactive History Dashboard Component */}
        <div className="history-dashboard glass-panel">
          {/* Top Metrics Row */}
          <div className="dashboard-metrics-grid">
            <div className="metric-card">
              <div className="metric-header">
                <span className="metric-title">Weekly Average Score</span>
                <span className="metric-trend trend-up">↑ +14%</span>
              </div>
              <div className="metric-main">
                <span className="metric-big-num">84</span>
                <span className="metric-sub">/100 (Grade A-)</span>
              </div>
              <div className="metric-bar">
                <div className="metric-bar-fill" style={{ width: '84%' }}></div>
              </div>
              <span className="metric-footer">Better than 89% of active members</span>
            </div>

            <div className="metric-card">
              <div className="metric-header">
                <span className="metric-title">Allergen-Free Streak</span>
                <span className="metric-badge-safe">Safe</span>
              </div>
              <div className="metric-main">
                <span className="metric-big-num text-emerald">28</span>
                <span className="metric-sub">Days Clean</span>
              </div>
              <span className="metric-footer">0 accidental allergens consumed</span>
            </div>

            <div className="metric-card">
              <div className="metric-header">
                <span className="metric-title">Additive Exposure</span>
                <span className="metric-trend trend-down">↓ -32%</span>
              </div>
              <div className="metric-main">
                <span className="metric-big-num text-cyan">Low</span>
                <span className="metric-sub">1 flagged additive</span>
              </div>
              <span className="metric-footer">Avoided 14 synthetic emulsifiers</span>
            </div>

            <div className="metric-card">
              <div className="metric-header">
                <span className="metric-title">Total Products Scanned</span>
                <span className="metric-icon-clock">🕒</span>
              </div>
              <div className="metric-main">
                <span className="metric-big-num">142</span>
                <span className="metric-sub">Items Cataloged</span>
              </div>
              <span className="metric-footer">Updated 12 mins ago</span>
            </div>
          </div>

          {/* History Timeline & Filter Controls */}
          <div className="history-timeline-container">
            <div className="timeline-toolbar">
              <div className="timeline-title-row">
                <h3>Recent Scan Journal</h3>
                <span className="journal-sub">Interactive preview of saved scans</span>
              </div>
              <div className="timeline-filters">
                <button
                  className={`filter-tab ${filter === 'all' ? 'active' : ''}`}
                  onClick={() => setFilter('all')}
                >
                  All Scans
                </button>
                <button
                  className={`filter-tab ${filter === 'healthy' ? 'active' : ''}`}
                  onClick={() => setFilter('healthy')}
                >
                  Healthy (80+)
                </button>
                <button
                  className={`filter-tab ${filter === 'flagged' ? 'active' : ''}`}
                  onClick={() => setFilter('flagged')}
                >
                  Allergen/Flagged
                </button>
              </div>
            </div>

            {/* List of historical items */}
            <div className="history-items-list">
              {filteredItems.map((item) => (
                <div key={item.id} className="history-row">
                  <div className="history-time-col">
                    <span className="history-time">{item.time}</span>
                    <span className="history-context">{item.context}</span>
                  </div>
                  <div className={`history-item-thumb ${item.thumbClass}`}>{item.icon}</div>
                  <div className="history-item-details">
                    <strong className="history-item-name">{item.name}</strong>
                    <span className="history-item-meta">{item.meta}</span>
                  </div>
                  <div className={`history-status-tag ${item.statusClass}`}>{item.statusTag}</div>
                  <div className={`history-score ${item.scoreClass}`}>{item.score}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
