import axios from "axios";
import { showToast } from "utils";

export const addVideoToPlaylist = async (
  video,
  playlistId,
  token,
  playlistDispatch
) => {
  try {
    const {
      data: { playlist },
    } = await axios.post(
      `/api/user/playlists/${playlistId}`,
      { video },
      {
        headers: {
          authorization: token,
        },
      }
    );
    playlistDispatch({
      type: "UPDATE_SINGLE_PLAYLIST",
      payload: { playlistId, playlist },
    });
    showToast("success", "Added Video to Playlist");
  } catch (error) {
    showToast("error", "Failed to Add Video to Playlist");
  }
};
