import { useNavigate } from "react-router-dom";
import img from "assets/nothingtoshow.svg";
import "./NothingToShow.css";

export const NothingToShow = () => {
  const navigate = useNavigate();

  return (
    <div className="novideos">
      <p className="novideos__title">No Videos have been added here.</p>
      <div className="img-container">
        <img src={img} alt="" />
      </div>
      <button
        className="btn btn--outline-primary"
        onClick={() => navigate("/")}
      >
        E X P L O R E
      </button>
    </div>
  );
};
