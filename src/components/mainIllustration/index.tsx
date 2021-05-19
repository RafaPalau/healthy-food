
import { FiSearch } from "react-icons/fi";
import Button from "../Button";
import Input from "../Input";

import styles from "./styles.module.scss";

export default function MainIllustration() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>
          Ready for <br /> Trying a new <br /> recipe
        </h1>
        <div>
          <Input placeholder="Search healthy recipes"/>
          <Button>
            <FiSearch />
          </Button>
        </div>
      </div>
    </div>
  );
}
