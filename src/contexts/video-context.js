import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { showToast } from "utils";
import { useLoader } from "./loader-context";

const VideoContext = createContext();

const VideoProvider = ({ children }) => {
  const [videoList, setVideoList] = useState([]);
  const [categories, setCategories] = useState([]);
  const { setShowLoader } = useLoader();

  useEffect(() => {
    (async () => {
      try {
        setShowLoader(true);
        const categoryResponse = await axios.get("/api/categories");
        setCategories(categoryResponse.data.categories);
      } catch (error) {
        showToast("error", "Error Occurred while loading Categories");
      } finally {
        setShowLoader(false);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const productResponse = await axios.get("/api/videos");
        setVideoList(
          productResponse.data.videos.sort(() => Math.random() - 0.5)
        );
      } catch (error) {
        showToast("error", "Error Occurred while loading Videos");
      }
    })();
  }, [setVideoList]);

  return (
    <VideoContext.Provider value={{ videoList, categories }}>
      {children}
    </VideoContext.Provider>
  );
};

const useVideos = () => useContext(VideoContext);

export { VideoProvider, useVideos };
