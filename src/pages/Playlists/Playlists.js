import { PlaylistCard, Sidebar } from "components";
import { usePlaylist } from "contexts";

import "./Playlists.css";

export const Playlists = () => {
  const { watchlater, likedVideos, playlists } = usePlaylist();
  return (
    <div className="flex">
      <Sidebar />
      <section className="video">
        <div className="video__heading-container">
          <p className="video__heading">Playlists</p>
          <p className="video__sub-heading">{playlists.length + 2} Playlists</p>
        </div>

        <div className="playlist-container">
          <PlaylistCard
            playlistName={"Watch Later"}
            playlistVideos={watchlater}
            route={"/watchlater"}
          />
          <PlaylistCard
            playlistName={"Liked"}
            playlistVideos={likedVideos}
            route={"/liked"}
          />
          {playlists.map(({ _id, playlistName, videos }) => (
            <PlaylistCard
              key={_id}
              playlistId={_id}
              playlistName={playlistName}
              playlistVideos={videos}
              route={`/playlist/${_id}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
