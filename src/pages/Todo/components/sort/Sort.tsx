import { useAppDispatch } from "hooks/useStore";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { TbArrowsSort } from "react-icons/tb";
import { Popover } from "react-tiny-popover";

import { SORT } from "pages/Todo/Todo.constants";
import { sortTodo } from "store/ducks/todo/todo.slice";
import styles from "./Sort.styles.scss";

export default function Sort() {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const handleClick = (value: string) => {
    //@ts-ignore
    dispatch(sortTodo(value));
    setOpen(false);
  };

  const Content = () => (
    <div className={styles.popover}>
      <div className={styles.item} onClick={() => handleClick(SORT.text)}>
        {t("common.by-text")}
      </div>
      <div className={styles.item} onClick={() => handleClick(SORT.date)}>
        {t("common.by-date")}
      </div>
    </div>
  );

  return (
    <div className={styles.wrapper}>
      <Popover
        isOpen={open}
        positions={["bottom"]}
        align='end'
        content={<Content />}
      >
        <div className={styles.sort} onClick={() => setOpen(!open)}>
          <TbArrowsSort color='var(--text-color)' />
          <span>{t("common.sort")}</span>
        </div>
      </Popover>
      ;
    </div>
  );
}
