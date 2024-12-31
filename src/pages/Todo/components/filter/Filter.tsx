import { useAppDispatch, useAppSelector } from "hooks/useStore";
import React from "react";

import { FILTERS } from "pages/Todo/Todo.constants";
import { filterTodo } from "store/ducks/todo/todo.slice";
import styles from "./Filter.styles.scss";

export default function Filter() {
  const dispatch = useAppDispatch();

  const { filter } = useAppSelector((state) => state.todos);

  const handleClick = (value: string) => {
    //@ts-ignore
    dispatch(filterTodo(value));
  };
  console.log({ filter: filter === FILTERS.all });
  return (
    <div className={styles.wrapper}>
      <div
        className={filter === FILTERS.all ? styles.active : styles.filter}
        onClick={() => handleClick(FILTERS.all)}
      >
        {FILTERS.all}
      </div>
      <div
        className={filter === FILTERS.active ? styles.active : styles.filter}
        onClick={() => handleClick(FILTERS.active)}
      >
        {FILTERS.active}
      </div>
      <div
        className={filter === FILTERS.completed ? styles.active : styles.filter}
        onClick={() => handleClick(FILTERS.completed)}
      >
        {FILTERS.completed}
      </div>
    </div>
  );
}
