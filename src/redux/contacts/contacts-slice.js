import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [] },
  reducers: {
    addContact: {
      reducer: (state, action) => {
        const { name } = action.payload;
        if (name) {
          const normalizeName = name.toLocaleLowerCase();
          const isDuplicate = state.contacts.some(
            ({ name }) => name.toLocaleLowerCase() === normalizeName
          );
          if (isDuplicate) {
            alert(`${name} is already in contacts.`);
          } else {
            state.contacts.push(action.payload);
          }
        }
      },
      prepare: data => {
        return {
          payload: {
            id: nanoid(),
            ...data,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.contacts.findIndex(({ id }) => id !== action.payload);
      state.contacts.splice(index - 1, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
