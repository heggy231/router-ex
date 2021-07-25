import React from "react";

import About from "./components/About";
import Blog from "./components/Blog";
import Home from "./components/Home";

import { 
  BrowserRouter as Router, 
  Switch, 
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="*">
          <h2>404: Page Not Found.</h2>
          <Link to="/">Take me back to Home page!</Link>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
