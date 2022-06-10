export const getCategoryFilteredData = (videos, categoryName) => {
  if (categoryName && categoryName !== "All") {
    return videos.filter((video) => video.categoryName === categoryName);
  }
  return videos;
};
