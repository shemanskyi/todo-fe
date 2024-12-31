import { useAppDispatch, useAppSelector } from "hooks/useStore";
import React, { memo, useEffect } from "react";

import { getAllTodo } from "store/ducks/todo/todo.actions";

import Todo from "./Todo";

export const TodoContainer = () => {
  const dispatch = useAppDispatch();
  const { counter } = useAppSelector((state) => state.todos);
  console.log({ counter });

  useEffect(() => {
    dispatch(getAllTodo());
  }, [counter]);

  return <Todo />;
};

export default memo(TodoContainer);
