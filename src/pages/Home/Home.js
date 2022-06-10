import { Sidebar, VideoListing } from "components";
import { useDocumentTitle } from "hooks";

export const Home = () => {
  useDocumentTitle("Home | Fino World");

  return (
    <div className="flex">
      <Sidebar />
      <VideoListing />
    </div>
  );
};
