import React from "react";
import { createRoot } from "react-dom/client";

import farmersMarket from "./data/farmers-market";
import Song from "./song";

const App = () => {
  return (
    <div className="app">
      <h1>Set List</h1>
      <Song song={farmersMarket.songs[0]}></Song>
    </div>
  );
};

const root = createRoot(document.body);
root.render(<App />);
