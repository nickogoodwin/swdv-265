import {createSlice} from '@reduxjs/toolkit';
import {useColorScheme} from 'react-native';

export interface ThemeState {
  isDarkMode: boolean;
}

const initialState: ThemeState = {
  isDarkMode: useColorScheme() === 'dark',
};

const ThemeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state: ThemeState) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const {changeTheme} = ThemeSlice.actions;

export default ThemeSlice.reducer;
