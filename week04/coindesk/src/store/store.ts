import {configureStore} from '@reduxjs/toolkit';
import SampleSlice from './SampleSlice';
import ThemeSlice from './ThemeSlice';
import { coinApi } from '../services';

export const store = configureStore({
  reducer: {
    sample: SampleSlice,
    theme: ThemeSlice,
    [coinApi.reducerPath]: coinApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(coinApi.middleware)
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
