import React from "react";

const style = (value) => ({
  background: "#fff",
  border: "2px solid blue",
  fontSize: "30px",
  fontWeight: "800",
  cursor: "pointer",
  outline: "none",
  color: value === "X" ? "tomato" : "purple",
});

const Square = ({ value, onClick }) => (
  <button style={style(value)} onClick={onClick}>
    {value}
  </button>
);

export default Square;
