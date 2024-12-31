import * as Yup from "yup";

export const FORM_ID = "LoginForm";

export const FORM_INITIAL_VALUES = {
  email: "",
  password: "",
};

export const FORM_VALIDATION = Yup.object().shape({
  password: Yup.string().min(6).required(),
  email: Yup.string().email().required(),
});
