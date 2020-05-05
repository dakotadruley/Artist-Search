import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ArtistList from '../components/Artists/ArtistList.js';
import SearchDisplay from '../components/Search/SearchDisplay.js';
import { fetchArtists } from '../services/fetchArtists.js';
import { withPaging } from '../utils/Paging/Paging.js';

const SearchArist = ({ page, setTotalPages }) => {
  const [search, setSearch] = useState('');
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = ({ target }) => {
    setSearch(target.value);
  };

  const handleClick = () => {
    setLoading(true);
    fetchArtists(search, page)
      .then(({ artists, totalPages }) => {
        setArtists(artists);
        setTotalPages(totalPages);
        setLoading(false);
      });
  };

  // if there is something in search bar
  useEffect(() => {
    if(search)
      handleClick();
  }, [page]);

  if(loading) return <h1>LOADIN</h1>;
  return (
    <>
      <SearchDisplay onChange={handleChange} onClick={handleClick} />
      <ArtistList artists={artists} />
    </>
  );
};
// it's a function that returns the container that it's added paging to 

SearchArist.propTypes = {
  page: PropTypes.number.isRequired,
  setTotalPages: PropTypes.func.isRequired
};

export default withPaging(SearchArist);

