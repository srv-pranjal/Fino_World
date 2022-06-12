import { useState } from "react";
import {
  VideoCard,
  CategoryChip,
  PlaylistModal,
  NothingToShow,
} from "components";
import "./VideoListing.css";
import { useVideos } from "contexts";
import { getCategoryFilteredData } from "utils";

export const VideoListing = () => {
  const [isOpen, setisOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState({});
  const { videoList, categories } = useVideos();
  const [activeCategory, setActiveCategory] = useState("All");

  const openModal = () => setisOpen(true);
  const closeModal = () => setisOpen(false);

  const videosToDisplay = getCategoryFilteredData(videoList, activeCategory);

  return (
    <>
      {isOpen && (
        <PlaylistModal closeModal={closeModal} currentVideo={currentVideo} />
      )}
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
              <VideoCard
                key={video._id}
                video={video}
                openModal={openModal}
                setCurrentVideo={setCurrentVideo}
              />
            ))
          ) : (
            <NothingToShow />
          )}
        </section>
      </div>
    </>
  );
};
