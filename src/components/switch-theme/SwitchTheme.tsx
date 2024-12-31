import React, { useState } from "react";
import { CiDark, CiLight } from "react-icons/ci";

import styles from "./SwitchTheme.styles.scss";

const THEMES = {
  DARK: "dark",
  LIGHT: "light",
};

const SwitchTheme = () => {
  const [theme, setTheme] = useState(() =>
    document.querySelector("html")?.getAttribute("data-theme")
  );
  const handleChangeTheme = () => {
    if (theme === THEMES.DARK) {
      setTheme("light");
      document.querySelector("html")?.setAttribute("data-theme", "light");
      return;
    }
    setTheme("dark");
    document.querySelector("html")?.setAttribute("data-theme", "dark");
  };

  return (
    <div className={styles.container} onClick={handleChangeTheme}>
      {theme === THEMES.DARK ? (
        <CiLight color='var(--text-color)' />
      ) : (
        <CiDark color='var(--text-color)' />
      )}
    </div>
  );
};

export default React.memo(SwitchTheme);
