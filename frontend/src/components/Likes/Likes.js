import React from "react";
import css from "./likes.module.css";
import classNames from "classnames/bind";

export default function Likes(props) {
  const commentUserNames = props.comments
    .map((comment) => {
      return comment.user;
    })
    .join("\n");

  const likesUserNames = props.likes
    .map((like) => {
      return like.user;
    })
    .join("\n");

  const likesClassNames = classNames({
    [css.flexbox]: true,
    [css.marginRight]: true,
  });

  return (
    <div className={css.flexboxStart}>
      <div title={likesUserNames} className={likesClassNames}>
        {/* eslint-disable-next-line */}
        <i className="material-icons">favorite_border</i>

        <p className={css.margin}>{props.likes.length}</p>
      </div>

      <div title={commentUserNames} className={likesClassNames}>
        {/* eslint-disable-next-line */}
        <i className="material-icons">comment</i>

        <p className={css.margin}>{props.comments.length}</p>
      </div>
    </div>
  );
}
