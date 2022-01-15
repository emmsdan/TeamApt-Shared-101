import React from "react";
import "./Button.scss";

function Button({ text, width, background, fontSize, color, children }) {
  return (
    <button className="button" style={{ width, background, fontSize, color }}>
      <span className="btn-text">{text}</span>
      {children}
    </button>
  );
}

Button.defaultProps = {
  text: "Get started",
  width: "12rem",
  background: "#4c4e8e",
  fontSize: "18px",
  color: "white",
};

export default Button;
