import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <h1>Healthy Food</h1>
        <nav>
          <a href='/'>Healthy Recipes</a>
          <a href='/blog'>Blog</a>
          <a href='/join'>Join</a>
          <a href='/register'>
            <button>Register</button>
          </a>
        </nav>
      </div>
    </header>
  );
}
