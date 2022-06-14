import { Route, Routes } from "react-router-dom";
import Mockman from "mockman-js";

import {
  ForgotPassword,
  Home,
  Login,
  Playlists,
  PrivateRoutes,
  Profile,
  ResetPassword,
  Signup,
  SinglePlaylist,
  WatchLater,
} from "pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navbar } from "components";

function App() {
  return (
    <div>
      <ToastContainer autoClose="1500" closeOnClick="true" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:userID" element={<ResetPassword />} />
        <Route path="/mock" element={<Mockman />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/watchlater" element={<WatchLater />} />
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/playlist/:playlistId" element={<SinglePlaylist />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
