import React from 'react';
import styles from './aside.module.scss';
import Logo from '../../assets/logo.svg';
import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import { setPersonClear, setStatus } from '../../Redux/contentSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Aside = () => {
  const status = useSelector((state) => state.content.status);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogin = (status) => {
    dispatch(setStatus(status));
    if (status === 'login') navigate('/login');
    if (status === 'register') navigate('/register');
  };

  const handleExit = () => {
    dispatch(setPersonClear());
    navigate('/');
  };

  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  const person = useSelector((state) => state.content.person);
  console.log(person);
  if (!person)
    return (
      <div className={styles.aside}>
        <div className={styles.logo}>
          <img src={Logo} alt='Logo' />
          <span>ВГУВТ</span>
        </div>
        <div className={styles.reg_block}>
          <button onClick={() => handleLogin('login')}>Войти</button>
          <button onClick={() => handleLogin('register')}>Регистрация</button>
        </div>
      </div>
    );

  return (
    <div className={styles.aside}>
      <div className={styles.logo}>
        <img src={Logo} alt='Logo' />
        <span>ВГУВТ</span>
      </div>
      <div className={styles.person}>
        <Avatar {...stringAvatar(person.name)} />
        <div className={styles.person_info}>
          <span className={styles.person_info__name}>{person.name}</span>
          <span>{person.value === 'student' ? 'Студент' : 'Преподаватель'}</span>
        </div>
      </div>

      {person.value === 'student' ? (
        <div className={styles.aside_menu}>
          <div className={styles.aside_menu__text}>Меню</div>
          <button>Расписание</button>
          <button>Долги +</button>
          <button>Справка</button>
        </div>
      ) : (
        <div className={styles.aside_menu}>
          <div className={styles.aside_menu__text}>Меню</div>
          <button>Расписание</button>
          <button>Совещания</button>
          <button>Ведомости</button>
          <button>Мое руководство</button>
          <button>Больничный лист</button>
        </div>
      )}

      <div className={styles.aside_exit}>
        <button onClick={() => handleExit()}>Выход</button>
      </div>
    </div>
  );
};

export default Aside;
