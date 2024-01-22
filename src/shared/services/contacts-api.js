import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://65aa4a39081bd82e1d96904c.mockapi.io/contacts',
});

export const getAllContacts = async () => {
  const { data } = await instance.get('/');
  return data;
};

export const addContact = async data => {
  const result = await instance.post('/', data);
  return result.data;
};

export const deleteContact = async id => {
  const result = await instance.delete(`/${id}`);
  return result;
};
