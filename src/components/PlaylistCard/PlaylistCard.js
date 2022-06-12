import "./PlaylistCard.css";
import nothingtoshow from "assets/nothingtoshow.svg";
import { MdPlaylistPlay, MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { removePlaylist } from "utils";
import { useAuth, usePlaylist } from "contexts";

export const PlaylistCard = ({
  playlistName,
  playlistVideos,
  route,
  playlistId,
}) => {
  const navigate = useNavigate();
  const { token } = useAuth();
  const { playlistDispatch } = usePlaylist();

  return (
    <article className="card card--vertical playlist-card">
      <div className="card__img-container" onClick={() => navigate(route)}>
        <img
          src={
            playlistVideos.length > 0
              ? `https://i.ytimg.com/vi/${playlistVideos[0]._id}/maxresdefault.jpg`
              : nothingtoshow
          }
          className="img-responsive"
          alt={`${playlistName} Videos`}
        />
        <div className="card__overlay">
          <div className="flex flex-col center-main-axis center-cross-axis">
            {playlistVideos.length}
            <MdPlaylistPlay />
          </div>
        </div>
      </div>
      <div className="card__content">
        {playlistName} Videos
        {playlistId && (
          <p
            className="delete-playlist"
            title="Delete Playlist"
            onClick={() => removePlaylist(playlistId, token, playlistDispatch)}
          >
            <MdDelete />
          </p>
        )}
      </div>
    </article>
  );
};
