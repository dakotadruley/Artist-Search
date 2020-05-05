import React from 'react';
import PropTypes from 'prop-types';

const Song = ({ title }) => (
  <h2>{title}</h2>
);

Song.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Song;
