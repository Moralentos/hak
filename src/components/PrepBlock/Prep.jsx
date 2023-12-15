import React from 'react';
import styles from './prep.module.scss';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const Prep = () => {
  const data = [
    { name: 'Иванов Иван Иванович', status: 'online' },
    { name: 'Петров Петр Петрович', status: 'offline' },
    { name: 'Сидоров Сидор Сидорович', status: 'online' },
    { name: 'Александров Александр Александрович', status: 'offline' },
    { name: 'Николаев Николай Николаевич', status: 'online' },
    { name: 'Дмитриев Дмитрий Дмитриевич', status: 'offline' },
    { name: 'Сергеев Сергей Сергеевич', status: 'online' },
    { name: 'Андреев Андрей Андреевич', status: 'offline' },
    { name: 'Егоров Егор Егорович', status: 'online' },
    { name: 'Михайлов Михаил Михайлович', status: 'offline' },
    { name: 'Владимиров Владимир Владимирович', status: 'online' },
    { name: 'Артемов Артем Артемович', status: 'offline' },
    { name: 'Тимофеев Тимофей Тимофеевич', status: 'online' },
    { name: 'Станиславов Станислав Станиславович', status: 'offline' },
    { name: 'Викторов Виктор Викторович', status: 'online' },
  ];

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

  return (
    <div className={styles.prep_content}>
      <h3>Список преподавателей</h3>

      <div className={styles.prepods}>
        {data.map((elem, index) => (
          <div key={index} className={styles.prepods_card}>
            <div className={styles.prepods_card__info}>
              <Avatar {...stringAvatar(elem.name)} />
              <span className={styles.prepods_card__info_name}>{elem.name}</span>
            </div>
            <div className={styles.prepods_card__svg}>
              <div className={styles.prepods_card__svg_block}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155'
                  />
                </svg>
              </div>
              <div className={styles.prepods_card__svg_block}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    d='M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z'
                  />
                </svg>
              </div>
            </div>
            <span
              className={elem.status === 'online' ? styles.prepods_offline : styles.prepods_online}
            >
              {elem.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prep;
