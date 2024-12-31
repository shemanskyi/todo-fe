import { MouseEventHandler } from "react";

export type ButtonProps = {
  text?: string;
  variant?: "primary" | "secondary" | "success" | "error";
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset" | undefined;
  form?: string;
};
