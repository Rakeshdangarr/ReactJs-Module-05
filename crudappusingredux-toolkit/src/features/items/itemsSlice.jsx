import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  items: []
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateItem: (state, action) => {
      const { id, updatedData } = action.payload;
      const index = state.items.findIndex(item => item.id === id);
      if (index >= 0) {
        state.items[index] = { ...state.items[index], ...updatedData };
      }
    }
  }
});

export const { addItem, removeItem, updateItem } = itemsSlice.actions;

export default itemsSlice.reducer;
