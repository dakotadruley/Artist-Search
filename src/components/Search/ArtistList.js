import React from 'react';
import PropTypes from 'prop-types';
import Artist from './Artist.js';
import { Link } from 'react-router-dom'
;
const ArtistList = ({ artists }) => {
  const artistElements = artists.map(artist => (
    <Link to={`/Detail/${artist.id}`} key={artist.id} > 
      <li>
        <Artist {...artist} />
      </li>
    </Link>
  ));

  return (
    <ul>
      {artistElements}
    </ul>
  );
};

ArtistList.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })).isRequired
};

export default ArtistList;
