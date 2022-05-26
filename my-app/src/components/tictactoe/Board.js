import React from "react";
import Cell from "./Cell";

const Board = (props) => {
  //Array(9).fill() -> [undefined]
  //   console.log(props);
  return (
    <div className="game-board">
      {/* in ra phần tử của mảng giống nhau vd: 1 - 9 */}
      {props.cells.map((item, index) => (
        <Cell
          key={index}
          value={item}
          onClick={() => props.onClick(index)} //props của Board.js nhận từ Game.js
          className={item === "X" ? "is-x" : item === "O" ? "is-o" : ""}
        ></Cell>
      ))}
    </div>
  );
};

export default Board;
