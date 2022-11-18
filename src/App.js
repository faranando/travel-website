import React from "react";
import {Route, Routes} from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import "./assets/scss/style.scss"

export default function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
    </>
  );
}


