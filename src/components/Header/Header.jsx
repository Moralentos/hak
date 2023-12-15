import React from 'react';
import styles from './header.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to={'/'}>Главная</Link>
        <Link to={'/spravka'}>Справка</Link>
        <Link to={'/prep'}>Преподаватели</Link>
        <Link to={'/raspis'}>Расписание</Link>
      </nav>
    </header>
  );
};

export default Header;
