import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage, Resource_Page } from "./pages/index.js"; // Import your pages
import ResourceProvider from "./context/ResourceProvider.jsx";


function App() {
  return (
    <ResourceProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resource/:slug" element={<Resource_Page />} />{" "}
          {/* Dynamic routing for resources */}
        </Routes>
      </Router>
    </ResourceProvider>
  );
}

export default App;
