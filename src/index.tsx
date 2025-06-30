import React, { useState } from "react";
import { createRoot } from "react-dom/client";

import { sets } from "./data/index";
import SongList from "./song-list";

const App = () => {
  const [setName, setSetName] = useState(null);

  let appContent = null;
  if (setName === null) {
    const setComponents = Object.keys(sets).map((setName) => {
      const onClick = () => {
        setSetName(setName);
      };

      return (
        <div className="set" onClick={onClick} key={setName}>
          {setName}
        </div>
      );
    });

    appContent = <div className="sets">{setComponents}</div>;
  } else {
    const reset = () => setSetName(null);
    appContent = (
        <div>
            <div onClick={reset}>Back</div>
            <SongList songs={sets[setName].songs}></SongList>
        </div>
    );
  }

  return (
    <div className="app">
      <h1>Set List</h1>
      {appContent}
    </div>
  );
};

const root = createRoot(document.body);
root.render(<App />);
