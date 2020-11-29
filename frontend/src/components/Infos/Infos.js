import React from 'react';

export default function Infos(props) {
  return (
    <div>
      <ul>
        <li>{props.posts.length} posts</li>
        <li>{props.likes.length} curtidas</li>
        <li>{props.comments.length} comentários</li>
      </ul>
    </div>
  );
}
