import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <div>
      <h1>Set List</h1>
      <p>Welcome to the Set List application!</p>
    </div>
  );
};

const root = createRoot(document.body);
root.render(<App />);
