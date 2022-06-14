import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import {
  AuthProvider,
  PlaylistProvider,
  SidebarProvider,
  VideoProvider,
} from "contexts";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <PlaylistProvider>
          <VideoProvider>
            <SidebarProvider>
              <App />
            </SidebarProvider>
          </VideoProvider>
        </PlaylistProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
