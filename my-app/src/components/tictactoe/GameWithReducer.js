// Bài 34 35 36 37: tìm hiểu về reducer
import React, { useReducer } from "react";
import { calculateWinner } from "../../helpers";
import Board from "./Board";
import "./GameStyle.css";
const initialSate = {
  board: Array(9).fill(null),
  xIsNext: true,
};
const gameReducer = (state, action) => {
  switch (action.type) {
    case "CLICK": {
      //   console.log(state, action.payload);
      const { board, xIsNext } = state;
      const { index, winner } = action.payload;
      if (winner || board[index]) return state;
      const nextState = JSON.parse(JSON.stringify(state)); //copy sâu bên trong obj
      console.log("gameReducer ~ nextState", nextState);
      nextState.board[index] = xIsNext ? "X" : "O";
      nextState.xIsNext = !xIsNext;
      return nextState;
      //   break;
    }
    case "RESET": {
      const nextState = JSON.parse(JSON.stringify(state));
      nextState.board = Array(9).fill(null);
      nextState.xIsNext = true;
      return nextState;
    }
    //   break;
    default:
      break;
  }
  return state;
};
const GameWithReducer = () => {
  const [state, dispatch] = useReducer(gameReducer, initialSate);
  const winner = calculateWinner(state.board2); // giá trị X hoặc O
  const handleClick = (index) => {
    dispatch({
      type: "CLICK",
      payload: {
        index,
        winner,
      },
    });
  };
  const handleResetGame = () => {
    dispatch({
      type: "RESET",
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

export default GameWithReducer;
