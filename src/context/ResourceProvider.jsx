import React, { useState } from "react";
import ResourceContext from "./ResourceContext";

const ResourceProvider = ({ children }) => {
  const [resource, setResource] = useState(null);

  return (
    <ResourceContext.Provider value={{ resource, setResource }}>
      {children}
    </ResourceContext.Provider>
  );
};

export default ResourceProvider;