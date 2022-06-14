import { createContext, useContext, useReducer } from "react";
import { PlaylistReducer } from "reducers";

const PlaylistContext = createContext();

const PlaylistProvider = ({ children }) => {
  const [{ playlists, watchlater, history, likedVideos }, playlistDispatch] =
    useReducer(PlaylistReducer, {
      playlists: [],
      watchlater: [],
      history: [],
      likedVideos: [],
    });
  return (
    <PlaylistContext.Provider
      value={{ playlists, watchlater, history, likedVideos, playlistDispatch }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};

const usePlaylist = () => useContext(PlaylistContext);

export { PlaylistProvider, usePlaylist };
