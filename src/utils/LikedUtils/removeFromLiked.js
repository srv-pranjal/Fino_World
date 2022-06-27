import axios from "axios";
import { showToast } from "utils";

export const removeFromLiked = async (video, token, playlistDispatch) => {
  try {
    const {
      data: { likes },
    } = await axios.delete(`/api/user/likes/${video._id}`, {
      headers: {
        authorization: token,
      },
    });
    playlistDispatch({ type: "UPDATE_LIKED_VIDEOS", payload: likes });
    showToast("info", "Removed From Liked Videos");
  } catch (error) {
    showToast("error", "Failed to Remove From Liked Videos");
  }
};
