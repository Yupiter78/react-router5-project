import React from "react";
import PostsList from "./postsList";
import Post from "./post";
import PropTypes from "prop-types";

const Posts = ({ match }) => {
    const posts = [
        { _id: "1", label: "Post 1" },
        { _id: "2", label: "Post 2" },
        { _id: "3", label: "Post 3" }
    ];
    const { postId } = match.params;
    return (
        <>
            {postId ? (
                <Post posts={posts} postId={postId} />
            ) : (
                <PostsList posts={posts} />
            )}
        </>
    );
};

Posts.propTypes = {
    match: PropTypes.object
};

export default Posts;
