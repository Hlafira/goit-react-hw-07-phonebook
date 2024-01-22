export const getContacts = state => state.contacts;

export const getFilteredContacts = state => {
  if (state.filter.trim() === '') return state.contacts.contacts;
  const query = state.filter;
  const normalizeFilter = query.trim().toLocaleLowerCase();
  return state.contacts.contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(normalizeFilter)
  );
};

export const getContactCount = state => {
  return state.contacts.length;
};
