import React from "react";
import css from "./postComment.module.css";
import Avatar from "../Avatar/Avatar";
import DeleteButton from "../DeleteButton/DeleteButton";
// import EditButton from "../EditButton/EditButton";

export default function PostComment(props) {
  return (
    <div className={css.grid}>
      <div>
        <Avatar
          user={props.comment.user}
          avatarSize="small"
          alignment="toLeft"
          spaceLeft="spaceLeft"
        />
      </div>

      <div>
        <p className={css.margin}>{props.comment.comment}</p>
      </div>

      <div>
        {props.activeUser === props.comment.user && (
          <DeleteButton onDeleteComment={props.onDeleteComment} />
        )}
      </div>

      {/* <div>{props.activeUser === props.comment.user && <EditButton />}</div> */}
    </div>
  );
}
