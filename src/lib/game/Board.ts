export class Board {
  size: number;
  grid: (string | null)[][];
  rows: number[];
  cols: number[];
  diagonal: number = 0;
  antiDiagonal: number = 0;

  constructor(size: number) {
    this.size = size;
    this.grid = Array.from({ length: size }, () => Array(size).fill(null));
    this.rows = Array(size).fill(0);
    this.cols = Array(size).fill(0);
  }

  isValidMove(row: number, col: number) {
    return this.grid[row][col] === null;
  }

  makeMove(row: number, col: number, symbol: "X" | "O") {
    this.grid[row][col] = symbol;
  }

  checkWin(row: number, col: number, symbol: "X" | "O") {
    const val = symbol === "X" ? 1 : -1;

    this.rows[row] += val;
    this.cols[col] += val;

    if (row === col) this.diagonal += val;
    if (row + col === this.size - 1) this.antiDiagonal += val;

    return (
      Math.abs(this.rows[row]) === this.size ||
      Math.abs(this.cols[col]) === this.size ||
      Math.abs(this.diagonal) === this.size ||
      Math.abs(this.antiDiagonal) === this.size
    );
  }
}