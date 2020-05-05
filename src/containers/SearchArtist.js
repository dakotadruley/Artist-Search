import React, { useState } from 'react';
import ArtistList from '../components/Artists/ArtistList.js';
import SearchDisplay from '../components/Search/SearchDisplay.js';
import { fetchArtists } from '../services/fetchArtists.js';
import Paging from '../components/Paging/Paging.js';

const SearchArist = () => {
  const [search, setSearch] = useState('');
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = ({ target }) => {
    setSearch(target.value);
  };

  const handleClick = () => {
    setLoading(true);
    fetchArtists(search)
      .then(artists => setArtists(artists))
      .then(() => setLoading(false));
  };

  if(loading) return <h1>LOADIN</h1>;
  return (
    <>
      <SearchDisplay onChange={handleChange} onClick={handleClick} />
      <ArtistList artists={artists} />
    </>
  );
};
export default SearchArist;

