import React from "react";
import { Route, Router, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Images from "./pages/Images";
import history from "./history";

const App = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/search/:term?" exact component={Images} />
            </Switch>
        </Router>
    );
};

export default App;
