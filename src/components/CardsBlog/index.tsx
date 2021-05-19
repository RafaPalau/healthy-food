import React from "react";

import styles from "./styles.module.scss";

type ICardProps = {
  image: string;
  alt: string;
  title: string;
  name: string;
  avatar: string;
};

export const CardsBlog: React.FC<ICardProps> = ({
  image,
  alt,
  title,
  name,
  avatar,
}) => {
  return (
    <div className={styles.container}>
      <img src={image} alt={alt} />

      <div className={styles.textContainer}>
        <h3>{title}</h3>
        <img src={avatar} alt={alt} />
        <span>{name}</span>
      </div>
    </div>
  );
};
export default CardsBlog;
