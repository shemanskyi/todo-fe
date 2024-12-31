import { useAppDispatch } from "hooks/useStore";
import React, { memo } from "react";
import { register } from "store/ducks/auth/auth.actions";

import Register from "./Register";

import { RegisterData } from "./Register.types";

export const RegisterContainer = () => {
  const dispatch = useAppDispatch();

  const handleRegister = (values: RegisterData) => {
    const { email, username, password } = values;
    dispatch(register({ params: { email, username, password } }));
  };

  return <Register onRegister={handleRegister} />;
};

export default memo(RegisterContainer);
