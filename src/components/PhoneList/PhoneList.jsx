//import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import PhoneItem from '../PhoneItem/PhoneItem';
import { getFilteredContacts } from 'redux/contacts/contacts-selector';
import { fetchContacts } from 'redux/contacts/contacts-operations';

import styles from './phoneList.module.scss';

const PhoneList = () => {
  const filteredPhoneList = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={styles.list}>
      {filteredPhoneList.map(({ id, name, phone }) => {
        return <PhoneItem key={id} name={name} phone={phone} id={id} />;
      })}
    </ul>
  );
};

export default PhoneList;