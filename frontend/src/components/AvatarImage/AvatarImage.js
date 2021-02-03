import React from "react";
import css from "./AvatarImage.module.css";

export default function AvatarImage(props) {
  const sizeClassName = css[props.size] || css["medium"];

  if (!props.user) {
    // eslint-disable-next-line
    return <img src="/img/default.png" />;
  }

  return (
    // eslint-disable-next-line
    <img
      src={`/img/${props.user}.png`}
      className={`${css.img} ${sizeClassName}`}
    />
  );
}

// return <img src={`/img/batman.png`} />;
