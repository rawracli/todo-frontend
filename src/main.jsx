import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./routes/AppRoute.jsx";
import "./index.css";
import PageTitle from "./routes/PageTitle.jsx";
import RefreshTop from "./routes/RefreshTop.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <RefreshTop />
      <PageTitle />
      <AppRoute />
    </BrowserRouter>
  </StrictMode>
);
