import { PlaylistModal, Sidebar } from "components";
import { useNavigate, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import "./SingleVideo.css";
import { useAuth, usePlaylist, useVideos } from "contexts";
import {
  addToHistory,
  addToLiked,
  copyToClipboard,
  getVideoFromVideoId,
  isVideoInHistory,
  isVideoInLiked,
  removeFromLiked,
} from "utils";
import { MdOutlineTimer, MdPlaylistAdd, MdShare } from "react-icons/md";
import { useState, useEffect } from "react";
import classNames from "classnames";
import { RiThumbUpFill, RiThumbUpLine } from "react-icons/ri";

export const SingleVideo = () => {
  const { videoId } = useParams();
  const { videoList } = useVideos();
  const currVideo = getVideoFromVideoId(videoList, videoId);
  const { title, description, creator, creatorLogo, releaseDate, duration } =
    currVideo;
  const { history, likedVideos, playlistDispatch } = usePlaylist();
  const { isLoggedIn, token } = useAuth();
  const navigate = useNavigate();
  const isVideoLiked = isVideoInLiked(likedVideos, videoId);
  const [isOpen, setisOpen] = useState(false);
  const openModal = () => setisOpen(true);
  const closeModal = () => setisOpen(false);
  const likedButtonHandler = () => {
    if (isLoggedIn) {
      isVideoLiked
        ? removeFromLiked(currVideo, token, playlistDispatch)
        : addToLiked(currVideo, token, playlistDispatch);
    } else {
      navigate("/login", { replace: true });
    }
  };

  useEffect(() => {
    isLoggedIn &&
      currVideo._id !== "" &&
      (isVideoInHistory(history, videoId)
        ? playlistDispatch({ type: "PUSH_VIDEO_TO_TOP", payload: currVideo })
        : addToHistory(currVideo, token, playlistDispatch));
  }, [currVideo]);

  return (
    <>
      {isOpen && (
        <PlaylistModal closeModal={closeModal} currentVideo={currVideo} />
      )}
      <div className="flex">
        <Sidebar />
        <section className="singlevideo">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoId}`}
            playing={true}
            width="100%"
            controls={true}
          />
          <p className="singlevideo__title" title={title}>
            {title}
          </p>

          <div className="singlevideo__info">
            <div className="avatar avatar--xs">
              <img
                className="avatar__img"
                src={creatorLogo}
                alt={`${creator} logo`}
              />
            </div>
            <div>
              <p className="singlevideo__creator">{creator}</p>
              <div className="singlevideo__timeline">
                <span className="singlevideo__date">{releaseDate}</span>
                <MdOutlineTimer className="singlevideo__duration" />
                <span> {duration}</span>
              </div>
            </div>
            <div className="singlevideo__icons">
              <button
                className={classNames("btn", "btn--outline-primary", {
                  "btn--selected": isVideoLiked,
                })}
                title="Like Video"
                onClick={likedButtonHandler}
              >
                {isVideoLiked ? (
                  <>
                    <RiThumbUpFill className="btn__icon" /> LIKED
                  </>
                ) : (
                  <>
                    <RiThumbUpLine className="btn__icon" /> LIKE
                  </>
                )}
              </button>

              <button
                className="btn btn--outline-primary"
                onClick={() => {
                  isLoggedIn
                    ? openModal()
                    : navigate("/login", { replace: true });
                }}
              >
                <MdPlaylistAdd /> SAVE TO PLAYLIST
              </button>
              <button
                className="btn btn--outline-primary"
                onClick={() => copyToClipboard(videoId)}
              >
                <MdShare />
                SHARE
              </button>
            </div>
          </div>

          <pre className="singlevideo__description">{description}</pre>
        </section>
      </div>
    </>
  );
};
