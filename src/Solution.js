import React, { Component } from "react";
import classes from "./squares.module.css";

import UI from "./UI";

function isValid(board, row, col, k) {
  for (let i = 0; i < 9; i++) {
    const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
    const n = 3 * Math.floor(col / 3) + (i % 3);
    if (board[row][i] === k || board[i][col] === k || board[m][n] === k) {
      return false;
    }
  }
  return true;
}

function sodokoSolver(data) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (data[i][j] === 0) {
        for (let k = 1; k <= 9; k++) {
          if (isValid(data, i, j, k)) {
            data[i][j] = k;
            if (sodokoSolver(data)) {
              return true;
            } else {
              data[i][j] = 0;
            }
          }
        }
        return false;
      }
    }
  }
  return true;
}
let solutionExist = false;
function helper(board) {
  if (sodokoSolver(board) === true) {
    // flag = 1;
    // clicked = true;
    // list = board.map((row) => row.map((num) => <div>{num}</div>));
    solutionExist = true;
    console.log("YES");
    console.log(board);
  } else {
    console.log("NO");
  }
}

class Solution extends Component {
  state = {
    clicked: false
  };
  changeClick = () => {
    this.setState({
      clicked: true
    });
  };

  render() {
    if (!this.state.clicked) {
      return (
        <div>
          <button
            className={classes.button}
            onClick={() => {
              helper(this.props.board);
              this.changeClick();
            }}
          >
            Solution
          </button>
        </div>
      );
    }
    if (this.state.clicked) {
      if (solutionExist)
        return (
          <div>
            <h3 className={classes.button}>Solution to the problem</h3>
            <UI board={this.props.board} />
          </div>
        );
      else return <h3>Solution Doesn't Exist</h3>;
    }
  }
}

export default Solution;
