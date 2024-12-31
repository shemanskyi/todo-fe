import React from "react";

import styles from "./Button.styles.scss";
import { ButtonProps } from "./Button.types";

const Button: React.FC<ButtonProps> = ({
  size = "medium",
  variant = "primary",
  type = "button",
  disabled,
  text,
  onClick,
  ...props
}) => {
  const className = `${styles.button} ${styles[variant]} ${styles[size]}`;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
