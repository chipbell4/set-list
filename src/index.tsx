import React from "react";
import { createRoot } from "react-dom/client";

import farmersMarket from "./data/farmers-market";
import ChordChart from "./chord-chart";

const App = () => {
  const chords = farmersMarket.songs[0].chords!;

  return (
    <div>
      <h1>Set List</h1>
      <ChordChart chords={chords} />
    </div>
  );
};

const root = createRoot(document.body);
root.render(<App />);
