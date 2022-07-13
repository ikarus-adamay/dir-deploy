import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Explore from "./Pages/Explore";
import Profile from "./Pages/Profile";
import Artists from "./Pages/Artists";
import Asset from "./Pages/Asset";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Routes>
      <Route path="/" exact element={<App />} />
      <Route path="/artists" exact element={<Artists />} />
      <Route path="/artists/:id" element={<Profile />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/asset" element={<Asset />} />
    </Routes>
  </Router>
);
