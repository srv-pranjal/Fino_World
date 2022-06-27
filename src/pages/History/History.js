import { HorizontalVideoCard, NothingToShow, Sidebar } from "components";
import { useAuth, usePlaylist } from "contexts";
import { useDocumentTitle } from "hooks";
import { clearHistory, removeFromHistory } from "utils";

export const History = () => {
  const { history, playlistDispatch } = usePlaylist();
  const { token } = useAuth();

  useDocumentTitle("History | Fino World");

  return (
    <div className="flex">
      <Sidebar />
      <section className="video">
        <div className="video__heading-container">
          <p className="video__heading">History</p>
          <p className="video__sub-heading">{history.length} videos</p>
          {history.length > 0 &&<button
            className="btn btn--outline-primary"
            onClick={() => clearHistory(token, playlistDispatch)}
          >
            CLEAR HISTORY
          </button>}
        </div>
        {history.length > 0 ? (
          <div className="video__list">
            {history.map((video) => (
              <HorizontalVideoCard
                key={video._id}
                video={video}
                removeHandler={removeFromHistory}
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
