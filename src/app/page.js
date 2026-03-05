import Image from "next/image";
import styles from "./page.module.css";
import Disclosures from "./components/ui/Disclosures";
import TopHeader from "./components/ui/TopHeader"
import Header from "./components/ui/Header"
import Transition from "./components/ui/Transition";
import { Button } from "@mui/material";
import Problem from "./(content)/problem/page";
import Program from "./(content)/program/page";
import Plan from "./(content)/plan/page";
import Pricing from "./(content)/pricing/page";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* <main className={styles.main}> */}
        {/* <Image
          className="images-test"
          src="/ffc-dark.svg"
          alt="FFC logo"
          width={250}
          height={250}
          priority
        />     
        <Image
          className="images-test"
          src="/difbe.svg"
          alt="Be Different"
          width={250}
          height={250}
          priority
        />  
        <p className="ptc">Punch  :  THE CLOCK</p>
        <a href="https://calendly.com/its-about-time" target="_blank" rel="noopener noreferrer" className="money-clock">
        <Image
          className="images-test"
          src="/clocks.gif"
          alt="Money Clock"
          width={324}
          height={270}
          priority
          />  
          </a>
        <p className="ptc-2">Own :  YOUR TIME</p> */}


  <p className="hero-eyebrow">First Financial Advisory · Est. 1974</p>
  <div className="hero-logo-ring">
    <div className="logo-c">C</div>
    <div className="logo-dot"></div>
  </div>
  <h1>
    <em>practical financial</em>
    Orientation
  </h1>
  <p className="hero-sub">
    Most adults never get a clear introduction to managing their own money. 
    Far Flung Change fills that gap — <strong style={{color: "var(--white)"}}>before it costs you.</strong>
  </p>
  <div className="hero-actions">
    <a href="#cta" className="btn-primary">Get Oriented →</a>
    <a href="#scorecard" className="btn-ghost">Unlock Free ScoreCard</a>
  </div>
  <div className="scroll-hint">
    <span>scroll</span>
    <div className="scroll-line"></div>
  </div>


    <Problem />
    <Plan />
    <Pricing />
    </div>
  );
}
