import React, { useState } from "react";
import { Song } from "./data/set-list";
import Accordion from "./accordion";
import ChordChart from "./chord-chart";

interface SongProps {
  song: Song;
}

export default function SongComponent({ song }: SongProps) {
  const [isPlayed, setIsPlayed] = useState(false);

  const description = song.notes ? <p>{song.notes}</p> : null;

  const accordion = song.chords ? (
    <Accordion>
      <ChordChart chords={song.chords}></ChordChart>
    </Accordion>
  ) : null;

  let songContainerClassName = "song-container";
  if (isPlayed) {
    songContainerClassName += " played";
  }
  const toggle = () => setIsPlayed(!isPlayed);

  return (
    <div className={songContainerClassName}>
      <h2 onClick={toggle}>{song.title}</h2>
      {description}
      {accordion}
    </div>
  );
}
