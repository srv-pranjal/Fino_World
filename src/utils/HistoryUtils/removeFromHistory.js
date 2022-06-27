import axios from "axios";
import { showToast } from "utils";

export const removeFromHistory = async (video, token, playlistDispatch) => {
  try {
    const {
      data: { history },
    } = await axios.delete(`/api/user/history/${video._id}`, {
      headers: {
        authorization: token,
      },
    });
    playlistDispatch({ type: "UPDATE_HISTORY", payload: history });
    showToast("info", "Removed From History");
  } catch (error) {
    showToast("error", "Failed to Remove From History");
  }
};
