import { Route, Routes } from "react-router-dom";
import Mockman from "mockman-js";

import { Home } from "pages";
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
        <Route path="/mock" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
