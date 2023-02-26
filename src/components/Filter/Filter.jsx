//import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { getFilter } from '../../redux/filter/filter-selector';
import { useDispatch } from 'react-redux';

import { setFilter } from 'redux/filter/filter-slice';

import styles from './filter.module.scss';

const Filter = () => {
  const reduxQuery = useSelector(getFilter);
  const dispatch = useDispatch();
  const onReduxChange = text => dispatch(setFilter(text));
  const handleOnChangeFilter = ({ currentTarget }) => {
    onReduxChange(currentTarget.value);
  };

  return (
    <>
      <label className={styles.label}>
        Find contacts by name
        <input
          type="text"
          name="filter"
          className={styles.input}
          value={reduxQuery}
          onChange={handleOnChangeFilter}
        />
      </label>
    </>
  );
};

export default Filter;

// Filter.propTypes = {
//   value: PropTypes.string,
//   onChange: PropTypes.func,
// };
