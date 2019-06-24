import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Index() {
  return <h2>Home</h2>;
}

function Search() {
  return <h2>Search</h2>;
}

function Save() {
  return <h2>Save</h2>;
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search/">Search</Link>
            </li>
            <li>
              <Link to="/save/">Save</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/search/" component={Search} />
        <Route path="/save/" component={Save} />
      </div>
    </Router>
  );
}

export default AppRouter;
