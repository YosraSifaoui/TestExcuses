import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "./pages/main-page";
import LostPage from "./pages/lost-page";
import ErrorPage from "./pages/error-page";
import HttpCodePage from "./pages/http-code-page";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/lost" element={<LostPage />} />
        <Route path="/:httpCode" element={<HttpCodePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
