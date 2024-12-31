import React, { FC, memo } from "react";

import { Formik, Form as FormikForm, FormikValues } from "formik";
import "./Form.styles.scss";

import { FormProps } from "./Form.types";

const Form: FC<FormProps> = ({
  children,
  initialValues,
  validationSchema,
  onSubmit,
  enableReinitialize = true,
  id = "form",
  ...props
}) => {
  return (
    <Formik
      enableReinitialize={enableReinitialize}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values: FormikValues, actions: any) => {
        onSubmit(values);
        actions.setSubmitting(false);
      }}
      {...props}
    >
      {() => <FormikForm id={id}>{children}</FormikForm>}
    </Formik>
  );
};

export default memo(Form);
