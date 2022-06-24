import axios from "axios";
import { showToast } from "utils";

export const addToHistory = async (video, token, playlistDispatch) => {
  try {
    const {
      data: { history },
    } = await axios.post(
      "/api/user/history",
      { video },
      {
        headers: {
          authorization: token,
        },
      }
    );
    playlistDispatch({ type: "UPDATE_HISTORY", payload: history });
  } catch (error) {
    showToast("error", "Failed to Add to History");
  }
};
