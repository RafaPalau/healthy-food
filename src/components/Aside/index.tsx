import React, { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import styles from "./styles.module.scss";

const Aside: React.FC = () => {
  const [toggleMenuIsOpened, setToggleMenuIsOpened] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenuIsOpened(!toggleMenuIsOpened);
  };

  return (
    <div className={styles.menuLateral}>
      {toggleMenuIsOpened ? (
        <div className={styles.hamburgerMenu}>
          <header className={styles.headerContent}>
            <button onClick={handleToggleMenu}>
              <MdClose />
            </button>
          </header>

          <nav className={styles.nav}>
            <a href='/'>Healthy Recipes</a>
            <a href='/blog'>Blog</a>
            <a href='/join'>Join</a>
            <a href='/register'>Register</a>
          </nav>
        </div>
      ) : (
        <header className={styles.headerContent}>
          <button onClick={handleToggleMenu}>
            <MdMenu />
          </button>
        </header>
      )}
    </div>
    // <div className={styles.hamburgerMenu}>

    //   <header className={styles.headerContent} >
    //     <button onClick={handleToggleMenu} >
    //       {toggleMenuIsOpened ? <MdClose />  : <MdMenu />}

    //     </button>
    //   </header>

    //   <nav>
    //     <a href='/'>Healthy Recipes</a>
    //     <a href='/register'>Register</a>
    //   </nav>
    // </div>
  );
};
export default Aside;
