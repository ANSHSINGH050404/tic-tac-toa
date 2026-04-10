"use client";

import Board from "@/components/Board";
import GameStatusComponent from "@/components/GameStatus";
import { useGame } from "@/hooks/useGame";

export default function Home() {
    const { game, play, reset } = useGame(3);
  return (
     <div className="flex flex-col items-center gap-4 mt-10">
      <h1 className="text-2xl font-bold">Tic Tac Toe</h1>

      <GameStatusComponent game={game} />

      <Board grid={game.board.grid} play={play} />

      <button
        onClick={reset}
        className="px-4 py-2 bg-black text-white"
      >
        Restart
      </button>
    </div>
  );
}
