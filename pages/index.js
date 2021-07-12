// import Image from "next/image";
// import Link from "next/link";

import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Carousel from "../components/Carousel";

const carouselData = ["Item1", "Item2", "Item3"];

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}>
          <Carousel
            carouselItems={[
              <div key="item1">Item 1</div>,
              <div key="item2">Item 2</div>,
            ]}
          />
          <div className={styles.grid}>Some Products</div>
        </main>
      </div>
    </Layout>
  );
}
