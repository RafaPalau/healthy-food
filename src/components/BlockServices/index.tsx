import Button from "../Button";
import styles from "./styles.module.scss";

export default function BlockServices() {
  return (
    <div className={styles.container}>
      <img src='/images/bloco_services.svg' alt='' />
      <div className={styles.content}>
        <h1>The best services ready</h1> <h1>To serve you</h1>
        <p>
          far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
        <p>
          Separated they live in Bookmarksgrove right at the coast of the
          Semantics, a large language ocean.
        </p>
        <p>
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia.
        </p>
        <Button>Know More</Button>
      </div>
    </div>
  );
}
