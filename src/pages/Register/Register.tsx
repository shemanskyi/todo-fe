import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button, Form, InputField } from "ui-components";

import { ROUTES } from "constants/routes";
import styles from "./Register.styles.scss";

import {
  FORM_ID,
  FORM_INITIAL_VALUES,
  FORM_VALIDATION,
} from "./Register.constants";
import { RegisterData, RegisterProps } from "./Register.types";

const Register: React.FC<RegisterProps> = ({ onRegister }) => {
  const { t } = useTranslation();

  const handleSubmit = (values: RegisterData) => onRegister(values);

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
              <InputField name='username' label={t("common.username")} />
              <InputField name='email' label={t("common.email")} />
              <InputField
                name='password'
                label={t("common.password")}
                type='password'
              />
              <InputField
                name='confirmPassword'
                label={t("common.confirm-password")}
                type='password'
              />
            </div>
          </Form>
        </>
        <div className={styles.actions}>
          <Button text={t("auth.signup")} type='submit' form={FORM_ID} />
          <span>
            {t("auth.signin-text")}{" "}
            <Link to={ROUTES.SIGNIN}>{t("auth.signin")}</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
