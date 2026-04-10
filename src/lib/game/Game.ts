import { Board } from "./Board";
import { Player } from "./Player";
import { GameStatus } from "./types";

export class Game {
  board: Board;
  player1: Player;
  player2: Player;
  currentPlayer: Player;
  moves: number = 0;
  status: GameStatus = GameStatus.IN_PROGRESS;

  constructor(size: number) {
    this.board = new Board(size);
    this.player1 = new Player("Player 1", "X");
    this.player2 = new Player("Player 2", "O");
    this.currentPlayer = this.player1;

  }
  playMove(row: number, col: number): void {
    if (this.status !== GameStatus.IN_PROGRESS) {
      throw new Error("Game is already over");
    }

    if (!this.board.isValidMove(row, col)) return;

    this.board.makeMove(row, col, this.currentPlayer.symbol);
    this.moves++;

    if (this.board.checkWin(row, col, this.currentPlayer.symbol)) {
      this.status = GameStatus.WIN;
      return;
    }

    if (this.moves === this.board.size * this.board.size) {
      this.status = GameStatus.DRAW;
      return;
    }

    this.switchPlayer();


    }  switchPlayer(): void {
    this.currentPlayer =
      this.currentPlayer === this.player1 ? this.player2 : this.player1;
  }

  
}


