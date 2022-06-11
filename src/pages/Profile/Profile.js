import { Sidebar } from "components";
import { useAuth } from "contexts";
import { useNavigate } from "react-router-dom";
import "./Profile.css";
import { FaUser } from "react-icons/fa";
import { showToast } from "utils";
export const Profile = () => {
  const { user, authDispatch } = useAuth();
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.clear();
    authDispatch({ type: "LOGOUT" });
    showToast("info", "Logged Out Successfully");
    navigate("/login", { replace: true });
  };

  return (
    <div className="flex">
      <Sidebar />
      <section className="profile">
        <article className="profile__card card">
          <p className="profile__heading">My Profile</p>
          <div className="background">
            <div class="avatar avatar--xs avatar--primary">
              <FaUser />
            </div>
          </div>
          <div className="profile__content">
            <fieldset className="profile__info">
              <legend>Full Name</legend>
              {user.firstName} {user.lastName}
            </fieldset>
            <fieldset className="profile__info">
              <legend>Email</legend>
              {user.email}
            </fieldset>
            <button
              className="btn btn--outline-primary"
              onClick={logoutHandler}
            >
              L O G O U T
            </button>
          </div>
        </article>
      </section>
    </div>
  );
};
