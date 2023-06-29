import { useState, useEffect } from "react";
import styled from "styled-components";

const GameBoard = styled.main`
  border: 1px solid red;
`;

const Piece = styled.div`
  border: 1px solid red;
  width: 100px;
  height: 100px;
  font-size: 60px;

  @media (max-width: 900px) {
    width: 60px;
    height: 60px;
    font-size: 30px;
  }
`;

const Row = styled.div`
  display: flex;
`;

const Game = ({ move, setMove }) => {
  const [board, setBoard] = useState([
    [null, null, null, null],
    [null, null, null, 2],
    [null, null, null, 2],
    [null, null, null, null],
  ]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    console.log(move);
    if (move === "←") {
      moveLeft();
    }

    if (move === "↑") {
      moveUp();
    }

    if (move === "↓") {
      moveDown();
    }

    if (move === "→") {
      moveRight();
    }

    if (move !== undefined) setMove(undefined);

    let scoreCounter = 0;

    board.map((e) =>
      e.map((f) => {
        scoreCounter += f;
      })
    );

    setScore(scoreCounter);
  }, [move]);

  const moveLeft = () => {
    const newBoard = [...board];
    let madeMove = false;

    for (let row = 0; row < 4; row++) {
      for (let col = 1; col < 4; col++) {
        if (newBoard[row][col]) {
          let targetCol = col - 1;

          while (targetCol >= 0 && newBoard[row][targetCol] === null) {
            targetCol--;
          }

          if (targetCol === -1) {
            newBoard[row][0] = newBoard[row][col];
            newBoard[row][col] = null;
            madeMove = true;
          } else if (newBoard[row][targetCol] === newBoard[row][col]) {
            newBoard[row][targetCol] *= 2;
            newBoard[row][col] = null;
            madeMove = true;
          } else if (targetCol + 1 !== col) {
            newBoard[row][targetCol + 1] = newBoard[row][col];
            newBoard[row][col] = null;
            madeMove = true;
          }
        }
      }
    }

    if (madeMove) {
      let found = false;

      let x = Math.floor(Math.random() * newBoard.length);
      let y = Math.floor(Math.random() * newBoard.length);
      if (newBoard[x][y] == null) found = true;

      while (!found) {
        x = Math.floor(Math.random() * newBoard.length);
        y = Math.floor(Math.random() * newBoard.length);
        if (newBoard[x][y] == null) found = true;
      }

      newBoard[x][y] = 2;

      setBoard(newBoard);
    }
  };

  const moveUp = () => {
    const newBoard = [...board];
    let madeMove = false;

    for (let col = 0; col < 4; col++) {
      for (let row = 1; row < 4; row++) {
        if (newBoard[row][col]) {
          let targetRow = row - 1;

          while (targetRow >= 0 && newBoard[targetRow][col] === null) {
            targetRow--;
          }

          if (targetRow === -1) {
            newBoard[0][col] = newBoard[row][col];
            newBoard[row][col] = null;
            madeMove = true;
          } else if (newBoard[targetRow][col] === newBoard[row][col]) {
            newBoard[targetRow][col] *= 2;
            newBoard[row][col] = null;
            madeMove = true;
          } else if (targetRow + 1 !== row) {
            newBoard[targetRow + 1][col] = newBoard[row][col];
            newBoard[row][col] = null;
            madeMove = true;
          }
        }
      }
    }

    if (madeMove) {
      let found = false;

      let x = Math.floor(Math.random() * newBoard.length);
      let y = Math.floor(Math.random() * newBoard.length);
      if (newBoard[x][y] == null) found = true;

      while (!found) {
        x = Math.floor(Math.random() * newBoard.length);
        y = Math.floor(Math.random() * newBoard.length);
        if (newBoard[x][y] == null) found = true;
      }

      newBoard[x][y] = 2;
      setBoard(newBoard);
    }
  };

  const moveDown = () => {
    const newBoard = [...board];
    let madeMove = false;

    for (let col = 0; col < 4; col++) {
      for (let row = 2; row >= 0; row--) {
        if (newBoard[row][col]) {
          let targetRow = row + 1;

          while (targetRow < 4 && newBoard[targetRow][col] === null) {
            targetRow++;
          }

          if (targetRow === 4) {
            newBoard[3][col] = newBoard[row][col];
            newBoard[row][col] = null;
            madeMove = true;
          } else if (newBoard[targetRow][col] === newBoard[row][col]) {
            newBoard[targetRow][col] *= 2;
            newBoard[row][col] = null;
            madeMove = true;
          } else if (targetRow - 1 !== row) {
            newBoard[targetRow - 1][col] = newBoard[row][col];
            newBoard[row][col] = null;
            madeMove = true;
          }
        }
      }
    }

    if (madeMove) {
      let found = false;

      let x = Math.floor(Math.random() * newBoard.length);
      let y = Math.floor(Math.random() * newBoard.length);
      if (newBoard[x][y] == null) found = true;

      while (!found) {
        x = Math.floor(Math.random() * newBoard.length);
        y = Math.floor(Math.random() * newBoard.length);
        if (newBoard[x][y] == null) found = true;
      }

      newBoard[x][y] = 2;
      setBoard(newBoard);
    }
  };

  const moveRight = () => {
    const newBoard = [...board];
    let madeMove = false;

    for (let row = 0; row < 4; row++) {
      for (let col = 2; col >= 0; col--) {
        if (newBoard[row][col]) {
          let targetCol = col + 1;

          while (targetCol < 4 && newBoard[row][targetCol] === null) {
            targetCol++;
          }

          if (targetCol === 4) {
            newBoard[row][3] = newBoard[row][col];
            newBoard[row][col] = null;
            madeMove = true;
          } else if (newBoard[row][targetCol] === newBoard[row][col]) {
            newBoard[row][targetCol] *= 2;
            newBoard[row][col] = null;
            madeMove = true;
          } else if (targetCol - 1 !== col) {
            newBoard[row][targetCol - 1] = newBoard[row][col];
            newBoard[row][col] = null;
            madeMove = true;
          }
        }
      }
    }

    if (madeMove) {
      let found = false;

      let x = Math.floor(Math.random() * newBoard.length);
      let y = Math.floor(Math.random() * newBoard.length);
      if (newBoard[x][y] == null) found = true;

      while (!found) {
        x = Math.floor(Math.random() * newBoard.length);
        y = Math.floor(Math.random() * newBoard.length);
        if (newBoard[x][y] == null) found = true;
      }

      newBoard[x][y] = 2;
      setBoard(newBoard);
    }
  };

  return (
    <>
      <h1>{score}</h1>
      <GameBoard>
        <Row>
          <Piece>{board[0][0]}</Piece>
          <Piece>{board[0][1]}</Piece>
          <Piece>{board[0][2]}</Piece>
          <Piece>{board[0][3]}</Piece>
        </Row>

        <Row>
          <Piece>{board[1][0]}</Piece>
          <Piece>{board[1][1]}</Piece>
          <Piece>{board[1][2]}</Piece>
          <Piece>{board[1][3]}</Piece>
        </Row>

        <Row>
          <Piece>{board[2][0]}</Piece>
          <Piece>{board[2][1]}</Piece>
          <Piece>{board[2][2]}</Piece>
          <Piece>{board[2][3]}</Piece>
        </Row>

        <Row>
          <Piece>{board[3][0]}</Piece>
          <Piece>{board[3][1]}</Piece>
          <Piece>{board[3][2]}</Piece>
          <Piece>{board[3][3]}</Piece>
        </Row>
      </GameBoard>
    </>
  );
};

export default Game;
