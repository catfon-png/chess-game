import React, { useEffect, useState } from "react";
import { Chess, PieceSymbol, Color } from "chess.js";
import "./Chessboard.css";

export const Chessboard = () => {
  const [currentInstruction, setCurrentInstruction] = useState("");
  const [game, setGame] = useState<Chess>();

  useEffect(() => {
    setGame(new Chess());
  }, []);

  const move = () => {
    game!.move(currentInstruction);
    setCurrentInstruction("");
    printChess();
  };

  const printChess = () => {
    console.log(game);
    console.log(game!.ascii());
    console.log(game!.board());
  };

  const typed = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentInstruction(e.currentTarget.value);
  };

  const to1D = (board: any[][]) => {
    const onedarray: any[] = [];
    board.forEach((row, i) => {
      row.forEach((sq, i2) => {
        onedarray.push(sq);
      });
    });
    return onedarray;
  };

  return (
    <div>
      <button onClick={printChess}>print</button>
      <button onClick={move}>move</button>
      <input type="text" onChange={typed} value={currentInstruction} />
      {game && (
        <div className="game-board">
          {to1D(game!.board()).map((sq, index) => (
            <div
              className={index % 2 === 0 ? "one-square" : "one-square black"}
              key={index}
            >
              &#9812;
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
