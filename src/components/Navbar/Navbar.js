import { useAuth, useSidebar } from "contexts";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";

export const Navbar = () => {
  const { isLoggedIn, user } = useAuth();
  const { setIsSidebarHidden } = useSidebar();
  return (
    <header className="wrapper">
      <FaBars
        className="wrapper__nav-icon"
        onClick={() =>
          setIsSidebarHidden((isSidebarHidden) => !isSidebarHidden)
        }
      />
      <Link to="/">
        <em>
          <h2 className="wrapper__title">Fino World</h2>
        </em>
      </Link>
      <nav className="nav">
        {isLoggedIn ? (
          <Link
            to="/profile"
            class="avatar avatar--xs avatar--primary"
            title="Profile"
          >
            {user.firstName[0]}
          </Link>
        ) : (
          <Link
            to="/login"
            className="btn btn--outline-primary login-btn"
            role="button"
          >
            <i className="fa fa-user-circle "></i>
            <span>Login</span>
          </Link>
        )}
      </nav>
    </header>
  );
};
