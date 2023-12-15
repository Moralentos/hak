import { configureStore } from '@reduxjs/toolkit';

import content from './contentSlice';

export const store = configureStore({
  reducer: {
    content,
  },
});
