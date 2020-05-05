import React from 'react';
import PropTypes from 'prop-types';

const Paging = ({ onClick, changePage, disabled, currentPage, totalPages }) => (
  <section>
    <button onClick={onClick} onChange={changePage} disabled={disabled}>&lt;</button>
    <p>Page {currentPage} of {totalPages}</p>
    <button onClick={onClick} onChange={changePage} disabled={disabled}>&gt;</button>
  </section>

);

Paging.propTypes = {
  onClick: PropTypes.func.isRequired,
  changePage: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired
};
  
export default Paging;
  

