import Image from "next/image";
import styles from "./page.module.css";
import Disclosures from "./components/ui/Disclosures";
import TopHeader from "./components/ui/TopHeader"
import Header from "./components/ui/Header"
import Transition from "./components/ui/Transition";
import { Button } from "@mui/material";

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

        <p>FIRST FINANCIAL ADVISORY · EST. 1974</p>
        <h1>
          <em>practical financial</em> Orientation
        </h1>
        <p>
    Most adults never get a clear introduction to managing their own money. 
    Far Flung Change fills that gap — 
    <strong>before it costs you.</strong>
    </p>
    <div>
      <Button>Get Oriented →</Button>
      <Button>Unlock Free ScoreCard</Button>
    </div>
    </div>
  );
}
