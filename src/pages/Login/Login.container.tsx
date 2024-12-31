import { useAppDispatch } from "hooks/useStore";
import React, { memo } from "react";

import { login } from "store/ducks/auth/auth.actions";

import Login from "./Login";
import { LoginData } from "./Login.types";

export const LoginContainer = () => {
  const dispatch = useAppDispatch();

  const handleLogin = (values: LoginData) =>
    dispatch(login({ params: values }));

  return <Login onLogin={handleLogin} />;
};

export default memo(LoginContainer);
