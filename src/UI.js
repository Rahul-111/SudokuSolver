import React from "react";
import "./styles.css";
import classes from "./squares.module.css";
const UI = (props) => {
  const board = props.board;
  const list = board.map((i, j) => {
    return i.map((x, j) => {
      return (
        <div key={j} className={i[j] === 0 ? classes.EmptySq : classes.Style}>
          {i[j]}
        </div>
      );
    });
  });

  return (
    <div>
      <div className={classes.StyleGrid}>{list}</div>
    </div>
  );
};

export default UI;
