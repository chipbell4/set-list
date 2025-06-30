import React from "react";
import { createRoot } from "react-dom/client";

import farmersMarket from "./data/farmers-market";
import Song from "./song";

const App = () => {
  const songs = farmersMarket.songs.map(song => <Song song={song}></Song>);

  return (
    <div className="app">
      <h1>Set List</h1>
      { songs }
    </div>
  );
};

const root = createRoot(document.body);
root.render(<App />);
