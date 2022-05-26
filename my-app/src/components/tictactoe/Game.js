import React, { useState, useReducer } from "react";
import { calculateWinner } from "../../helpers";
import Board from "./Board";
import "./GameStyle.css";
// const obj1 = {
//     name:'truong',
// }
// const obj2 = {
//     age:'23',
// }
// const obj3 = {
//     ...obj1,
//     ...obj2,
// }
// initialSate = {}
// immutable ko the chinh sua
// [...arr] [..obj] de tao 1 mang clone
// de copy sâu vào bên trong obj ta dùng thuộc tính
// deep copy JSON.parse(JSON.stringify(obj))
const Game = () => {
  //   const [board, setBoard] = useState(Array(9).fill(null));
  //   const [xIsNext, setXIsNext] = useState(true); // giá trị lần nhấn tiếp theo

  // const [action] = {type: 'CLICK', payload:{}}
  // dispatch({type: 'CLICK'})
  const [state, setState] = useState({
    board: Array(9).fill(null),
    xIsNext: true,
  });
  const winner = calculateWinner(state.board); // giá trị X hoặc O
  const handleClick = (index) => {
    //khi thay doi gia tri trong mang thì ảnh hưởng đến mảng gốc
    // vì vậy cần copy mảng ra mảng mới và xử lý lên mảng mới đó
    const boardCopy = [...state.board]; //copy giá trị board để không ảnh hưởng mảng ban đầu
    // khi nhấn vào thì kiểm tra trước là đã có người chiến thắng chưa
    // nếu có người chiến thắng rồi thì ko nhấn được nữa hoặc
    // nếu ô đó đã nhấn rồi thì ko được nhấn lại nữa
    if (winner || boardCopy[index]) return; // return để dừng ko cho nhấn
    // tại vị trí nhấn vào chúng ta kiểm tra xIsNext
    // xIsNext tiếp theo là dấu X nếu đúng thì nhấn ra dấu X
    // nếu sai thì nhấn ra O
    boardCopy[index] = state.xIsNext ? "X" : "O";
    // setBoard(boardCopy); // sau đó set lại boardCopy
    // setXIsNext(!state.xIsNext); // lần 1 nhấn ra X thì lần 2 phải nhấn ra O
    // console.log(boardCopy[index]);
    setState({
      ...state,
      board: boardCopy,
      xIsNext: !state.xIsNext,
    });
  };
  const handleResetGame = () => {
    // setBoard(Array(9).fill(null));
    // setXIsNext(true);
    setState({
      ...state,
      board: Array(9).fill(null),
      xIsNext: true,
    });
  };
  return (
    <div>
      {winner ? <div className="game-winner">winner is {winner}</div> : ""}
      <Board cells={state.board} onClick={handleClick}></Board>
      <button className="game-reset" onClick={handleResetGame}>
        Reset game
      </button>
    </div>
  );
};

export default Game;
