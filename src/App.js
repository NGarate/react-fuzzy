import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ResponsiveDrawer from "./mainMenu";

function Index() {
  return <h2>Home</h2>;
}

function Search() {
  return <h2>Search</h2>;
}

function Save() {
  return <h2>Save</h2>;
}

function Draw404() {
  return <h2>404</h2>;
}

function AppRouter() {
  return (
    <Router>
      <ResponsiveDrawer>
        <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/search/" component={Search} />
            <Route path="/save/" component={Save} />
            <Route component={Draw404} />
        </Switch>
      </ResponsiveDrawer>       
    </Router>
  );
}

export default AppRouter;
