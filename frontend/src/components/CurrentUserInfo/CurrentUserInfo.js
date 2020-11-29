import React from 'react';
import AvatarImage from '../AvatarImage/AvatarImage';
import HeroName from '../HeroName/HeroName';
import Infos from '../Infos/Infos';
import css from './currentUserInfo.module.css';

export default function CurrentUserInfo(props) {
  return (
    <div className={css.flexbox}>
      <div>
        <AvatarImage user={props.user} size="big" />
      </div>

      <div className={css.margin}>
        <div>
          <HeroName
            name={props.user}
            margin="bottom"
            fontSize="medium"
            fontWeight="bold"
          />
        </div>

        <div>
          <Infos
            posts={props.posts}
            likes={props.likes}
            comments={props.comments}
          />
        </div>
      </div>
    </div>
  );
}
