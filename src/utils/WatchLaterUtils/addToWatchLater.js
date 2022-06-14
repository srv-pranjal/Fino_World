import axios from "axios";
import { showToast } from "utils";

export const addToWatchLater = async (video, token, playlistDispatch) => {
  try {
    const {
      data: { watchlater },
    } = await axios.post(
      "/api/user/watchlater",
      { video },
      {
        headers: {
          authorization: token,
        },
      }
    );
    playlistDispatch({ type: "UPDATE_WATCHLATER", payload: watchlater });
    showToast("success", "Added to Watch Later");
  } catch (error) {
    showToast("error", "Failed to Add to Watch Later");
  }
};
