export const isVideoInWatchLater = (watchlater, currentVideoId) =>
  watchlater.find((watchVideo) => watchVideo._id === currentVideoId)
    ? true
    : false;
