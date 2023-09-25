import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  contacts: {
    filter: '',
  },
};

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    setFilterValue: (state, action) => {
      state.contacts.filter = action.payload;
    },
  },
});

export const { addContact, removeContactById, setFilterValue } =
  phonebookSlice.actions;

const persistConfig = {
  key: 'react-06/phonebook',
  storage,
};

export const persistedPhonebookReducer = persistReducer(
  persistConfig,
  phonebookSlice.reducer
);

export const getFilter = state => state.phonebook.contacts.filter;
