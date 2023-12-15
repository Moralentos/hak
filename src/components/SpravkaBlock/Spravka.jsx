import React from 'react';
import styles from './spravka.module.scss';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Spravka = () => {
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
  });

  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <>
      <h3>Заказать справку</h3>
      <Box
        component='form'
        sx={{
          '& .MuiTextField-root': { m: 1, width: '500px' },
        }}
        noValidate
        autoComplete='off'
      >
        <div className={styles.inputs}>
          <TextField id='outlined-textarea' placeholder='ФИО' multiline size='small' />
          <TextField id='outlined-textarea' placeholder='Дата рождения' multiline size='small' />
          <TextField id='outlined-textarea' placeholder='Направление' multiline size='small' />
          <TextField id='outlined-textarea' placeholder='Группа' multiline size='small' />
        </div>
      </Box>
      <div className={styles.button_inputs}>
        <Button onClick={handleClick({ vertical: 'top', horizontal: 'right' })} variant='outlined'>
          Отправить
        </Button>
        <div className={styles.alert}>
          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            onClose={handleClose}
            key={vertical + horizontal}
          >
            <Alert onClose={handleClose} severity='success' sx={{ width: '100%' }}>
              Спасибо, обратный ответ получен. <br /> Справка будет готова завтра после 12:00
            </Alert>
          </Snackbar>
        </div>
      </div>
    </>
  );
};

export default Spravka;
