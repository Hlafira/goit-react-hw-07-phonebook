import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/contacts/contacts-operations';

import styles from './phoneItem.module.scss';

const PhoneItem = ({ id, phone, name }) => {
  const dispatch = useDispatch();
  const onDeleteRedux = () => dispatch(deleteContact(id));
  return (
    <li className={styles.item}>
      <span>{name}</span>
      <span>{phone}</span>
      <span></span>

      <button
        onClick={() => onDeleteRedux()}
        className={`${styles.button} ${styles.small}`}
      >
        Delete
      </button>
    </li>
  );
};

export default PhoneItem;

PhoneItem.propTypes = {
  id: PropTypes.string,
  phone: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
