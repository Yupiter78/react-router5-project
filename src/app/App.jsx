import React from "react";
import Navbar from "./components/navbar";
import { Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Login from "./components/login";
import Posts from "./components/posts";
import Home from "./components/home";
import Stats from "./components/stats";
import NotFound from "./components/not-found";

function App() {
    return (
        <div className="m-2">
            <Navbar />
            <h1>App</h1>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/dashboard/stats" component={Stats} />
                <Route path="/dashboard" component={Dashboard} />

                <Route path="/login" component={Login} />
                <Route path="/posts/:postId?" component={Posts} />
                <Route path="/404" component={NotFound} />
                <Redirect from="/admin" to="/dashboard" />
                <Redirect to="/404" />
            </Switch>
        </div>
    );
}

export default App;
