import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface CalculatorState {
  currentValue: string;
  operator: string;
  previousValue: string;
}

const initialState: CalculatorState = {
  currentValue: '0',
  operator: '',
  previousValue: '',
};

const CalculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    handleNumber: (state: CalculatorState, action: PayloadAction<number>) => {
      if (state.currentValue === '0') {
        state.currentValue = `${action.payload}`;
      } else {
        state.currentValue = `${state.currentValue}${action.payload}`;
      }
    },
    handleOperator: (state: CalculatorState, action: PayloadAction<number>) => {
      state.operator = `${action.payload}`;
      state.previousValue = state.currentValue;
      state.currentValue = '0';
    },
    handleEqual: (state: CalculatorState) => {
      const current = parseFloat(state.currentValue);
      const previous = parseFloat(state.previousValue);
      const operator = state.operator;

      if (operator === '*') {
        state.currentValue = `${previous * current}`;
      }

      if (operator === '/') {
        state.currentValue = `${previous / current}`;
      }

      if (operator === '+') {
        state.currentValue = `${previous + current}`;
      }

      if (operator === '-') {
        state.currentValue = `${previous - current}`;
      }

      state.operator = '';
      state.previousValue = '';
    },
    handlePosNeg: (state: CalculatorState) => {
      state.currentValue = `${parseFloat(state.currentValue) * -1}`;
    },
    handleDelete: (state: CalculatorState) => {
      if (state.currentValue.length > 1) {
        state.currentValue = state.currentValue.slice(0, -1);
      } else {
        state.currentValue = '0';
      }
    },
    handleClear: (state: CalculatorState) => {
      return initialState;
    },
  },
});

export const {
  handleDelete,
  handleEqual,
  handleNumber,
  handleOperator,
  handlePosNeg,
  handleClear,
} = CalculatorSlice.actions;

export default CalculatorSlice.reducer;
