import React from "react";
import Button from "../Button";

import styles from "./styles.module.scss";

type ICardProps = {
  image: string;
  alt: string;
  title: string;
};

export const CardRecipes: React.FC<ICardProps> = ({ image, alt, title }) => {
  return (
    <div className={styles.container}>
      <img src={image} alt={alt} />

      <div className={styles.textContainer}>
        <h3>{title}</h3>
        <Button>See Recipe</Button>
      </div>
    </div>
  );
};
export default CardRecipes;
