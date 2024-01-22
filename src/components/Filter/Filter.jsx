import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { setFilter } from 'redux/filter/filter-slice';
import { getFilter } from 'redux/filter/filter-selector';

import styles from './filter.module.scss';

const Filter = () => {
  const reduxQuery = useSelector(getFilter);
  const dispatch = useDispatch();
  const onReduxChange = text => dispatch(setFilter(text));
  const handleOnChangeFilter = ({ currentTarget }) => {
    onReduxChange(currentTarget.value);
  };

  return (
    <div className={styles.container}>
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
    </div>
  );
};

export default Filter;
