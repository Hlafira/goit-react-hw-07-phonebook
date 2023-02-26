//import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import styles from './contact-form.module.scss';

import { initialState } from './initialState';
import { useForm } from '../../shared/hooks/useFrom';
import { addContact } from 'redux/contacts/contacts-slice';

const ContactForm = () => {
  // Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();
  //  const handleAddContact = ({ name, number }) => {
  //   if (isDuplicate(name)) {
  //     alert(`${name} is already in contacts.`);
  //     return null;
  //   }
  //   const id = nanoid();
  //   setContacts(prevContacts => {
  //     return [...prevContacts, { id, name, number }];
  //   });
  //   return { id, name, number };
  // };

  const onAddContact = ({ name, number }) => {
    dispatch(addContact({ name, number }));
  };

  const { state, handleSubmit, handleOnChange } = useForm({
    initialState,
    onSubmit: onAddContact,
  });

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Name
        <input
          className={styles.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleOnChange}
          value={state.name}
        />
      </label>
      <label className={styles.label}>
        Number
        <input
          className={styles.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleOnChange}
          value={state.number}
        />
      </label>
      <button className={styles.button}>Add contact</button>
    </form>
  );
};

export default ContactForm;

// ContactForm.propTypes = {
//   onAddContact: PropTypes.func.isRequired,
// };
