import { configureStore } from '@reduxjs/toolkit';
import exampleSlice from '../exampleSlice';
import authSlice from '../authentication/authSlice';
export const store = configureStore({
  reducer: {
    example: exampleSlice,
    authSlice,
  },
});

export default store;