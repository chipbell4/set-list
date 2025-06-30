export type ChordSymbol = string | string[] | undefined;

export type ChordProgression = ChordSymbol[][];

export interface Song {
  title: string;
  notes?: string;
  chords?: ChordProgression;
}

export interface SetList {
  name: string;
  description?: string;
  songs: Song[];
}
