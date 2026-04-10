"use client";

import { useState } from "react";
import { Game } from "@/lib/game/Game";

export const useGame = (size = 3) => {
  const [game, setGame] = useState(new Game(size));
  const [, forceUpdate] = useState(0);

  const play = (row: number, col: number) => {
    game.playMove(row, col);
    forceUpdate((x) => x + 1); // trigger re-render
  };

  const reset = () => {
    setGame(new Game(size));
  };

  return { game, play, reset };
};