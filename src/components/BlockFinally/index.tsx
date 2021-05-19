import Button from "../Button";
import Input from "../Input";

import styles from "./styles.module.scss";

export default function BlockFinally() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Join ou membership <br/> to get special offer</h2>
        <div>
        <Input placeholder='Enter your email address' />
        <Button>Join</Button>
        </div>
      </div>
      <img src='/images/bloco_final_image.svg' alt='' />
    </div>
  );
}
