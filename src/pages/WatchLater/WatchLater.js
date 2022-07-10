import { HorizontalVideoCard, NothingToShow, Sidebar } from "components";
import { useAuth, usePlaylist } from "contexts";
import "./WatchLater.css";
import { removeFromWatchLater } from "utils";
import { useDocumentTitle } from "hooks";

export const WatchLater = () => {
  const { watchlater, playlistDispatch } = usePlaylist();
  const { token } = useAuth();

  useDocumentTitle("WatchLater | Fino World");

  return (
    <div className="flex">
      <Sidebar />
      <section className="video">
        <div className="video__heading-container">
          <p className="video__heading">Watch Later</p>
          <p className="video__sub-heading">{watchlater.length} videos</p>
        </div>
        {watchlater.length > 0 ? (
          <div className="video__list">
            {watchlater.map((video) => (
              <HorizontalVideoCard
                key={video._id}
                video={video}
                removeHandler={removeFromWatchLater}
                handlerArgs={[video, token, playlistDispatch]}
              />
            ))}
          </div>
        ) : (
          <NothingToShow />
        )}
      </section>
    </div>
  );
};
