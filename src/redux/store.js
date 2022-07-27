import { configureStore } from '@reduxjs/toolkit';
import { usersApi } from './users-api';

// eslint-disable-next-line no-unused-vars
export const store = (initialState, options) =>
  configureStore({
    reducer: {
      [usersApi.reducerPath]: usersApi.reducer,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(usersApi.middleware),
  });