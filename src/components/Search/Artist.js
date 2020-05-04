import React from 'react';
import PropTypes from 'prop-types';

const Artist = ({ name, url }) => (
  <a href={url}>{name}</a>
);

Artist.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Artist;

// id like for them to click on the artist and have that url take you somewhere
