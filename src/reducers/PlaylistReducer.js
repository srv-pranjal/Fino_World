export const PlaylistReducer = (playlistState, { type, payload }) => {
  switch (type) {
    case "UPDATE_WATCHLATER":
      return {
        ...playlistState,
        watchlater: payload,
      };
    case "UPDATE_PLAYLISTS":
      return {
        ...playlistState,
        playlists: payload,
      };
    case "UPDATE_SINGLE_PLAYLIST":
      return {
        ...playlistState,
        playlists: playlistState.playlists.map((playlist) =>
          playlist._id === payload.playlistId
            ? { ...payload.playlist }
            : playlist
        ),
      };
    default:
      return playlistState;
  }
};
