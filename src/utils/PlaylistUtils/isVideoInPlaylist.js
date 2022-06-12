export const isVideoInPlaylist = (playlists, currentVideoId, playlistId) =>
  playlists
    .find(({ _id }) => _id === playlistId)
    ?.videos.find(({ _id }) => _id === currentVideoId)
    ? true
    : false;
