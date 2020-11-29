import React from 'react';
import AvatarImage from '../AvatarImage/AvatarImage';
import HeroName from '../HeroName/HeroName';
import css from './avatar.module.css';

export default function Avatar(props) {
  const alignmentContainer = css[props.alignment] || css['left'];
  const spaceLeft = css[props.spaceLeft];

  return (
    <div className={alignmentContainer}>
      <div>
        <AvatarImage user={props.user} size={props.avatarSize} />
      </div>

      <div className={spaceLeft}>
        <HeroName
          name={props.user}
          margin={props.margin}
          fontSize={props.fontSize}
        />
      </div>
    </div>
  );
}
