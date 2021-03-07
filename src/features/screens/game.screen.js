import React, { useState } from "react";
import { calculateWinner } from "../../helpers/winner.helper";
import Board from "../components/Board";

const styles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginTop: 20,
};

const title = {
  textAlign: "center",
  fontSize: 25,
  fontWeight: "bold",
};

const winnerText = (xIsNext) => ({
  fontSize: 16,
  fontWeight: "bold",
  color: xIsNext ? "tomato" : "purple",
});

const restartBtn = {
  width: "100px",
  height: "50px",
  backgroundColor: "blue",
  color: "#fff",
};

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const [player, setPlayer] = useState("Player 2");
  const winner = calculateWinner(board);

  const handleClick = (i) => {
    const boardCopy = [...board];
    // If user click an occupied square or if game is won, return
    if (winner || boardCopy[i]) return;
    // Put an X or an O in the clicked square
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
    // Player switch
    player === "Player 1" ? setPlayer("Player 2") : setPlayer("Player 1");
  };

  const renderMoves = () => (
    <button style={restartBtn} onClick={() => setBoard(Array(9).fill(null))}>
      Restart
    </button>
  );

  return (
    <>
      <p style={title}>Tic Tac Toe</p>
      <Board squares={board} onClick={handleClick} />
      <div style={styles}>
        <p style={winnerText(xIsNext)}>
          {winner
            ? "Congratulations!! " + player + " won the game"
            : (player === "Player 1" ? "Player 2" : "Player 1") + "'s turn"}
        </p>
        {renderMoves()}
      </div>
    </>
  );
};

export default Game;
