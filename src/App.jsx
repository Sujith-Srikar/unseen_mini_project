import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Resource_Page, HomePage } from "./pages/index.js";
import ResourceProvider from "./context/ResourceProvider.jsx";

function App() {
  return (
    <ResourceProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resource-page" element={<Resource_Page />} />
        </Routes>
      </Router>
    </ResourceProvider>
  );
}

export default App;