import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  acc: [],
  person: null,
  status: '',
};

export const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    setMoviesPage: (state, action) => {
      state.moviesPage = +action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setAcc: (state, action) => {
      state.acc = [...state.acc, action.payload];
    },
    setPersonClear: (state, action) => {
      state.person = null;
    },
    setLogin: (state, action) => {
      const { nickname, pass } = action.payload;
      const user = state.acc.find(
        (account) => account.nickname === nickname && account.pass === pass,
      );

      if (user) {
        state.person = user;
      } else {
        state.person = null;
      }
    },
  },
});

export const { setStatus, setAcc, setLogin, setPersonClear } = contentSlice.actions;

export default contentSlice.reducer;
