import {createSlice} from '@reduxjs/toolkit';
import {useColorScheme} from 'react-native';
import {Theme} from '../types'


const initialState: Theme = {
  isDarkMode: useColorScheme() === 'dark',
};

const ThemeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state: Theme) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const {changeTheme} = ThemeSlice.actions;
export default ThemeSlice.reducer;
