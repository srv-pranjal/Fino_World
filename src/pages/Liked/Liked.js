import { HorizontalVideoCard, NothingToShow, Sidebar } from "components";
import { useAuth, usePlaylist } from "contexts";
import { useDocumentTitle } from "hooks";
import { removeFromLiked } from "utils";

export const Liked = () => {
  const { likedVideos, playlistDispatch } = usePlaylist();
  const { token } = useAuth();

  useDocumentTitle("Liked | Fino World");

  return (
    <div className="flex">
      <Sidebar />
      <section className="video">
        <div className="video__heading-container">
          <p className="video__heading">Liked</p>
          <p className="video__sub-heading">{likedVideos.length} videos</p>
        </div>
        {likedVideos.length > 0 ? (
          <div className="video__list">
            {likedVideos.map((video) => (
              <HorizontalVideoCard
                key={video._id}
                video={video}
                removeHandler={removeFromLiked}
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
