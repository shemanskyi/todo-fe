import { useAppDispatch, useAppSelector } from "hooks/useStore";
import React, { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";

import styles from "./Search.styles.scss";

import { searchTodo } from "store/ducks/todo/todo.slice";
import { Button, Input } from "ui-components";

export default function Search() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const { query } = useAppSelector((state) => state.todos);

  const handleChange = (event: ChangeEvent<Element>) => {
    //@ts-ignore
    dispatch(searchTodo(event.target.value));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.input}>
        <Input
          size='small'
          name='search'
          value={query}
          onChange={handleChange}
        />
      </div>
      <Button size='small' text={t("common.search")} />
    </div>
  );
}
