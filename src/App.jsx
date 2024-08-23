import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ResourcePage from "./pages/ResourcePage"; // Correct import
import ResourceProvider from "./context/ResourceProvider.jsx";

function App() {
  return (
    <ResourceProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:slug" element={<ResourcePage />} />{" "}
          {/* Dynamic routing */}
        </Routes>
      </Router>
    </ResourceProvider>
  );
}

export default App;
