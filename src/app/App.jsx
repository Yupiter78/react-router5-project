import React from "react";
import Navbar from "./components/navbar";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Login from "./components/login";
// import Posts from "./components/posts";
import Home from "./components/home";
import Stats from "./components/stats";
import Post from "./components/post";
import PostsList from "./components/postsList";

function App() {
    const posts = [
        { _id: "1", label: "Post 1" },
        { _id: "2", label: "Post 2" },
        { _id: "3", label: "Post 3" }
    ];
    return (
        <div className="m-2">
            <Navbar />
            <h1>App</h1>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/dashboard/stats" component={Stats} />
                <Route path="/dashboard" component={Dashboard} />

                <Route path="/login" component={Login} />
                <Route
                    path="/posts/:postId"
                    render={(props) => <Post {...props} posts={posts} />}
                />
                <Route
                    path="/posts"
                    render={(props) => <PostsList {...props} posts={posts} />}
                />
            </Switch>
        </div>
    );
}

export default App;
