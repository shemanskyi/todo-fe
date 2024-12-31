import { useField } from "formik";
import React, { ChangeEvent, FC, memo } from "react";
import { Input } from "../../input";

import { InputFieldProps } from "./InputField.types";

const InputField: FC<InputFieldProps> = ({ name, label, disabled, type }) => {
  const [field, meta, helpers] = useField(name);
  const { value } = field;
  const { setValue, setTouched } = helpers;
  const { touched, error } = meta;

  const handleChange = (event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    setValue(target.value, true);
    setTouched(true);
  };

  return (
    <div style={{ width: "100%" }}>
      <div>
        <Input
          name={name}
          value={value}
          disabled={disabled}
          onChange={handleChange}
          label={label}
          error={touched && error}
          type={type}
        />
      </div>
    </div>
  );
};

export default memo(InputField);
