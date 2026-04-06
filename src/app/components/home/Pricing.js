import React from 'react'
import "../../homepage.css"
import Link from 'next/link'
import { AGREEMENT_DEFINITIONS } from '@/lib/agreements'

export default function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="reveal">
          <span className="section-label">The MenuBoard</span>
          <h2 className="section-title">Flat-fee. No products. No pressure.</h2>
        <ul className="pricing-features reveal">
          <li>Learn core financial concepts and trade-offs</li>
          <li>Access a 360-point Compendium of DogStar Definitions</li>
          <li>Explore 6 Supplements with 275+ more terms explained</li>
          <li>Ask any questions - anytime: get answers - in 2 business days</li>
          <li>Have follow-up conversations by phone, Zoom, or in person</li>
          <li>Process information without products, pressure, or pitches</li>
        </ul>
        </div>
        <div className="pricing-grid reveal" style={{ transitionDelay: "0.1s" }}>
          <div className="pricing-card featured">
            <div className="pricing-badge">Core Program</div>
            <div className="pricing-name">Financial Orientation</div>
            <div className="pricing-price">$500 <span>/ 1 year</span></div>
            <div className="pricing-desc">A flat-fee educational engagement to foster financial clarity and confidence. Forge Fog into Focus.</div>
            <ul className="pricing-features">
              <li>No recommendations</li>
              <li>No advice</li>
              <li>No management</li>
              <li>No implementation</li>
            </ul>
            <div className="pricing-cta">
              <Link
                href={`/agreements/${AGREEMENT_DEFINITIONS["financial-orientation"].slug}`}
                className="btn-primary"
                style={{ width: "100%", textAlign: "center", display: "block" }}
              >
                Click Here to Review the Agreement -&gt;
              </Link>
            </div>
          </div>
          <div className="pricing-card">
            <div className="pricing-badge" style={{ background: "#cececeef", border: "1px solid var(--border)", color: "var(--red)" }}>Add-on</div>
            <div className="pricing-name">Premium Expansion Pack</div>
            <div className="pricing-price">+$250</div>
            <div className="pricing-desc">For orienteers who value structure, tools, and accountability.</div>
            <ul className="pricing-features">
              <li>Dynamic progress mapping</li>
              <li>Scheduled check-ins & follow ups</li>
              <li>Personal financial aggregator to:</li>
              <li>View assets + debts</li>
              <li>Track Spending</li>
              <li>Build budgets</li>
              <li>Set + prioritize goals</li>
            </ul>
            <div className="pricing-cta">
              <Link
                href={`/agreements/${AGREEMENT_DEFINITIONS["premium-expansion-pack"].slug}`}
                className="btn-primary"
                style={{ width: "100%", textAlign: "center", display: "block" }}
              >
                Click Here to Review the Agreement -&gt;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
