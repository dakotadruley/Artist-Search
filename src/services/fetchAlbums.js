export const fetchAlbums = (artistId, page) => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${artistId}&fmt=json&offset=${(page - 1) * 25}`)
    .then(res => res.json())
    .then(json => ({
      totalPages: Math.ceil(json.count / 25),
      albums: json.releases.map(release => ({
        id: release.id,
        title: release.title,
        date: release.date
      }))
    }));
};
    
  
