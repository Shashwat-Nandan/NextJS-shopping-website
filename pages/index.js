// import Image from "next/image";
// import Link from "next/link";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Kharid Lo</h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>Some Products</div>
      </main>

      <footer className={styles.footer}>
        <span className={styles.note}>
          Copyright All rights reserved PROPELYTICS Consulting private limited
        </span>
      </footer>
    </div>
  );
}
