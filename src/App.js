import { Route, Routes } from "react-router-dom";
import Mockman from "mockman-js";

import {
  ForgotPassword,
  History,
  Home,
  Liked,
  Login,
  Playlists,
  PrivateRoutes,
  Profile,
  ResetPassword,
  Signup,
  SinglePlaylist,
  SingleVideo,
  WatchLater,
} from "pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loader, Navbar } from "components";
import { useLoader } from "contexts";

function App() {
  const { showLoader } = useLoader();

  return (
    <div>
      {showLoader && <Loader />}
      <ToastContainer autoClose="1500" closeOnClick="true" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:userID" element={<ResetPassword />} />
        <Route path="/mock" element={<Mockman />} />
        <Route path="/video/:videoId" element={<SingleVideo />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/watchlater" element={<WatchLater />} />
          <Route path="/liked" element={<Liked />} />
          <Route path="/history" element={<History />} />
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/playlist/:playlistId" element={<SinglePlaylist />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
