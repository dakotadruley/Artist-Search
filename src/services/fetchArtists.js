export const fetchArtists = (search) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${search}&fmt=json&limit=25`)
    .then(res => res.json())
    .then(json => json.map(artist => ({
      id: artist.id,
      name: artist.name,
      url: artist.url,
    })));
};
  
