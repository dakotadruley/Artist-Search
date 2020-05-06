import React from 'react';
import PropTypes from 'prop-types';

const Artist = ({ name }) => (
  <h2>{name}</h2>
);

Artist.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Artist;

