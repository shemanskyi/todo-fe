import React from "react";

import styles from "./Input.styles.scss";
import { InputProps } from "./Input.types";

const Input: React.FC<InputProps> = ({
  size = "medium",
  disabled,
  onChange,
  value,
  error,
  label,
  name,
  type = "text",
  ...props
}) => {
  const className = `${styles.input} ${styles[size]}`;

  return (
    <div className={styles.container}>
      {label && <span className={styles.label}>{label}</span>}
      <input
        type={type}
        onChange={onChange}
        disabled={disabled}
        className={className}
        value={value}
        {...props}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

export default Input;
