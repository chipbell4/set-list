import React from "react";
import { ChordProgression, ChordSymbol } from "./data/set-list";

interface ChordChartProps {
  chords: ChordProgression;
}

export default function ChordChart({ chords }: ChordChartProps) {
  const makeCell = (symbol: ChordSymbol) => {
    if (symbol === undefined) {
      return <td></td>;
    } else if (Array.isArray(symbol)) {
      return <td>{symbol.join(" | ")}</td>;
    } else {
      return <td>{symbol}</td>;
    }
  };

  const makeRow = (symbols: ChordSymbol[]) => {
    return <tr>{symbols.map(makeCell)}</tr>;
  };

  return (
    <table className="chord-chart" cellSpacing="0">
      <tbody>{chords.map(makeRow)}</tbody>
    </table>
  );
}
