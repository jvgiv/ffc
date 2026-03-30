import React from 'react'
import '../../(content)/caddybook/caddybook.css'

export default function SummaryPage({ notes }) {
  return (
    <>
    <div className="doc-header"><span className="brand-left">Far Flung Change · the Caddy Book</span><span className="brand-right">Forging Fog Into Focus</span></div>
    <div className="summary-page">
    <div className="summary-outer">
        <div className="summary-header">
        <span className="sh-brand">FAR FLUNG CHANGE</span>
        <span className="sh-right">the Caddy Book</span>
        </div>
        <div className="summary-title-bar">
        <p>YOUR CADDY BOOK of <em><strong>ORIENTATION</strong></em></p>
        </div>
        <div className="summary-grid">
        <div className="summary-items">
            <div className="summary-item">
            <div className="summary-num">1</div>
            <div className="summary-item-text"><strong>Position</strong><em>where you are</em></div>
            </div>
            <div className="summary-item">
            <div className="summary-num">2</div>
            <div className="summary-item-text"><strong>Terrain</strong><em>what surrounds you</em></div>
            </div>
            <div className="summary-item">
            <div className="summary-num">3</div>
            <div className="summary-item-text"><strong>Forces</strong><em>what's acting on you</em></div>
            </div>
            <div className="summary-item">
            <div className="summary-num">4</div>
            <div className="summary-item-text"><strong>Questions</strong><em>what matters now</em></div>
            </div>
            <div className="summary-item">
            <div className="summary-num">5</div>
            <div className="summary-item-text"><strong>Pace</strong><em>where tempo ties in</em></div>
            </div>
            <div className="summary-item">
            <div className="summary-num">6</div>
            <div className="summary-item-text"><strong>Options</strong><em>how to scan for lines</em></div>
            </div>
            <div className="summary-item">
            <div className="summary-num">7</div>
            <div className="summary-item-text"><strong>Readiness</strong><em>when clarity compounds</em></div>
            </div>
        </div>
        <div className="summary-notes-col">
            <div className="summary-notes-entry">
            <span className="sn-placeholder">your notes will be recorded here after enrollment</span>
            <div className="sn-line"></div><div className="sn-line light"></div><div className="sn-line light"></div>
            </div>
            <div className="summary-notes-entry">
            <span className="sn-placeholder">your notes will be recorded here after enrollment</span>
            <div className="sn-line"></div><div className="sn-line light"></div><div className="sn-line light"></div>
            </div>
            <div className="summary-notes-entry">
            <span className="sn-placeholder">your notes will be recorded here after enrollment</span>
            <div className="sn-line"></div><div className="sn-line light"></div><div className="sn-line light"></div>
            </div>
            <div className="summary-notes-entry">
            <span className="sn-placeholder">your notes will be recorded here after enrollment</span>
            <div className="sn-line"></div><div className="sn-line light"></div><div className="sn-line light"></div>
            </div>
            <div className="summary-notes-entry">
            <span className="sn-placeholder">your notes will be recorded here after enrollment</span>
            <div className="sn-line"></div><div className="sn-line light"></div><div className="sn-line light"></div>
            </div>
            <div className="summary-notes-entry">
            <span className="sn-placeholder">your notes will be recorded here after enrollment</span>
            <div className="sn-line"></div><div className="sn-line light"></div><div className="sn-line light"></div>
            </div>
            <div className="summary-notes-entry">
            <span className="sn-placeholder">your notes will be recorded here after enrollment</span>
            <div className="sn-line"></div><div className="sn-line light"></div><div className="sn-line light"></div>
            </div>
        </div>
        </div>
        <div className="summary-footer">
        <p>Each element has its own page. Space for notes included.</p>
        {/* <div className="summary-scorecard-badge">
            <div className="ssb-icon">⊙</div>
            <div className="ssb-text">Score<br />Card →</div>
        </div> */}
        </div>
        <div className="summary-forging"><p>Forging Fog Into Focus</p></div>
    </div>
    </div>
    </>
  )
}
