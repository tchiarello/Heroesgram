import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import css from "./moviePost.module.css";

import PostComment from "../PostComment/PostComment";
import Likes from "../Likes/Likes";
import CurrentUserComment from "../CurrentUserComment/CurrentUserComment";

export default function MoviePost(props) {
  const [currentComment, setCurrentComment] = useState("");

  const likes = props.likes.filter((like) => like.postId === props.post.id);
  const comments = props.comments.filter(
    (comment) => comment.postId === props.post.id
  );

  function handleOnChangeTextArea(event) {
    setCurrentComment(event.target.value);
  }

  async function handleAddComment() {
    if (!currentComment.trim()) return;

    const comment = {
      id: uuidv4(),
      comment: currentComment,
      user: props.activeUser,
      postId: props.post.id,
    };

    // add post backend
    const response = await fetch("http://localhost:3001/comments", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(comment),
    });

    // add post frontend
    if (response.ok) {
      props.onNewComment(comment);
      setCurrentComment("");
    }
  }

  async function handleDeleteComment(id) {
    // delete post backend
    await fetch(`http://localhost:3001/comments/${id}`, {
      method: "delete",
    });

    // delete post frontend
    const remove = comments.filter((comment) => comment.id !== id);
    props.onDeletedComment(remove);
  }

  return (
    <div className={css.grid}>
      <div>
        {/* eslint-disable-next-line */}
        <img src={props.post.picture} />
      </div>

      <div className={css.postContainer}>
        <div>
          <CurrentUserComment
            user={props.timelineUser}
            comment={props.post.title}
          />
        </div>

        <div>
          <Likes likes={likes} comments={comments} />
        </div>

        <div className={css.commentsContainer}>
          {comments.map((comment, index) => (
            <div key={index}>
              <PostComment
                comment={comment}
                activeUser={props.activeUser}
                onDeleteComment={() => handleDeleteComment(comment.id)} //params that I want to the handleDeleteCommento to have
              />
            </div>
          ))}
        </div>

        <div className={css.addComment}>
          <textarea
            value={currentComment}
            placeholder="Add a comment"
            onChange={handleOnChangeTextArea}
            cols="30"
            rows="10"
            className={css.textarea}
          ></textarea>

          <div>
            <button
              onClick={handleAddComment}
              disabled={currentComment.trim().length <= 0}
              className={css.btn}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
