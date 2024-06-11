import { ReactNode } from 'react';

import styles from './LayoutDefault.module.css';

export type LayoutProps = {
  children: ReactNode | ReactNode[];
};

const LayoutDefault = ({ children }: LayoutProps) => {
  return (
    <div className={styles.layoutDefault}>
      <header></header>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
};

export default LayoutDefault;
