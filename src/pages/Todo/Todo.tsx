import { useAppDispatch, useAppSelector } from "hooks/useStore";
import React from "react";
import { useTranslation } from "react-i18next";

import { Layout } from "components";
import styles from "./Todo.styles.scss";

import { openDialog } from "store/ducks/todo/todo.slice";
import { Button } from "ui-components";
import { Dialog, Filter, Item, Search, Sort } from "./components";
import { TodoType } from "./Todo.types";

export default function Todo() {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { list, isOpen } = useAppSelector((state) => state.todos);

  const handleOpenDialog = () => dispatch(openDialog(null));

  return (
    <Layout>
      <div className={styles.wrapper}>
        <Search />
        <div className={styles.actions}>
          <Filter />
          <Sort />
        </div>
        <div className={styles.add}>
          <Button text={t("common.add")} onClick={handleOpenDialog} />
        </div>
        <div className={styles.list}>
          {list.map((item: TodoType) => (
            <Item key={item.uuid} item={item} />
          ))}
        </div>
        {isOpen && <Dialog />}
      </div>
    </Layout>
  );
}
