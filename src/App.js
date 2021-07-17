import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Post from "./components/Post";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/post/:id" children={<Post />} />
            </Switch>
        </Router>
    );
};

export default App;
