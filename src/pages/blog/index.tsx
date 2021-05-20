import React from "react";
import styles from "./styles.module.scss";
import Head from "next/head";

export default function Blog() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog | Healthy Food</title>
      </Head>
      <h1>Blog</h1>
    
    </div>
  );
}
