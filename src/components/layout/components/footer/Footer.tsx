import React from "react";

import styles from "./Footer.styles.scss";

const TopBar = () => {
  return (
    <div className={styles.container}>
      <span>TODO APP | 2024</span>
    </div>
  );
};

export default React.memo(TopBar);
