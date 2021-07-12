import Head from "next/head";

import styles from "../styles/Layout.module.css";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ title, name, content, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name={name} content={content} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Kharid Lo",
  name: "Neighborhood Grocery Store",
  content: "Every Grocery shop can sell online now!",
};
