import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/contacts/contacts-slice';
import styles from './phoneItem.module.scss';

const PhoneItem = ({ id, number, name }) => {
  const dispatch = useDispatch();
  const onDeleteRedux = () => dispatch(deleteContact(id));
  return (
    <li className={styles.item}>
      {' '}
      {name} : {number}
      &emsp;
      <button onClick={() => onDeleteRedux()} className={styles.button}>
        Delete
      </button>
    </li>
  );
};

export default PhoneItem;

PhoneItem.propTypes = {
  id: PropTypes.string,
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
