import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import "./index.css";
import App from "./App";
import CorporateFilms from "./Components/CorporateFilms";
import CorporateVideo from './Components/CorporateVideo';
import PrivacyPolicy from "./Components/PrivacyPolicy";
import Portfolio from "./Components/Portfolio";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <HashRouter>
    <ScrollToTop />
    <Routes>
      <Route index element={<App />} />
      <Route path="CorporateFilms" element={<CorporateFilms />} />
      <Route path="ProductShowcase" element={<CorporateVideo />} />
      <Route path="PrivacyPolicy" element={<PrivacyPolicy />} />
      <Route path="my-works" element={<Portfolio />} />
    </Routes>
  </HashRouter>,
);
