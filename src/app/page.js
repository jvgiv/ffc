import Image from "next/image";
import styles from "./page.module.css";
import Contact from './(content)/contact/page';
import Disclosures from "./components/ui/Disclosures";
import Footer from "./components/ui/Footer"
import Header from "./components/ui/Header"

export default function Home() {
  return (
    <div className={styles.page}>
      {/* <main className={styles.main}> */}
      <Header />
      <Image
          // className={styles.logo}
          src="/pfo.svg"
          alt="Practical Financial Orientation"
          width={300}
          height={300}
          priority
        />  
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
          src="/fgus.svg"
          alt="For Growin Up's Sake"
          width={250}
          height={250}
          priority
        />  
        <Image
          // className={styles.logo}
          src="/mclock.svg"
          alt="Money Clock"
          width={250}
          height={250}
          priority
        />  
        <Image
          // className={styles.logo}
          src="/lt.svg"
          alt="Lets talk"
          width={300}
          height={300}
          priority
        />  
        {/* <Contact />  */}
        <Footer />
        <Disclosures />
      {/* </main> */}
    </div>
  );
}
