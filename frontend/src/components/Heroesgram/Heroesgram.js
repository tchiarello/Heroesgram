import React, { useState, useEffect } from "react";
import css from "./heroesgram.module.css";

import Header from "../Header/Header";
import CurrentUserInfo from "../CurrentUserInfo/CurrentUserInfo";
import ChangeUser from "../ChangeUser/ChangeUser";
import Timeline from "../Timeline/Timeline";

export default function Heroesgram() {
  const timelineUser = "superman";
  const [activeUser, setActiveUser] = useState("superman");

  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [bestFriends, setBestFriends] = useState([timelineUser]);

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch(
        `http://localhost:3001/posts?user=${timelineUser}`
      );
      const json = await res.json();

      setPosts(json);
    };

    getPosts();
  }, []);

  useEffect(() => {
    const getComments = async () => {
      const res = await fetch("http://localhost:3001/comments");
      const json = await res.json();

      setComments(json);
    };

    getComments();
  }, []);

  useEffect(() => {
    const getLikes = async () => {
      const res = await fetch("http://localhost:3001/likes");
      const json = await res.json();

      setLikes(json);
    };

    getLikes();
  }, []);

  useEffect(() => {
    const getBestFriends = async () => {
      const res = await fetch("http://localhost:3001/bestFriends");
      const json = await res.json();

      setBestFriends((current) => [...current, ...json]);
    };

    getBestFriends();
  }, []);

  function handleOnChangeUser(clickedUser) {
    setActiveUser(clickedUser);
  }

  function onNewComment(newComment) {
    setComments((current) => [...current, newComment]);
  }

  function onNewLike(newLike) {
    setLikes((current) => [...current, newLike]);
  }

  function onDeletedComment(deletedComment) {
    setComments(deletedComment);
  }

  return (
    <div className={css.padding}>
      <Header />

      <div className={css.grid}>
        <div>
          <CurrentUserInfo
            user={timelineUser}
            posts={posts}
            likes={likes}
            comments={comments}
          />
        </div>

        <div>
          <ChangeUser
            activeUser={activeUser}
            bestFriends={bestFriends}
            onClick={handleOnChangeUser}
          />
        </div>
      </div>

      <Timeline
        activeUser={activeUser}
        posts={posts}
        likes={likes}
        comments={comments}
        timelineUser={timelineUser}
        onNewComment={onNewComment}
        onNewLike={onNewLike}
        onDeletedComment={onDeletedComment}
      />
    </div>
  );
}
