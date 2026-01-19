import Image from "next/image";
import styles from "./page.module.css";
import Contact from './(content)/contact/page';
import Disclosures from "./components/ui/Disclosures";
import TopHeader from "./components/ui/TopHeader"
import Header from "./components/ui/Header"
import Transition from "./components/ui/Transition";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* <main className={styles.main}> */}
      <TopHeader /> 
      {/* HAVE TOP HEADER HAVE WHITE BACKGROUND BLACK TEXT */}
      <Header />
      {/* <Image
          // className={styles.logo}
          src="/pfo.svg"
          alt="Practical Financial Orientation"
          width={300}
          height={300}
          priority
        />   */}
        <Image
          // className={styles.logo}
          src="/ffc-dark.svg"
          alt="FFC logo"
          width={250}
          height={250}
          priority
        />     
        <Image
          // className={styles.logo}
          src="/difbe.svg"
          alt="Be Different"
          width={250}
          height={250}
          priority
        />  
        {/* <Transition /> */}
        <p className="ptc">Punch the Clock:  Own Your Time</p>
        <a href="https://calendly.com/its-about-time" target="_blank" rel="noopener noreferrer">
        <Image
          // className={styles.logo}
          src="/mclockwhite.svg"
          alt="Money Clock"
          width={275}
          height={275}
          priority
          />  
          </a>
        {/* <Contact />  */}
        
        <Disclosures />
      {/* </main> */}
    </div>
  );
}
