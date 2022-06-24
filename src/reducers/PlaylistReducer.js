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
    case "UPDATE_HISTORY":
      return {
        ...playlistState,
        history: payload,
      };
    case "PUSH_VIDEO_TO_TOP":
      return {
        ...playlistState,
        history: [
          payload,
          ...playlistState.history.filter(({ _id }) => _id !== payload._id),
        ],
      };
    case "UPDATE_LIKED_VIDEOS":
      return {
        ...playlistState,
        likedVideos: payload,
      };
    default:
      return playlistState;
  }
};
