import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ROUTES } from 'constants/routes';
import { Home } from 'pages/Home';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Home />} path={ROUTES.HOME} />
    </Routes>
  );
}
