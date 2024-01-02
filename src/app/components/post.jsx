import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

const Post = ({ postId, posts }) => {
    const history = useHistory();
    const handleSave = () => {
        history.replace("/posts");
    };
    const getPostById = (id) => posts.find((post) => post._id === id);
    const post = getPostById(postId);
    return (
        <>
            <h3>{post ? post.label : `Post with id: ${postId} not found`}</h3>
            <button onClick={handleSave}>Save</button>
        </>
    );
};

Post.propTypes = {
    postId: PropTypes.string,
    posts: PropTypes.array
};

export default Post;
