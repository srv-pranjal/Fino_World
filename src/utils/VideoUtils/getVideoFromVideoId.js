export const getVideoFromVideoId = (videos, videoId) => {
  if (videos.length > 0) {
    return videos.find(({ _id }) => videoId === _id);
  }
  const defaultVideo = {
    _id: "",
    categoryName: "",
    creator: "",
    creatorLogo: "",
    title: "",
    description: "",
    duration: "",
    releaseDate: "",
  };
  return defaultVideo;
};
