export const getPlaylistFromPlaylistId = (playlists, playlistId) => {
  return playlists.find(({ _id }) => playlistId === _id);
};
