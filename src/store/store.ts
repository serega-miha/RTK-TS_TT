import { configureStore } from '@reduxjs/toolkit';

import { heroesApi } from './api/heroes';


export const store = configureStore({
  reducer: {
    [heroesApi.reducerPath]:heroesApi.reducer
    
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(heroesApi.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

 
