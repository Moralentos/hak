import React from 'react';
import styles from './main.module.scss';
import pic from '../../assets/pic.jpeg';
import { useSelector, useDispatch } from 'react-redux';
import { setStatus } from '../../Redux/contentSlice';

const Main = () => {
  const status = useSelector((state) => state.content.status);
  const dispatch = useDispatch();

  if (status === 'abit1')
    return (
      <div className={styles.main}>
        <div className={styles.main_img}>
          <img src={pic} alt='' />
        </div>
        <h3>Для абитуриентов</h3>
        <div className={styles.main_list}>
          <button onClick={() => dispatch(setStatus('register'))}>Правила приема</button>
        </div>
      </div>
    );
  if (status === 'abit2')
    return (
      <div className={styles.main}>
        <div className={styles.main_img}>
          <img src={pic} alt='' />
        </div>
        <h3>Для абитуриентов</h3>
        <div className={styles.main_list}>
          <button onClick={() => dispatch(setStatus('register'))}>
            Институт кораблестроения и инфраструктуры водного транспорта
          </button>
          <button onClick={() => dispatch(setStatus('abit3'))}>Институт Морская академия +</button>
          <button onClick={() => dispatch(setStatus('register'))}>
            Институт экономики, управления и права
          </button>
          <button onClick={() => dispatch(setStatus('register'))}>Магистратура</button>
        </div>
      </div>
    );
  if (status === 'abit3')
    return (
      <div className={styles.main}>
        <div className={styles.main_img}>
          <img src={pic} alt='' />
        </div>
        <h3>Для абитуриентов</h3>
        <div className={styles.main_list}>
          <button onClick={() => dispatch(setStatus('register'))}>
            Специальность: 26.05.05 Судовождение
          </button>
          <button onClick={() => dispatch(setStatus('abit3'))}>
            Специальность: 26.05.05 Эксплуатация судовых энергетических установок
          </button>
          <button onClick={() => dispatch(setStatus('register'))}>
            Специальность: 26.05.07 Эксплуатация судового электрооборудования и средств автоматики
          </button>
          <button onClick={() => dispatch(setStatus('register'))}>
            Специальность: 26.05.03 Техническая эксплуатация транспортного радиооборудования
          </button>
        </div>
      </div>
    );

  return (
    <div className={styles.main}>
      <div className={styles.main_img}>
        <img src={pic} alt='' />
      </div>
      <h3>Для абитуриентов</h3>
      <div className={styles.main_list}>
        <button onClick={() => dispatch(setStatus('abit1'))}>Правила приема</button>
        <button onClick={() => dispatch(setStatus('abit2'))}>Направления подготовки +</button>
        <button onClick={() => dispatch(setStatus('abit3'))}>Информация о приеме</button>
        <button onClick={() => dispatch(setStatus('abit4'))}>Подача документов</button>
      </div>
    </div>
  );
};

export default Main;
