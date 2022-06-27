import axios from "axios";
import { showToast } from "utils";

export const clearHistory = async (token, playlistDispatch) => {
  try {
    const {
      data: { history },
    } = await axios.delete("/api/user/history/all", {
      headers: {
        authorization: token,
      },
    });
    playlistDispatch({ type: "UPDATE_HISTORY", payload: history });
    showToast("info", "History Cleared!");
  } catch (error) {
    showToast("error", "Failed to clear History");
  }
};
