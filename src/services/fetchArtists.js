export const fetchArtists = (search, page) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${search}&fmt=json&limit=25&offset=${(page - 1) * 25}`)
  // this results in 25 per page
    .then(res => res.json())
    .then(json => ({ 
      totalPages: Math.ceil(json.count / 25),
      artists: json.artists.map(artist => ({
        id: artist.id,
        name: artist.name,
        url: artist.url
      }))
    }));
};
  
