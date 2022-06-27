export const isVideoInLiked = (likedVideos, currentVideoId) =>
  likedVideos.find((likedVideo) => likedVideo._id === currentVideoId)
    ? true
    : false;
