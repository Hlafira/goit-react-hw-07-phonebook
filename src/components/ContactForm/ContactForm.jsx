import { useDispatch } from 'react-redux';

import { initialState } from './initialState';
import { useForm } from '../../shared/hooks/useFrom';
import { addContact } from '../../redux/contacts/contacts-operations';

import styles from './contact-form.module.scss';

const ContactForm = () => {
  const dispatch = useDispatch();

  const onAddContact = ({ name, phone }) => {
    dispatch(addContact({ name, phone }));
  };

  const { state, handleSubmit, handleOnChange } = useForm({
    initialState,
    onSubmit: onAddContact,
  });

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        <input
          className={styles.input}
          type="text"
          name="name"
          pattern="[A-ZА-Я][a-zA-Zа-яА-Я.'\s]*"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleOnChange}
          value={state.name}
          placeholder="Adrian"
        />
        <span>Name</span>
      </label>
      <label className={styles.label}>
        <input
          className={styles.input}
          type="tel"
          name="phone"
          pattern="(\+\d{1,4}\-)?\d{1,4}\-\d{1,4}\-\d{1,4}"
          title="Enter a valid phone number like 865-211-4452 or +380-097-355-8092"
          placeholder="865-211-4452"
          required
          onChange={handleOnChange}
          value={state.phone}
        />
        <span>Number</span>
      </label>
      <button className={styles.button}>Add contact</button>
    </form>
  );
};

export default ContactForm;
