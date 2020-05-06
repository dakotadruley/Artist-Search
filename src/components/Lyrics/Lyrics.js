import React from 'react';
import PropTypes from 'prop-types';

const Lyrics = ({ lyrics }) => (
  <h2>{lyrics}</h2>
);

Lyrics.propTypes = {
  lyrics: PropTypes.string.isRequired
};

export default Lyrics;
