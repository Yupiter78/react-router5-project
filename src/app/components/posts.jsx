import React from "react";
import PostsList from "./postsList";
import Post from "./post";
import PropTypes from "prop-types";
import query from "query-string";

const Posts = ({ match, location, history }) => {
    const posts = [
        { _id: "1", label: "Post 1" },
        { _id: "2", label: "Post 2" },
        { _id: "3", label: "Post 3" }
    ];
    const { postId } = match.params;
    const { search } = location;
    console.log("search:", query.parse(search));

    const params = new URLSearchParams(search);
    const paramsObj = {};
    for (const [key, value] of params) {
        paramsObj[key] = value;
    }
    console.log("paramsObj:", paramsObj);

    return (
        <>
            {postId ? (
                <Post posts={posts} postId={postId} history={history} />
            ) : (
                <PostsList posts={posts} />
            )}
        </>
    );
};

Posts.propTypes = {
    match: PropTypes.object,
    location: PropTypes.object,
    history: PropTypes.object
};

export default Posts;
