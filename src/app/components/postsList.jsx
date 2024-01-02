import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PostsList = ({ posts }) => {
    return (
        <>
            {posts.map((post) => (
                <Link key={post._id} to={`/posts/${post._id}`}>
                    <h3>{post.label}</h3>
                </Link>
            ))}
        </>
    );
};

PostsList.propTypes = {
    posts: PropTypes.array
};
export default PostsList;
