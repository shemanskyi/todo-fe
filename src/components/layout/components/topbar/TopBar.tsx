import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./TopBar.styles.scss";

import { SwitchTheme } from "components";

const TopBar = () => {
  const { t } = useTranslation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.pathname = "/login";
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>TODO APP</div>
      <div className={styles.actions}>
        <SwitchTheme />
        <span className={styles.logout} onClick={handleLogout}>
          {t("auth.logout")}
        </span>
      </div>
    </div>
  );
};

export default React.memo(TopBar);
