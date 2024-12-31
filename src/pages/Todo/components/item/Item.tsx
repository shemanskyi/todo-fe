import { useAppDispatch } from "hooks/useStore";
import React from "react";
import { useTranslation } from "react-i18next";

import { CiEdit, CiTrash } from "react-icons/ci";

import styles from "./Item.styles.scss";

import { TodoType } from "pages/Todo/Todo.types";
import { deleteTodo } from "store/ducks/todo/todo.actions";
import { openDialog } from "store/ducks/todo/todo.slice";
import { Checkbox } from "ui-components";

type ItemProps = {
  item: TodoType;
};

export default function Item({ item }: ItemProps) {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const handleCheck = () => {};

  const handleEdit = () => {
    dispatch(openDialog(item));
  };

  const handleDelete = () => {
    //@ts-ignore
    dispatch(deleteTodo({ id: item.uuid }));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.todo}>
        <div className={styles.title}>
          <Checkbox checked={true} size='medium' onChange={handleCheck} />
          <span>{item.title}</span>
        </div>
        <div className={styles.description}>{item.description}</div>
        <div className={styles.date}>{item.deadline}</div>
      </div>
      <div className={styles.actions}>
        <div className={styles.action} onClick={handleEdit}>
          <CiEdit color='var(--primary-color)' />
        </div>
        <div className={styles.action} onClick={handleDelete}>
          <CiTrash color='var(--error-color)' />
        </div>
      </div>
    </div>
  );
}
