import { useNavigate } from "react-router-dom";
import {
  MdPlaylistAdd,
  MdOutlineWatchLater,
  MdShare,
  MdTaskAlt,
  MdOutlineTimer,
} from "react-icons/md";
import { FaPlayCircle } from "react-icons/fa";
import "./VideoCard.css";
import { addToWatchLater, removeFromWatchLater, copyToClipboard } from "utils";
import { useAuth, usePlaylist } from "contexts";

export const VideoCard = ({ video, openModal, setCurrentVideo }) => {
  const { _id, title, creator, creatorLogo, releaseDate, duration } = video;
  const { watchlater, playlistDispatch } = usePlaylist();
  const { isLoggedIn, token } = useAuth();

  const navigate = useNavigate();

  const addToPlaylistHandler = () => {
    if (isLoggedIn) {
      setCurrentVideo(video);
      openModal();
    } else {
      navigate("/login", { replace: true });
    }
  };

  return (
    <article className="card card--vertical ">
      <div className="card__img-container">
        <div
          className="card__overlay"
          onClick={() => navigate(`/video/${_id}`)}
        >
          <FaPlayCircle />
          <span>Play</span>
        </div>
        <img
          src={`https://i.ytimg.com/vi/${_id}/maxresdefault.jpg`}
          className="img-responsive"
          alt={title}
        />
        <div className="card__icons">
          {isLoggedIn ? (
            watchlater.find(
              (watchlaterVideo) => watchlaterVideo._id === _id
            ) ? (
              <div
                title="Remove From Watch Later"
                role="button"
                onClick={() =>
                  removeFromWatchLater(video, token, playlistDispatch)
                }
              >
                <MdTaskAlt />
              </div>
            ) : (
              <div
                title="Add To Watch Later"
                role="button"
                onClick={() => addToWatchLater(video, token, playlistDispatch)}
              >
                <MdOutlineWatchLater />
              </div>
            )
          ) : (
            <div
              title="Add To Watch Later"
              role="button"
              onClick={() => navigate("/login", { replace: true })}
            >
              <MdOutlineWatchLater />
            </div>
          )}

          <div title="Add To Playlist" onClick={addToPlaylistHandler}>
            <MdPlaylistAdd />
          </div>

          <div title="Share" onClick={() => copyToClipboard(_id)}>
            <MdShare />
          </div>
        </div>
      </div>
      <div className="card__content">
        <div className="avatar avatar--xs">
          <img
            className="avatar__img"
            src={creatorLogo}
            alt={`${creator} logo`}
          />
        </div>
        <div className="card__video-details">
          <p className="card__title" title={title}>
            {title}
          </p>
          <p className="card__creater">{creator}</p>
          <div className="card__video-info">
            <span>{releaseDate}</span>
            <MdOutlineTimer className="card__duration" />
            <span> {duration}</span>
          </div>
        </div>
      </div>
    </article>
  );
};
