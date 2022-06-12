import { HorizontalVideoCard, NothingToShow, Sidebar } from "components";
import { useAuth, usePlaylist } from "contexts";
import { useParams } from "react-router-dom";
import { getPlaylistFromPlaylistId, removeVideoFromPlaylist } from "utils";

export const SinglePlaylist = () => {
  const { playlistId } = useParams();
  const { playlists, playlistDispatch } = usePlaylist();
  const { token } = useAuth();
  const { playlistName, videos } = getPlaylistFromPlaylistId(
    playlists,
    playlistId
  );
  
  return (
    <div className="flex">
      <Sidebar />
      <section className="video">
        <div className="video__heading-container">
          <p className="video__heading">{playlistName}</p>
          <p className="video__sub-heading">{videos.length} Videos</p>
        </div>
        {videos.length > 0 ? (
          <div className="video__list">
            {videos.map((video) => (
              <HorizontalVideoCard
                key={video._id}
                video={video}
                removeHandler={removeVideoFromPlaylist}
                handlerArgs={[video._id, playlistId, token, playlistDispatch]}
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
