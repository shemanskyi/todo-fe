import * as Yup from "yup";

export const FORM_ID = "RegisterForm";

export const FORM_INITIAL_VALUES = {
  email: "",
  username: "",
  confirmPassword: "",
  password: "",
};

export const FORM_VALIDATION = Yup.object().shape({
  password: Yup.string()
    .required("Please enter your password.")
    .min(8, "Your password is too short."),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), "null"],
    "Passwords must match"
  ),
  email: Yup.string().email().required(),
  username: Yup.string().required(),
});
