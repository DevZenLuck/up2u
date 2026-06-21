import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import CorporateFilms from "./Components/CorporateFilms";
import CorporateVideo from './Components/CorporateVideo';
import PrivacyPolicy from "./Components/PrivacyPolicy";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <HashRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="CorporateFilms" element={<CorporateFilms />} />
      <Route path="ProductShowcase" element={<CorporateVideo />} />
      <Route path="PrivacyPolicy" element={<PrivacyPolicy />} />
    </Routes>
  </HashRouter>,
);
