import React from "react";
import "./Button.scss";
import classNames from "classnames";

export default function Button(props) {
  const { danger, confirm, onClick, children } = props;

  const buttonClass = classNames("button", {
    "button--confirm": confirm,
    "button--danger": danger,
  });
  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
}
