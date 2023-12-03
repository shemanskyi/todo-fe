import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';

import { store } from 'config/store';
import ReactDOM from 'react-dom/client';
import i18n from 'utils/i18n';

import App from './app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </I18nextProvider>
  </Provider>
);
