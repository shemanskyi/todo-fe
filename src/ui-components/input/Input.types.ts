import { ChangeEvent } from "react";

export type InputProps = {
  name: string;
  value: string;
  label?: string;
  type?: string;
  error?: string | boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onChange: (event: ChangeEvent) => void;
};
