import React, { ButtonHTMLAttributes } from "react";

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<IButtonProps> = ({ children, ...rest }) => {
  return <button {...rest}>{children}</button>;
};
export default Button;
