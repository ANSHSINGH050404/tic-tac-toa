import Cell from "./Cell";

export default function Board({ grid, play }: any) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {grid.map((row: any, i: number) =>
        row.map((cell: any, j: number) => (
          <Cell
            key={`${i}-${j}`}
            value={cell}
            onClick={() => play(i, j)}
          />
        ))
      )}
    </div>
  );
}