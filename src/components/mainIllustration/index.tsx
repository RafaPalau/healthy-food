import React from "react";
import { FiSearch } from "react-icons/fi";

import styles from "./styles.module.scss";
import Input from "../Input";
import Button from "../Button";

export default function MainIllustration() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>
          Ready for <br /> Trying a new <br /> recipe
        </h1>
        <div className={styles.containerInput}>
          <Input placeholder='Search healthy recipes' />
          <Button>
            <FiSearch />
          </Button>
        </div>
      </div>
      <img src='/images/Illustration.svg' alt='' />
    
    </div>
  );
}
