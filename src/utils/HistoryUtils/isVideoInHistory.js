export const isVideoInHistory = (history, currentVideoId) =>
  history.find((historyVideo) => historyVideo._id === currentVideoId)
    ? true
    : false;
