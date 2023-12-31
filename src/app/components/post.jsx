import React from "react";
import PropTypes from "prop-types";

const Post = ({ postId, posts }) => {
    const getPostById = (id) => posts.find((post) => post._id === id);
    const post = getPostById(postId);
    return <h3>{post ? post.label : `Post with id: ${postId} not found`}</h3>;
};

Post.propTypes = {
    postId: PropTypes.string,
    posts: PropTypes.array
};

export default Post;
