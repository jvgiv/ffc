import Image from "next/image";
import styles from "./page.module.css";
import Disclosures from "./components/ui/Disclosures";
import TopHeader from "./components/ui/TopHeader"
import Header from "./components/ui/Header"
import Transition from "./components/ui/Transition";
import Inputs from "./components/Inputs";

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.logoWrap}>
          <Image
          className="images-test"
          src="/ffc-dark.svg"
          alt="FFC logo"
          width={250}
          height={250}
          priority
          />
        </div>
        <div className={styles.copyBlock}>
          {/* <p className={styles.eyebrow}>First Financial Concepts</p> */}
          <h2 className={styles.title}>
            This page is currently under construction.
          </h2>
          <p className={styles.subtitle}>
            We are putting the finishing touches on the full experience. Join
            the list below and we will let you know when everything is live.
          </p>
        </div>
        <Inputs />
      </section>
        {/* 
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
        <p className={styles.footerNote}>
          Far Flung Change is a division of First Financial Advisory Services
        </p>
    </div>
  );
}
