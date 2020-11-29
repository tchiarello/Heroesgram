import React from 'react';
import MoviePost from '../MoviePost/MoviePost';

export default function Timeline(props) {
  return (
    <div>
      {props.posts.map((post, index) => (
        <MoviePost
          key={index}
          post={post}
          activeUser={props.activeUser}
          timelineUser={props.timelineUser}
          likes={props.likes}
          comments={props.comments}
          onNewComment={props.onNewComment}
          onNewLike={props.onNewLike}
        />
      ))}
    </div>
  );
}
