import { configureStore } from '@reduxjs/toolkit';
import shopReducer from './shops/shopSlice';

export const store = configureStore({
  reducer: {
    shops: shopReducer,
  },
});
