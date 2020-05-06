import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import SongList from '../components/Songs/SongList.js';
import { fetchSongs } from '../services/fetchSongs.js';
import { withPaging } from '../utils/Paging.js';

const SearchSong = ({ page, setTotalPages }) => {
  const [songs, setsongs] = useState([]);
  const [loading, setLoading] = useState(false);
  const { albumId } = useParams();

  useEffect(() => { 
    if(albumId)
      setLoading(true);

    fetchSongs(albumId, page)
      .then(({ songs, totalPages }) => {
        setsongs(songs);
        setTotalPages(totalPages);
        setLoading(false);
      });
  }, [page]);

  if(loading) return <h1>LOADIN</h1>;
  return (
    <>
      <SongList songs={songs} />
    </>
  );
};

SearchSong.propTypes = {
  page: PropTypes.number.isRequired,
  setTotalPages: PropTypes.func.isRequired
};

export default withPaging(SearchSong);

