import { useState } from "react";
import { Modal } from "components/Modal/Modal";
import "./PlaylistModal.css";
import { MdOutlineWatchLater, MdPlaylistPlay } from "react-icons/md";
import { FaPlus, FaTimes } from "react-icons/fa";
import { useAuth, usePlaylist } from "contexts";
import {
  addToWatchLater,
  addVideoToPlaylist,
  createNewPlaylist,
  isVideoInPlaylist,
  isVideoInWatchLater,
  removeFromWatchLater,
  removeVideoFromPlaylist,
} from "utils";
export const PlaylistModal = ({ closeModal, currentVideo }) => {
    
  const [showInput, setShowInput] = useState(false);
  const [newPlaylistName, setNewPlaylistName] = useState("");
  const { token } = useAuth();
  const { watchlater, playlists, playlistDispatch } = usePlaylist();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    createNewPlaylist(newPlaylistName, token, playlistDispatch);
    setShowInput(false);
    setNewPlaylistName("");
  };

  const addToWatchLaterHandler = (event) => {
    if (event.target.checked) {
      addToWatchLater(currentVideo, token, playlistDispatch);
    } else {
      removeFromWatchLater(currentVideo, token, playlistDispatch);
    }
  };

  const addToPlaylistHandler = (event, playlistId) => {
    if (event.target.checked) {
      addVideoToPlaylist(currentVideo, playlistId, token, playlistDispatch);
    } else {
      removeVideoFromPlaylist(
        currentVideo._id,
        playlistId,
        token,
        playlistDispatch
      );
    }
  };

  return (
    <Modal closeModal={closeModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
          <p>Save to </p>
          <span className="modal__btn-close" role="button" onClick={closeModal}>
            <FaTimes />
          </span>
        </div>
        <hr />
        <div className="modal__body">
          <label className="modal__item">
            <div className="modal__icon">
              <MdOutlineWatchLater />
            </div>
            <span>Watch Later</span>
            <input
              type="checkbox"
              checked={isVideoInWatchLater(watchlater, currentVideo._id)}
              onChange={addToWatchLaterHandler}
            />
            <span className="checkbox" />
          </label>
          {playlists.map(({ _id, playlistName }) => {
            return (
              <label key={_id} className="modal__item">
                <div className="modal__icon">
                  <MdPlaylistPlay />
                </div>
                <span>{playlistName}</span>
                <input
                  type="checkbox"
                  checked={isVideoInPlaylist(playlists, currentVideo._id, _id)}
                  onChange={(e) => addToPlaylistHandler(e, _id)}
                />
                <span className="checkbox" />
              </label>
            );
          })}
        </div>
        <hr />
        <div className="modal__footer">
          {showInput ? (
            <form
              className="modal__item center-main-axis"
              onSubmit={formSubmitHandler}
            >
              <input
                className="input input--outlined"
                placeholder="Playlist Name"
                type="text"
                value={newPlaylistName}
                onChange={(e) => setNewPlaylistName(e.target.value)}
                required
              />
              <button className="btn btn--secondary" type="submit">
                Create
              </button>
            </form>
          ) : (
            <div className="modal__item" onClick={() => setShowInput(true)}>
              <div className="modal__icon avatar--secondary">
                <FaPlus />
              </div>
              <span>Create New Playlist</span>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};
