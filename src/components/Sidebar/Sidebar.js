import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { BiHomeCircle, BiLike } from "react-icons/bi";
import { MdOutlineWatchLater } from "react-icons/md";
import { RiPlayList2Fill, RiHistoryFill } from "react-icons/ri";
import { useSidebar } from "contexts";
import classNames from "classnames";

export const Sidebar = () => {
  const { isSidebarHidden } = useSidebar();
  return (
    <aside
      className={classNames("sidebar", "sidebar--collapsed", "fixed", {
        "sidebar--hidden": isSidebarHidden,
      })}
    >
      <div className="sidebar__list flex flex-col">
        <NavLink className="sidebar__list-item flex" to="/" role="button">
          <BiHomeCircle className="btn__icon" />
          <span className="sidebar__link-name">Home</span>
          <span className="tooltip">Home</span>
        </NavLink>
        <NavLink
          className="sidebar__list-item flex "
          to="/playlists"
          role="button"
        >
          <RiPlayList2Fill className="btn__icon" />
          <span className="sidebar__link-name">Playlists</span>
          <span className="tooltip">Playlists</span>
        </NavLink>
        <NavLink className="sidebar__list-item flex" to="/liked" role="button">
          <BiLike className="btn__icon" />
          <span className="sidebar__link-name">Liked</span>
          <span className="tooltip">Liked</span>
        </NavLink>
        <NavLink
          className="sidebar__list-item flex"
          to="/watchlater"
          role="button"
        >
          <MdOutlineWatchLater className="btn__icon" />
          <span className="sidebar__link-name">Watch Later</span>
          <span className="tooltip">Watch Later</span>
        </NavLink>
        <NavLink
          className="sidebar__list-item  flex"
          to="/history"
          role="button"
        >
          <RiHistoryFill className="btn__icon" />
          <span className="sidebar__link-name">History</span>
          <span className="tooltip">History</span>
        </NavLink>
      </div>
    </aside>
  );
};
