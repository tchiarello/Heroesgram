import React from "react";
import css from "./editButton.module.css";

export default function EditButton() {
  return (
    <div>
      <button className={css.editBtn}>
        <i className="material-icons">edit</i>
      </button>
    </div>
  );
}
