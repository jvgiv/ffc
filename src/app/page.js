import Image from "next/image";
import styles from "./page.module.css";
import Disclosures from "./components/ui/Disclosures";
import TopHeader from "./components/ui/TopHeader"
import Header from "./components/ui/Header"
import Transition from "./components/ui/Transition";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* <main className={styles.main}> */}
        <Image
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
        <p className="ptc-2">Own :  YOUR TIME</p>
    </div>
  );
}
