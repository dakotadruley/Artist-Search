import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Lyrics from '../components/Lyrics/Lyrics.js';
import { fetchLyrics } from '../services/fetchSongs.js';

const SearchLyrics = () => {
  const [lyrics, setlyrics] = useState('');
  const [loading, setLoading] = useState(false);
  const { artistName, songTitle } = useParams();

  useEffect();

  useEffect(() => { 
    if(artistName && songTitle)
      setLoading(true);

    fetchLyrics(artistName, songTitle)
      .then(({ lyrics }) => {
        setlyrics(lyrics);
        setLoading(false);
      });
  });

  if(loading) return <h1>LOADIN</h1>;
  return (
    <>
      <Lyrics lyrics={lyrics} />
    </>
  );
};

export default SearchLyrics;

