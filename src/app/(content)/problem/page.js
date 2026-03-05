import React from 'react'
import "./problem.css"

export default function Problem() {
  return (
    <div className="container">
        <div className="friction-grid">
            <div className="friction-copy reveal visible">
                <span className="section-label">THE PROBLEM</span>
                <h2 className="section-title">YOU'RE DECIDING WITHOUT A MAP.</h2>
                <p>We're each born capable. But almost no one ever gets a clear overview of the financial terrain before they're expected to navigate it.</p>
                <p>So you proceed anyway — because <strong>life doesn't wait.</strong>  You sign documents that feel "almost" clear. You accept explanations that feel "close enough." And somewhere beneath every decision, there's a quiet unease.</p>
                <ul className="pain-list">
                    <li>
                        <span className="pain-num">01</span>
                        Signing agreements you don't fully understand
                    </li>
                    <li>
                        <span className="pain-num">02</span>
                        Making major commitments without knowing the trade-offs
                    </li>
                    <li>
                        <span className="pain-num">03</span>
                    Sensing there's more to know — but not knowing where to start
                    </li>
                </ul>
            </div>
        </div>
        <div className="friction-stat reveal visible">
            <div className="stat-item">
                <p className="stat-num">
                    88
                    <span>%</span>
                </p>
                <p className="stat-label">of adults report lacking confidence in at least one core area of personal finance</p>
                <div className="stat-divider" />
                <p className="stat-num">0</p>
                <p className="stat-label">required personal finance courses in most high school and college curricula</p>
                <div className="stat-divider" />
                <p className="stat-num">
                    <span>FOR</span>
                    <br />
                    GROWIN'UP'S
                    <br />
                    SAKE
                </p>
                <p className="stat-label">clarity should come first — not after the fact</p>
            </div>
        </div>
    </div>
  )
}
