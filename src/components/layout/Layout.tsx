import React, { JSX } from "react";

import { Footer, TopBar } from "./components";

import styles from "./Layout.styles.scss";

const Layout = ({ children }: { children: JSX.Element }) => (
  <div className={styles.wrapper}>
    <TopBar />
    <div className={styles.content}>{children}</div>
    <Footer />
  </div>
);

export default React.memo(Layout);
