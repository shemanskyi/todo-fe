import * as Yup from "yup";

export enum FILTERS {
  all = "All",
  active = "Active",
  completed = "Completed",
}

export enum SORT {
  text = "text",
  date = "date",
}

export const FORM_ID = "TodoDialog";

export const FORM_INITIAL_VALUES = {
  title: "",
  description: "",
  deadline: "",
  completed: false,
};

export const FORM_VALIDATION = Yup.object().shape({
  title: Yup.string().min(6).required(),
  description: Yup.string().required(),
  deadline: Yup.string().required(),
});
