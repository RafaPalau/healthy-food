import React, { InputHTMLAttributes } from "react";

type IInputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<IInputProps> = ({ ...rest }) => {
  return <input {...rest} />;
};
export default Input;
