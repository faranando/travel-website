import React from "react";
import {Route, Routes} from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import "./assets/scss/style.scss"
import Testimony from "./parts/Testimony";

export default function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/testimony" element={<Testimony />} />
    </Routes>
    </>
  );
}


