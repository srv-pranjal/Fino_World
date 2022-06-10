import {
  MdPlaylistAdd,
  MdOutlineWatchLater,
  MdShare,
  MdOutlineTimer,
} from "react-icons/md";
import { FaPlayCircle } from "react-icons/fa";
import "./VideoCard.css";
import { copyToClipboard } from "utils";

export const VideoCard = ({ video }) => {
  const { _id, title, creator, creatorLogo, releaseDate, duration } = video;

  return (
    <article className="card card--vertical ">
      <div className="card__img-container">
        <div className="card__overlay">
          <FaPlayCircle />
          <span>Play</span>
        </div>
        <img
          src={`https://i.ytimg.com/vi/${_id}/maxresdefault.jpg`}
          className="img-responsive"
          alt={title}
        />
        <div className="card__icons">
          <div title="Add To Watch Later" role="button">
            <MdOutlineWatchLater />
          </div>

          <div title="Add To Playlist">
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
