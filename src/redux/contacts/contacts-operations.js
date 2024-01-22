import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../shared/services/contacts-api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetch-all',
  async (_, thunkAPI) => {
    try {
      const data = await api.getAllContacts();
      return data;
    } catch ({ response }) {
      console.log(response);
      return thunkAPI.rejectWithValue(response);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/add',
  async (data, thunkAPI) => {
    try {
      const result = await api.addContact(data);
      console.log('added result', result);
      return result;
    } catch ({ response }) {
      console.log(response);
      return thunkAPI.rejectWithValue(response);
    }
  },
  {
    condition: ({ name }, thunkAPI) => {
      const contacts = thunkAPI.getState().contacts.contacts;
      console.log(contacts);
      const normalizeName = name.toLocaleLowerCase();
      const isDuplicate = contacts.some(
        ({ name }) => name.toLocaleLowerCase() === normalizeName
      );
      if (isDuplicate) return false;
    },
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (id, thunkAPI) => {
    try {
      await api.deleteContact(id);
      return id;
    } catch ({ response }) {
      console.log(response);
      return thunkAPI.rejectWithValue(response);
    }
  }
);
