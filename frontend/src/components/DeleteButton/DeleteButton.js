import React from "react";
import css from "./deleteButton.module.css";

export default function DeleteButton(props) {
  return (
    <div>
      <button className={css.deleteBtn} onClick={props.onDeleteComment}>
        <i className="material-icons">delete</i>
      </button>
    </div>
  );
}
