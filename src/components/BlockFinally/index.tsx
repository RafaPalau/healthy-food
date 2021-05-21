

import React from "react";
import { FiSearch } from "react-icons/fi";

import styles from "./styles.module.scss";
import Input from "../Input";
import Button from "../Button";

export default function BlockFinally() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>
        Join ou membership <br /> to get special offer
        </h1>
        <div className={styles.containerInput}>
        <div>
            <Input placeholder='Enter your email address' />
            <Button>Join</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
