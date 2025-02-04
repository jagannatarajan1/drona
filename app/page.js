import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>jkjlkjlk</h1>
      <Image src="/pic.png" alt="Vercel logomark" width={40} height={40} />
    </div>
  );
}
