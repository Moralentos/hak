import React from 'react';
import styles from './login.module.scss';
import { useSelector } from 'react-redux';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useDispatch } from 'react-redux';
import { setAcc, setStatus, setLogin } from '../../Redux/contentSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const status = useSelector((state) => state.content.status);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRegister = (state) => {};

  const [name, setName] = React.useState('');
  const [nickName, setNickName] = React.useState('');
  const [pass, setPass] = React.useState('');
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const madePerson = () => {
    console.log(name);
    console.log(nickName);
    console.log(pass);
    console.log(value);

    dispatch(setAcc({ name, pass, nickName, value }));
    dispatch(setStatus('login'));
    navigate('/login');
  };

  const handleLogin = () => {
    dispatch(setLogin({ name, pass, nickName }));
    navigate('/');
    setStatus('');
  };

  if (status === 'register')
    return (
      <div className={styles.login}>
        <h3>Регистрация</h3>

        <Box
          component='form'
          sx={{
            '& .MuiTextField-root': { m: 1, width: '500px' },
          }}
          noValidate
          autoComplete='off'
        >
          <div className={styles.inputs}>
            <TextField
              onChange={(e) => setName(e.target.value)}
              id='outlined-textarea'
              placeholder='ФИО'
              multiline
              size='small'
            />
            <TextField
              onChange={(e) => setNickName(e.target.value)}
              id='outlined-textarea'
              placeholder='Никнейм'
              multiline
              size='small'
            />
            <TextField
              onChange={(e) => setPass(e.target.value)}
              id='outlined-textarea'
              placeholder='Пароль'
              multiline
              size='small'
            />
          </div>
        </Box>
        <FormControl>
          <FormLabel id='demo-controlled-radio-buttons-group'></FormLabel>
          <RadioGroup
            aria-labelledby='demo-controlled-radio-buttons-group'
            name='controlled-radio-buttons-group'
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel value='student' control={<Radio />} label='Студент' />
            <FormControlLabel value='prepod' control={<Radio />} label='Преподаватель' />
          </RadioGroup>
        </FormControl>
        <button onClick={() => madePerson()} className={styles.login_btn}>
          Зарегистрироваться
        </button>
      </div>
    );

  return (
    <div className={styles.login}>
      <h3>Войти в систему</h3>

      <Box
        component='form'
        sx={{
          '& .MuiTextField-root': { m: 1, width: '500px' },
        }}
        noValidate
        autoComplete='off'
      >
        <div className={styles.inputs}>
          <TextField
            onChange={(e) => setNickName(e.target.value)}
            id='outlined-textarea'
            placeholder='Никнейм'
            multiline
            size='small'
          />
          <TextField
            onChange={(e) => setPass(e.target.value)}
            id='outlined-textarea'
            placeholder='Пароль'
            multiline
            size='small'
          />
        </div>
      </Box>
      <button onClick={() => handleLogin()} className={styles.login_btn}>
        Войти
      </button>
    </div>
  );
};

export default Login;
