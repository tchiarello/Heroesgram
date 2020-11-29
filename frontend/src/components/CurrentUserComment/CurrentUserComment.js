import React from 'react';
import Avatar from '../Avatar/Avatar';
import css from './currentUserComment.module.css';

export default function CurrentUserComment(props) {
  return (
    <div className={css.grid}>
      <div>
        <Avatar
          user={props.user}
          avatarSize="small"
          alignment="toLeft"
          spaceLeft="spaceLeft"
        />
      </div>

      <div>
        <p className={css.commentContainer}> {props.comment} </p>
      </div>
    </div>
  );
}
