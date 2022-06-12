import axios from "axios";
import { showToast } from "utils";

export const createNewPlaylist = async (
  playlistName,
  token,
  playlistDispatch
) => {
  try {
    const {
      data: { playlists },
    } = await axios.post(
      "/api/user/playlists",
      { playlist: { playlistName } },
      {
        headers: {
          authorization: token,
        },
      }
    );
    playlistDispatch({ type: "UPDATE_PLAYLISTS", payload: playlists });
    showToast("success", "Created New Playlist");
  } catch (error) {
    showToast("error", "Failed to Create new Playlist");
  }
};
