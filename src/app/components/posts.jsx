import React from "react";
import PostsList from "./postsList";
import Post from "./post";
import query from "query-string";
import { useParams, useLocation } from "react-router-dom";

const Posts = () => {
    const posts = [
        { _id: "1", label: "Post 1" },
        { _id: "2", label: "Post 2" },
        { _id: "3", label: "Post 3" }
    ];
    const { postId } = useParams();
    const { search } = useLocation();
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
                <Post posts={posts} postId={postId} />
            ) : (
                <PostsList posts={posts} />
            )}
        </>
    );
};

export default Posts;
