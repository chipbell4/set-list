import React from "react";
import SongComponent from "./song";
import { Song } from "./data/set-list";

interface SongListProps {
  songs: Song[];
}

export default function SongList({ songs }: SongListProps) {
  const components = songs.map((song) => (
    <SongComponent song={song}></SongComponent>
  ));

  return <div className="song-list">{components}</div>;
}
