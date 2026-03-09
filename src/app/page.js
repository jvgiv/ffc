import Problem from "./(content)/problem/page";
import Plan from "./(content)/plan/page";
import Pricing from "./(content)/pricing/page";
import Guide from "./(content)/guide/page";
import NewScorecard from "./(content)/newScorecard/page";
import "./homepage.css";

export default function Home() {
  return (
    <main className="home-page">
      <section className="hero">
        <div className="hero-inner container">
          <p className="hero-eyebrow">First Financial Advisory - Est. 1974</p>
          <div className="hero-logo-ring">
            <div className="logo-c">C</div>
            <div className="logo-dot"></div>
          </div>
          <h1 className="hero-title">
            <em>practical financial</em>
            <span className="hero-title-main">ORIENTATION</span>
          </h1>
          <p className="hero-sub">
            Most adults never get a clear introduction to managing their own money.
            Far Flung Change fills that gap -{" "}
            <strong style={{ color: "var(--white)" }}>before it costs you.</strong>
          </p>
          <div className="hero-actions">
            <a href="#pricing" className="btn-primary">Get Oriented -&gt;</a>
            <a href="/scorecard" className="btn-ghost">Unlock Free ScoreCard</a>
          </div>
          <div className="scroll-hint">
            <span>scroll</span>
            <div className="scroll-line"></div>
          </div>
        </div>
      </section>
      <Problem />
      <Guide />
      <Plan />
      <Pricing />
      <NewScorecard />
    </main>
  );
}
