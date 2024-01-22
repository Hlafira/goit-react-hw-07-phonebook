import { createSlice } from '@reduxjs/toolkit';

import {
  fetchContacts,
  deleteContact,
  addContact,
} from './contacts-operations';

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, store => {
        store.error = null;
        store.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (store, { payload }) => {
        store.contacts = payload;
        store.isLoading = false;
      })
      .addCase(fetchContacts.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      })
      .addCase(addContact.pending, store => {
        store.error = null;
        store.isLoading = true;
      })
      .addCase(addContact.fulfilled, (store, { payload }) => {
        store.contacts.push(payload);
        store.isLoading = false;
      })
      .addCase(addContact.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      })
      .addCase(deleteContact.pending, store => {
        store.error = null;
        store.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        const index = store.contacts.findIndex(el => el.id === payload);
        if (index >= 0) {
          store.contacts.splice(index, 1);
        }
      })
      .addCase(deleteContact.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
