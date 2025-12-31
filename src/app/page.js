import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* <main className={styles.main}> */}
        <Image
          // className={styles.logo}
          src="/FFEmblem.png"
          alt="FFC logo"
          width={250}
          height={250}
          priority
        />      
      {/* </main> */}
    </div>
  );
}
