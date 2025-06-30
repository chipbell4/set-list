import React from "react";
import { Song } from "./data/set-list";
import Accordion from "./accordion";
import ChordChart from "./chord-chart";

interface SongProps {
  song: Song;
}

export default function SongComponent({ song }: SongProps) {
  const description = song.notes ? <p>{song.notes}</p> : null;

  const accordion = song.chords ? (
    <Accordion>
      <ChordChart chords={song.chords}></ChordChart>
    </Accordion>
  ) : null;

  return (
    <div className="song-container">
      <h2>{song.title}</h2>
      {description}
      {accordion}
    </div>
  );
}
