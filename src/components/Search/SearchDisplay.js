import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchDisplay.css';

const SearchDisplay = ({ name, onChange, onClick }) => (
  <section className={styles.SearchDisplay}>
    <input id="search" type="text" name={name} value={name} placeholder="Enter Artist Name..." onChange={onChange}/>
    <button onClick={onClick}>Search</button>
  </section>
);

SearchDisplay.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
};

export default SearchDisplay;

