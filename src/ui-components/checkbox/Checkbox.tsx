import React from "react";

import styles from "./Checkbox.styles.scss";
import { CheckboxProps } from "./Checkbox.types";

const Checkbox: React.FC<CheckboxProps> = ({
  size = "medium",
  disabled,
  onChange,
  checked,
  ...props
}) => {
  const className = `${styles.input} ${styles[size]}`;

  return (
    <div className={styles.container}>
      <input
        type='checkbox'
        onChange={onChange}
        disabled={disabled}
        className={className}
        checked={checked}
        {...props}
      />
    </div>
  );
};

export default Checkbox;
