import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { showToast } from "utils";
import "./Auth.css";
import { useDocumentTitle } from "hooks";
import { Sidebar } from "components";

export const ResetPassword = () => {
  const [user, setUser] = useState({
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigateTo = useNavigate();
  const { userID } = useParams();
  console.log({ userID });

  useDocumentTitle("Reset Password | Fino World");

  const resetPasswordHandler = async (e) => {
    e.preventDefault();
    let response = "";
    try {
      const { password } = user;
      response = await axios.post(
        "/api/auth/reset-password",
        { password },
        {
          headers: {
            authorization: userID,
          },
        }
      );
      const { status } = response.data;
      if (status === "OK") {
        navigateTo("/login", { replace: true });
        showToast("success", "Password Updated Please Log In to continue");
      }
    } catch (error) {
      showToast("error", error.response.data.errors[0]);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="authentication">
        <form onSubmit={resetPasswordHandler} className="authentication__form">
          <h3 className="authentication__title">Reset Password</h3>
          <p className="authentication__subtitle">Enter new password</p>
          <div className="authentication__field">
            <label>Password</label>
            <div className="password-wrapper">
              <input
                className="input input--outlined"
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                required
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
              <span
                className="show-pwd"
                onClick={() => setShowPassword((showPassword) => !showPassword)}
              >
                <i
                  className={showPassword ? "fa fa-eye" : "fa fa-eye-slash"}
                  aria-hidden="true"
                ></i>
              </span>
            </div>
          </div>
          <div className="authentication__field">
            <label>Confirm Password</label>
            <div className="password-wrapper">
              <input
                className="input input--outlined"
                placeholder="Confirm Password"
                type={showConfirmPassword ? "text" : "password"}
                required
                value={user.confirmPassword}
                onChange={(e) =>
                  setUser({ ...user, confirmPassword: e.target.value })
                }
              />
              <span
                className="show-pwd"
                onClick={() =>
                  setShowConfirmPassword((showPassword) => !showPassword)
                }
              >
                <i
                  className={
                    showConfirmPassword ? "fa fa-eye" : "fa fa-eye-slash"
                  }
                  aria-hidden="true"
                ></i>
              </span>
            </div>
          </div>
          {user.confirmPassword.length > 0 &&
            user.password.length > 0 &&
            user.password !== user.confirmPassword && (
              <p className="error-message">* Passwords do not match</p>
            )}

          <button
            className={
              (user.password !== user.confirmPassword ? "btn--disabled" : "") +
              " btn btn--primary authentication__btn"
            }
          >
            SUBMIT
          </button>
        </form>
      </main>
    </div>
  );
};
