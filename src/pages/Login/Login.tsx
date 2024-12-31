import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button, Form, InputField } from "ui-components";

import { ROUTES } from "constants/routes";
import styles from "./Login.styles.scss";

import {
  FORM_ID,
  FORM_INITIAL_VALUES,
  FORM_VALIDATION,
} from "./Login.constants";
import { LoginData, LoginProps } from "./Login.types";

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const { t } = useTranslation();

  const handleSubmit = (values: LoginData) => onLogin(values);

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.title}>{t("auth.signin")}</div>
        <>
          <Form
            onSubmit={handleSubmit}
            initialValues={FORM_INITIAL_VALUES}
            validationSchema={FORM_VALIDATION}
            id={FORM_ID}
          >
            <div className={styles.form}>
              <InputField name='email' label={t("common.email")} />
              <InputField
                name='password'
                label={t("common.password")}
                type='password'
              />
            </div>
          </Form>
        </>
        <div className={styles.actions}>
          <Button text={t("auth.signin")} type='submit' form={FORM_ID} />
          <span>
            {t("auth.signup-text")}{" "}
            <Link to={ROUTES.SIGNUP}>{t("auth.signup")}</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
