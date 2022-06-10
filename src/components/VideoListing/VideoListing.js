import { useState } from "react";
import "./VideoListing.css";
import { CategoryChip, VideoCard, NothingToShow } from "components";
import { useVideos } from "contexts";
import { getCategoryFilteredData } from "utils";

export const VideoListing = () => {
  const { videoList, categories } = useVideos();
  const [activeCategory, setActiveCategory] = useState("All");

  const videosToDisplay = getCategoryFilteredData(videoList, activeCategory);

  return (
    <>
      <div className="videos-container">
        <div className="chips-container">
          <CategoryChip
            categoryName="All"
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
          {categories.map(({ _id, categoryName }) => {
            return (
              <CategoryChip
                key={_id}
                categoryName={categoryName}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />
            );
          })}
        </div>
        <section className="explore">
          {videosToDisplay.length > 0 ? (
            videosToDisplay.map((video) => (
              <VideoCard key={video._id} video={video} />
            ))
          ) : (
            <NothingToShow />
          )}
        </section>
      </div>
    </>
  );
};
