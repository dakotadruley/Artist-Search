import React from 'react';
import PropTypes from 'prop-types';
import Album from './Album.js';
import { Link } from 'react-router-dom';

const AlbumList = ({ albums }) => {
  const albumElements = albums.map(album => (
    <Link to={`/Songs/${album.id}`} key={album.id} > 
      <li>
        <Album{...album} />
      </li>
    </Link>
  ));

  return (
    <ul>
      {albumElements}
    </ul>
  );
};

AlbumList.propTypes = {
  albums: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired
};

export default AlbumList;
