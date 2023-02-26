//import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import PhoneItem from '../PhoneItem/PhoneItem';

import { getFilteredContacts } from 'redux/contacts/contacts-selector';

const PhoneList = () => {
  const filteredPhoneList = useSelector(getFilteredContacts);

  return (
    <ul>
      {filteredPhoneList.map(({ id, name, number }) => {
        return <PhoneItem key={id} name={name} number={number} id={id} />;
      })}
    </ul>
  );
};

export default PhoneList;
