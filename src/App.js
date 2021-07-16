import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Home} exact />
            </Switch>
        </Router>
    );
};

export default App;
