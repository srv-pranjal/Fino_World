import axios from "axios";
import { showToast } from "utils";

export const removeFromWatchLater = async (video, token, playlistDispatch) => {
  try {
    const {
      data: { watchlater },
    } = await axios.delete(`/api/user/watchlater/${video._id}`, {
      headers: {
        authorization: token,
      },
    });
    playlistDispatch({ type: "UPDATE_WATCHLATER", payload: watchlater });
    showToast("info", "Removed From Watch Later");
  } catch (error) {
    showToast("error", "Failed to Remove From Watch Later");
  }
};
