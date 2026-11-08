import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import { AdminApp } from "./admin/Admin.jsx";
import "./styles.css";
import "./song-decor.css";

const isAdmin = window.location.pathname.startsWith("/admin") || window.location.hash === "#admin" || new URLSearchParams(window.location.search).get("admin") === "1";
const RootApp = isAdmin ? AdminApp : App;

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RootApp />
  </React.StrictMode>,
);
