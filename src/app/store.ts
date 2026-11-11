import { configureStore } from '@reduxjs/toolkit';
import campaignsReducer from '../features/campaigns/campaignsSlice';

export const makeStore = () =>
  configureStore({
    reducer: {
      campaigns: campaignsReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
