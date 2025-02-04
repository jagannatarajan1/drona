import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.centerMain}>
        <p>
          hi i have only limited amount of time to complete the task , which is
          not enough, i only able to complete the nav and the Sidebar and make
          them dynamic
        </p>
        <div>
          <Image src="/pic.png" alt="Vercel logomark" width={40} height={40} />
        </div>
        <button className={styles.mainButton}>
          <Link href="/dashboard"> Click here to see the Dashboard</Link>
        </button>
      </div>
    </div>
  );
}
