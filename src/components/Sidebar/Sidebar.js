import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { BiHomeCircle, BiLike } from "react-icons/bi";
import { MdOutlineWatchLater } from "react-icons/md";
import { RiPlayList2Fill, RiHistoryFill } from "react-icons/ri";
import { useSidebar } from "contexts";
import classNames from "classnames";

export const Sidebar = () => {
  const { isSidebarHidden, setIsSidebarHidden } = useSidebar();

  const navClickHandler = () => {
    setIsSidebarHidden(true);
  };

  return (
    <aside
      className={classNames("sidebar", "sidebar--collapsed", "fixed", {
        "sidebar--hidden": isSidebarHidden,
      })}
    >
      <div className="sidebar__list flex flex-col">
        <NavLink
          className="sidebar__list-item flex"
          to="/"
          role="button"
          onClick={navClickHandler}
        >
          <BiHomeCircle className="btn__icon" />
          <span className="sidebar__link-name">Home</span>
          <span className="tooltip">Home</span>
        </NavLink>
        <NavLink
          className="sidebar__list-item flex "
          to="/playlists"
          role="button"
          onClick={navClickHandler}
        >
          <RiPlayList2Fill className="btn__icon" />
          <span className="sidebar__link-name">Playlists</span>
          <span className="tooltip">Playlists</span>
        </NavLink>
        <NavLink
          className="sidebar__list-item flex"
          to="/liked"
          role="button"
          onClick={navClickHandler}
        >
          <BiLike className="btn__icon" />
          <span className="sidebar__link-name">Liked</span>
          <span className="tooltip">Liked</span>
        </NavLink>
        <NavLink
          className="sidebar__list-item flex"
          to="/watchlater"
          role="button"
          onClick={navClickHandler}
        >
          <MdOutlineWatchLater className="btn__icon" />
          <span className="sidebar__link-name">Watch Later</span>
          <span className="tooltip">Watch Later</span>
        </NavLink>
        <NavLink
          className="sidebar__list-item  flex"
          to="/history"
          role="button"
          onClick={navClickHandler}
        >
          <RiHistoryFill className="btn__icon" />
          <span className="sidebar__link-name">History</span>
          <span className="tooltip">History</span>
        </NavLink>
      </div>
    </aside>
  );
};
