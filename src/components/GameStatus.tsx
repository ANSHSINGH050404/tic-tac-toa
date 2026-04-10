import { GameStatus } from "@/lib/game/types";

export default function GameStatusComponent({ game }: any) {
  if (game.status === GameStatus.WIN) {
    return <p>{game.currentPlayer.name} Wins 🎉</p>;
  }

  if (game.status === GameStatus.DRAW) {
    return <p>Draw 🤝</p>;
  }

  return <p>Turn: {game.currentPlayer.name}</p>;
}