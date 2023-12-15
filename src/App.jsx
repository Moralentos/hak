import { useState } from 'react';
import styles from './App.module.scss';
import Aside from './components/AsideBlock/Aside';
import Header from './components/Header/Header';
// import './globalStyles/vars.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPageBlock/MainPage';
import { useSelector } from 'react-redux';
import Spravka from './components/SpravkaBlock/Spravka';
import Prep from './components/PrepBlock/Prep';
import Main from './components/MainBlock/Main';
import Raspis from './components/RaspisBlock/Raspis';
import Login from './components/LoginBlock/Login';
import { useDispatch } from 'react-redux';
import { setStatus } from './Redux/contentSlice';
import { useNavigate } from 'react-router-dom';

function App() {
  const status = useSelector((state) => state.content.status);
  const dispatch = useDispatch();

  // const navigate = useNavigate();
  // const handleLogin = (status) => {
  //   dispatch(setStatus(status));
  //   navigate('/register');
  // };

  if (status === 'register')
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage>{<Main></Main>}</MainPage>} />
          <Route path='/spravka' element={<MainPage>{<Spravka></Spravka>}</MainPage>} />
          <Route path='/prep' element={<MainPage>{<Prep></Prep>}</MainPage>} />
          <Route path='/raspis' element={<MainPage>{<Raspis></Raspis>}</MainPage>} />
          <Route path='/login' element={<MainPage>{<Login></Login>}</MainPage>} />
          <Route path='/register' element={<MainPage>{<Login></Login>}</MainPage>} />
        </Routes>
      </BrowserRouter>
    );

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage>{<Main></Main>}</MainPage>} />
        <Route path='/spravka' element={<MainPage>{<Spravka></Spravka>}</MainPage>} />
        <Route path='/prep' element={<MainPage>{<Prep></Prep>}</MainPage>} />
        <Route path='/raspis' element={<MainPage>{<Raspis></Raspis>}</MainPage>} />
        <Route path='/login' element={<MainPage>{<Login></Login>}</MainPage>} />
        <Route path='/register' element={<MainPage>{<Login></Login>}</MainPage>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
