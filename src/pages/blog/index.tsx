import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Persist } from "formik-persist";
import styles from "./styles.module.scss";
import { useCookies } from "react-cookie";
import Footer from "../../components/Footer";
import Head from "next/head";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog | Healthy Food</title>
      </Head>
      <h1>Blog</h1>
      <img src='/images/Illustration.svg' alt='' />
      <Footer />
    </>
  );
}
