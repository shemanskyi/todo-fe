import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AppRoutes from 'config/appRoutes';

import 'assets/styles/common/reset.scss';
export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}
