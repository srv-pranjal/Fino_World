import axios from "axios";
import { showToast } from "utils";

export const removeVideoFromPlaylist = async (
  videoId,
  playlistId,
  token,
  playlistDispatch
) => {
  try {
    const {
      data: { playlist },
    } = await axios.delete(`/api/user/playlists/${playlistId}/${videoId}`, {
      headers: {
        authorization: token,
      },
    });
    playlistDispatch({
      type: "UPDATE_SINGLE_PLAYLIST",
      payload: { playlistId, playlist },
    });
    showToast("info", "Removed Video to Playlist");
  } catch (error) {
    console.error(error);
    showToast("error", "Failed to Remove video from Playlist");
  }
};
