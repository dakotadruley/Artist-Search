import React from 'react';
import PropTypes from 'prop-types';

const Album = ({ title, date }) => (
  <section>
    <h2>{title}</h2>
    <p>{date}</p>
  </section>
);

Album.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

export default Album;

// http://coverartarchive.org/release/<RELEASE_ID>/front
// don't make a fetch call for cover art, it's conditional and you need the albulm id 
