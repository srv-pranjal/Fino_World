import axios from "axios";
import { showToast } from "utils";

export const addToLiked = async (video, token, playlistDispatch) => {
  try {
    const {
      data: { likes },
    } = await axios.post(
      "/api/user/likes",
      { video },
      {
        headers: {
          authorization: token,
        },
      }
    );
    playlistDispatch({ type: "UPDATE_LIKED_VIDEOS", payload: likes });
    showToast("success", "Added to Liked Videos");
  } catch (error) {
    showToast("error", "Failed to Add to History");
  }
};
