import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p>© Copyrights 2019 Stack. All Rights Reserved.</p>
        <nav>
          <a href='/privacityPolicy'>Privacy Policy</a>
          <a href='/termsAndcondicions'>Terms and conditions</a>
        </nav>
      </div>
    </div>
  );
}
