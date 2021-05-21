import React, { InputHTMLAttributes } from "react";
import styles from "./styles.module.scss";

type IInputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<IInputProps> = ({ ...rest }) => {
  return <input className={styles.input} {...rest} />;
};
export default Input;
