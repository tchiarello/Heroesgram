import React from "react";
import Avatar from "../Avatar/Avatar";
import css from "./changeUser.module.css";
import classNames from "classnames/bind";

export default function ChangeUser(props) {
  return (
    <div>
      <h6 className={css.title}>View Timeline as:</h6>
      <div className={css.flexbox}>
        {/* bestFriends = ["superman", "batman", "wonderWoman"] */}
        {props.bestFriends.map((bestFriend, index) => {
          const isActive = props.activeUser === bestFriend;

          const avatarContainerClassNames = classNames({
            [css.active]: isActive,
            [css.inactive]: !isActive,
            [css.avatarContainer]: true,
          });

          return (
            <div
              key={index}
              onClick={() => props.onClick(bestFriend)}
              className={avatarContainerClassNames}
              alignment="toBottom"
            >
              <Avatar user={bestFriend} avatarSize="medium" margin="top" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
