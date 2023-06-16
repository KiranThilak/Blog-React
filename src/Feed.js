import React from "react";
import Post from "./Post";

const Footer = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default Footer;
