import React from "react";
import Link from "next/link";
import "../../(content)/definitions/definitions.css";

export default function HomePageDefs() {
  return (
    <div className="defs-homepage" id="definitions-preview">
      <div className="container">
        <div className="scorecard-inner">
          <div
            className="definitions-visual reveal"
            style={{ transitionDelay: "0.15s" }}
          >
            <div className="hole-grid-defs">
              <div className="entry-layout">
                <div className="entry-header fade-up">
                  <div id="entryNum" className="entry-num">
                    2
                  </div>
                  <div id="entryWord" className="entry-word">
                    RISK
                  </div>
                  <div className="entry-meta">
                    <span id="entryPron" className="entry-pron">
                      /risk/
                    </span>
                    <span id="entryPos" className="entry-pos">
                      Noun
                    </span>
                  </div>
                </div>
                <div className="entry-divider"></div>
                <div id="entryDef" className="entry-def fade-up">
                  The possibility that outcomes will differ from expectations,
                  encompassing both downside loss and upside deviation.
                </div>
                <div id="entryNoteWrap" className="entry-note fade-up">
                  <div id="entryNoteLabel" className="entry-note-label">
                    Field Note:
                  </div>
                  <div id="entryNote" className="entry-note-text">
                    Risk is uncertainty, not danger. Conflating the two leads to
                    decisions that eliminate both loss and growth. Understanding
                    the distinction allows risk to be managed rather than simply
                    avoided.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="scorecard-copy reveal">
            <span className="section-label">Dogstar Definitions</span>
            <h2 className="section-title">Your Financial Dictionary</h2>
            <p>
              The Dogstar Definitions are your personal field guide through 18
              essential areas of financial life from Accounts and Cash Flow to
              Investing and Clarity.
            </p>
            <p>
              Think of it as your go to resource for understanding financial
              concepts.
            </p>
            <Link
              href="/definitions"
              className="btn-ghost"
              style={{ marginTop: "1rem", display: "inline-block" }}
            >
              Unlock Dogstar Definitions -
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
