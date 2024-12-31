import React from "react";
import { Route, Routes } from "react-router-dom";

import { ROUTES } from "constants/routes";
import { Login } from "pages/Login";
import { Register } from "pages/Register";
import { Todo } from "pages/Todo";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Todo />} path={ROUTES.HOME} />
      <Route element={<Login />} path={ROUTES.SIGNIN} />
      <Route element={<Register />} path={ROUTES.SIGNUP} />
    </Routes>
  );
}
