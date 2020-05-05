import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import AlbumList from '../components/Albums/AlbumList.js';
import { fetchAlbums } from '../services/fetchAlbums.js';
import { withPaging } from '../utils/Paging.js';

const SearchAlbum = ({ page, setTotalPages }) => {
//   const [artistId, setArtistId] = useState('');
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);
  //   useParams returns an objects were all the values are what's in the url
  const { artistId } = useParams();

  // if there is an artistId
  useEffect(() => { 
    if(artistId)
      setLoading(true);

    fetchAlbums(artistId, page)
      .then(({ albums, totalPages }) => {
        setAlbums(albums);
        setTotalPages(totalPages);
        setLoading(false);
      });
  }, [page]);

  if(loading) return <h1>LOADIN</h1>;
  return (
    <>
      <AlbumList albums={albums} />
    </>
  );
};

SearchAlbum.propTypes = {
  page: PropTypes.number.isRequired,
  setTotalPages: PropTypes.func.isRequired
};

export default withPaging(SearchAlbum);

// http://coverartarchive.org/release/<RELEASE_ID>/front
