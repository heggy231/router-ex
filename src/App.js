import React, { useState } from "react";

import About from "./components/About";
import Blog from "./components/Blog";
import Home from "./components/Home";

import { 
  BrowserRouter as Router, 
  Switch, 
  Route,
  Link,
  Redirect
} from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const _toggleIsLoggedIn = () => setIsLoggedIn(!isLoggedIn);

  return (
    <Router>
      <div>
        <button onClick={_toggleIsLoggedIn}>
          { isLoggedIn ? "Logout" : "Login"}
        </button>
        <br />
        <nav>
          <Link to="/">Home</Link>
          { isLoggedIn && <Link to="/blog">Blog</Link> }
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
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
