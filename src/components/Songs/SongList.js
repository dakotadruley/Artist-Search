import React from 'react';
import PropTypes from 'prop-types';
import Song from './Song.js';
import { Link } from 'react-router-dom';

const SongList = ({ songs }) => {
  const songElements = songs.map(song => (
    <Link to={`/Lyrics/${song.id}`} key={song.id} > 
      <li>
        <Song {...song} />
      </li>
    </Link>
  ));
  // need artist name 
  return (
    <ul>
      {songElements}
    </ul>
  );
};

SongList.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })).isRequired
};

export default SongList;
