import { ChangeEvent } from "react";

export type CheckboxProps = {
  disabled?: boolean;
  checked: boolean;
  size?: "small" | "medium" | "large";
  onChange: (event: ChangeEvent) => void;
};
