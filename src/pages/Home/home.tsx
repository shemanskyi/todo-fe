import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from './Home.styles.scss';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{t('common.title')}</h1>
    </div>
  );
}
