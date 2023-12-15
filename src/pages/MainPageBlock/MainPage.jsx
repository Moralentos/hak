import React from 'react';
import styles from './mainPage.module.scss';
import Aside from '../../components/AsideBlock/Aside';
import Header from '../../components/Header/Header';

const MainPage = ({ children }) => {
  return (
    <div className={styles.content}>
      <Aside></Aside>
      <div className={styles.content_block}>
        <Header></Header>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default MainPage;
