import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./components/Menu";
import SearchComponent from "./components/Search";

function Index() {
  return <h2>Home</h2>;
}

function Search() {
  return <SearchComponent />
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
      <Menu>
        <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/search/" component={Search} />
            <Route path="/save/" component={Save} />
            <Route component={Draw404} />
        </Switch>
      </Menu>       
    </Router>
  );
}

export default AppRouter;
