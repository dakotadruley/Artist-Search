import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const withPaging = (ToPage) => {
  const WithPagingHOC = (props) => {
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const pageChange = (n) => setPage(prePage => prePage + n);

    return (
      <>
        {/* with toPage on top of Paging to produce an updated version of the component with paging */}
        <ToPage {...props} page={page} setTotalPages={setTotalPages} />
        <Paging onClick={pageChange} currentPage={page} totalPages={totalPages} />
      </>
    );

  };
  // in react dev tools will show up withPaging 
  WithPagingHOC.displayName = `withPaging(${ToPage.name})`;

  return WithPagingHOC;

}; 

const Paging = ({ onClick, currentPage, totalPages }) => (
  <section>
    <button onClick={() => onClick(-1)} disabled={currentPage <= 1}>&lt;</button>
    <p>Page {currentPage} of {totalPages}</p>
    <button onClick={() => onClick(1)} disabled={currentPage >= totalPages}>&gt;</button>
  </section>

);

Paging.propTypes = {
  onClick: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired
};
  
export default Paging;
  

