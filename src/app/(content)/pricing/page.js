import React from 'react'
import "../../homepage.css"

export default function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="reveal visible">
          <span className="section-label">The MenuBoard</span>
          <h2 className="section-title">Flat-fee. No products. No pressure.</h2>
        </div>
        <div className="pricing-grid reveal visible" style={{ transitionDelay: "0.1s" }}>
          <div className="pricing-card featured">
            <div className="pricing-badge">Core Program</div>
            <div className="pricing-name">Financial Orientation</div>
            <div className="pricing-price">$500 <span>/ 1 year</span></div>
            <div className="pricing-desc">A flat-fee educational engagement to foster financial clarity and confidence.</div>
            <ul className="pricing-features">
              <li>Learn core financial concepts and trade-offs</li>
              <li>Ask real-world questions, anytime</li>
              <li>Conversations by phone, Zoom, or in person</li>
              <li>Guidance without products, pressure, or pitches</li>
              <li>Orientation only - no advice, no management, no implementation</li>
            </ul>
            <div className="pricing-cta">
              <a
                href="https://calendly.com/its-about-time"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ width: "100%", textAlign: "center", display: "block" }}
              >
                Get Started -&gt;
              </a>
            </div>
          </div>
          <div className="pricing-card">
            <div className="pricing-badge" style={{ background: "transparent", border: "1px solid var(--border)", color: "var(--gray)" }}>Add-on</div>
            <div className="pricing-name">ScoreCard Expansion</div>
            <div className="pricing-price">+$250</div>
            <div className="pricing-desc">For orienteers who value added structure and follow-through.</div>
            <ul className="pricing-features">
              <li>Scheduled check-ins</li>
              <li>Progress tracking</li>
              <li>Understanding personal goals</li>
              <li>Self-assessment tool</li>
            </ul>
          </div>
          <div className="pricing-card">
            <div className="pricing-badge" style={{ background: "transparent", border: "1px solid var(--border)", color: "var(--gray)" }}>Add-on</div>
            <div className="pricing-name">Net$Worth Aggregator</div>
            <div className="pricing-price">+$50</div>
            <div className="pricing-desc">For orienteers who value a financial dashboard and ledger.</div>
            <ul className="pricing-features">
              <li>Track assets and debts</li>
              <li>Consolidate spending data</li>
              <li>Build budgets</li>
              <li>Identify financial goals</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
