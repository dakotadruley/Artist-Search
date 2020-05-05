export const fetchSongs = (albumId, page) => {
  return fetch(`http://musicbrainz.org/ws/2/recording?release=${albumId}&fmt=json&offset=${(page - 1) * 25}`)
    .then(res => res.json())
    .then(json => ({
      totalPages: Math.ceil(json.count / 25),
      songs: json.recordings.map(recording => ({
        id: recording.id,
        title: recording.title,
        date: recording.date
      }))
    }));
};
      
