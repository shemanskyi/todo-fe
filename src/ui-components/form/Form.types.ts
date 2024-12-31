import { JSX } from "react";

export type FormProps = {
  children: JSX.Element;
  onSubmit: (values: any) => void;
  validationSchema: object;
  initialValues: object;
  id: string;
  enableReinitialize?: boolean;
};
