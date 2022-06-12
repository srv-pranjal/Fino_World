import { FaPlayCircle } from "react-icons/fa";
import { MdOutlineClose, MdOutlineTimer } from "react-icons/md";
import "./HorizontalVideoCard.css";

export const HorizontalVideoCard = ({ video, removeHandler, handlerArgs }) => {
  const { _id, title, creator, description, releaseDate, duration } = video;

  return (
    <article className="card card--horizontal ">
      <div
        className="card__close-btn"
        title="Remove"
        onClick={() => removeHandler(...handlerArgs)}
      >
        <MdOutlineClose />
      </div>
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
      </div>
      <div className="card__content">
        <div className="card__video-details">
          <p className="card__creater">{creator}</p>
          <p className="card__title" title={title}>
            {title}
          </p>
          <p className="card__description">{description}</p>
        </div>
        <div className="card__video-info">
          <span>{releaseDate}</span>
          <MdOutlineTimer className="card__duration" />
          <span> {duration}</span>
        </div>
      </div>
    </article>
  );
};
