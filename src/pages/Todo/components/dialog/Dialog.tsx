import { useAppDispatch, useAppSelector } from "hooks/useStore";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";

import { useTranslation } from "react-i18next";
import Modal from "react-modal";

import { closeDialog } from "store/ducks/todo/todo.slice";

import { Button, Form, InputField } from "ui-components";
import styles from "./Dialog.styles.scss";

import {
  FORM_ID,
  FORM_INITIAL_VALUES,
  FORM_VALIDATION,
} from "pages/Todo/Todo.constants";
import { TodoType } from "pages/Todo/Todo.types";
import { createTodo, updateTodo } from "store/ducks/todo/todo.actions";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "var(--background-color)",
    color: "var(--text-color)",
  },
  overlay: {
    background: "rgba(0,0,0, 0.2)",
  },
};

Modal.setAppElement("#root");

export default function Dialog() {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { isOpen, todo } = useAppSelector((state) => state.todos);

  function handleClose() {
    dispatch(closeDialog());
  }

  function handleSubmit(values: TodoType) {
    const { title, description, uuid, deadline, completed } = values;
    const params = { title, description, deadline, completed };

    if (uuid) {
      //@ts-ignore
      dispatch(updateTodo({ id: uuid, params }));
      return;
    }
    console.log({ params });
    //@ts-ignore
    dispatch(createTodo({ params }));
  }

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={handleClose}
        style={customStyles}
        contentLabel='Example Modal'
      >
        <div className={styles.modal}>
          <div className={styles.title}>
            <span>{todo ? t("common.edit") : t("common.add")}</span>
            <AiOutlineClose color='var(--text-color)' onClick={handleClose} />
          </div>
          <div className={styles.form}>
            <Form
              onSubmit={handleSubmit}
              initialValues={todo ? todo : FORM_INITIAL_VALUES}
              validationSchema={FORM_VALIDATION}
              id={FORM_ID}
            >
              <div className={styles.form}>
                <InputField name='title' label={t("common.title")} />
                <InputField
                  name='description'
                  label={t("common.description")}
                />
                <InputField name='deadline' label={t("common.due-date")} />
              </div>
            </Form>
          </div>
          <div className={styles.actions}>
            <Button
              variant='secondary'
              onClick={handleClose}
              text={t("common.cancel")}
            />
            <Button
              text={todo ? t("common.edit") : t("common.add")}
              type='submit'
              form={FORM_ID}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}
