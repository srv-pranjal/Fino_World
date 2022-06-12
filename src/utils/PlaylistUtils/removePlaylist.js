import axios from "axios";
import { showToast } from "utils";

export const removePlaylist = async (playlistId, token, playlistDispatch) => {
  try {
    const {
      data: { playlists },
    } = await axios.delete(`/api/user/playlists/${playlistId}`, {
      headers: {
        authorization: token,
      },
    });
    playlistDispatch({ type: "UPDATE_PLAYLISTS", payload: playlists });
    showToast("info", "Playlist Deleted");
  } catch (error) {
    console.error(error);
    showToast("error", "Failed to delete Playlist");
  }
};
